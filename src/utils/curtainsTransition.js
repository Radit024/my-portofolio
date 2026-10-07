import "./curtainsTransition.scss";

/**
 * Motion.dev Curtains: Mixed Effects Transition (Wipe + Iris)
 * Reference: https://motion.dev/examples/react-curtains-mixed
 *
 * Covers viewport with a Wipe effect, executes the state update while hidden,
 * and reveals the new view with an Iris effect.
 *
 * Performance-engineered:
 * - GPU compositor-driven clip-path interpolation with consistent pixel units
 * - Hardware layer promotion (translateZ, contain: strict)
 * - Temporary suppression of sub-element CSS transitions during swap to eliminate reflow/paint churn
 * - Double requestAnimationFrame layout synchronization
 */

const DEFAULT_EASING = "cubic-bezier(0.76, 0, 0.24, 1)";
const DEFAULT_COVER_DURATION = 280; // ms (snappy, sub-300ms)
const DEFAULT_REVEAL_DURATION = 340; // ms

let isTransitioning = false;

function isReducedMotionRequested() {
  if (typeof window === "undefined" || !window.matchMedia) return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function isTestEnvironment() {
  return (
    typeof process !== "undefined" &&
    process.env &&
    process.env.NODE_ENV === "test"
  );
}

function playAnimation(element, keyframes, options) {
  if (!element || !element.animate) {
    return Promise.resolve();
  }
  return new Promise((resolve) => {
    try {
      const anim = element.animate(keyframes, options);
      if (anim && anim.finished && typeof anim.finished.then === "function") {
        anim.finished.then(() => resolve()).catch(() => resolve());
      } else if (anim) {
        anim.onfinish = () => resolve();
        anim.onerror = () => resolve();
      } else {
        resolve();
      }
    } catch (err) {
      resolve();
    }
  });
}

/**
 * Creates the Wipe effect for cover phase.
 * Direction can be "right", "left", "down", or "up".
 */
export function wipe(options = {}) {
  const direction = options.direction || "right";
  let fromTransform = "translateX(-100%)";
  let toTransform = "translateX(0%)";

  if (direction === "left") {
    fromTransform = "translateX(100%)";
    toTransform = "translateX(0%)";
  } else if (direction === "down") {
    fromTransform = "translateY(-100%)";
    toTransform = "translateY(0%)";
  } else if (direction === "up") {
    fromTransform = "translateY(100%)";
    toTransform = "translateY(0%)";
  }

  return {
    type: "wipe",
    async cover(element, duration = DEFAULT_COVER_DURATION) {
      await playAnimation(
        element,
        [
          { transform: fromTransform, clipPath: "none" },
          { transform: toTransform, clipPath: "none" }
        ],
        {
          duration,
          easing: DEFAULT_EASING,
          fill: "forwards"
        }
      );
    }
  };
}

/**
 * Creates the Iris effect for reveal phase.
 * Uses exact pixel dimensions for 100% GPU compositor acceleration.
 * origin: { x: 0.5, y: 0.5 } (normalized coordinates 0..1).
 */
export function iris(options = {}) {
  const origin = options.origin || { x: 0.5, y: 0.5 };
  return {
    type: "iris",
    async reveal(element, duration = DEFAULT_REVEAL_DURATION) {
      const winW = typeof window !== "undefined" ? window.innerWidth || 1024 : 1024;
      const winH = typeof window !== "undefined" ? window.innerHeight || 768 : 768;

      const posX = Math.round(origin.x * winW);
      const posY = Math.round(origin.y * winH);

      const maxRadius = Math.ceil(
        Math.hypot(
          Math.max(posX, winW - posX),
          Math.max(posY, winH - posY)
        )
      );

      // GPU-accelerated Iris reveal (shrink circular curtain mask into origin point)
      await playAnimation(
        element,
        [
          {
            clipPath: `circle(${maxRadius + 24}px at ${posX}px ${posY}px)`,
            transform: "translateX(0%)"
          },
          {
            clipPath: `circle(0px at ${posX}px ${posY}px)`,
            transform: "translateX(0%)"
          }
        ],
        {
          duration,
          easing: DEFAULT_EASING,
          fill: "forwards"
        }
      );
    }
  };
}

/**
 * Curtains Mixed Effects Orchestrator
 *
 * @param {Function} updateCallback - Function to execute when viewport is fully covered
 * @param {Object} options - Configuration options
 * @param {string} options.color - Background color of the curtain
 * @param {Object} options.origin - Origin coordinates { x, y } for Iris reveal
 * @param {string} options.direction - Direction of Wipe cover ("right" | "left")
 * @param {number} options.coverDuration - Duration for cover phase (ms)
 * @param {number} options.revealDuration - Duration for reveal phase (ms)
 */
export async function curtains(updateCallback, options = {}) {
  if (typeof updateCallback !== "function") return;

  // Immediately execute in test environment, reduced motion, or non-browser
  if (
    isTestEnvironment() ||
    isReducedMotionRequested() ||
    typeof document === "undefined" ||
    !document.body ||
    !document.body.animate
  ) {
    await updateCallback();
    return;
  }

  // Prevent overlapping concurrent transitions
  if (isTransitioning) {
    return;
  }
  isTransitioning = true;

  const color = options.color || "#0d111c";
  const origin = options.origin || { x: 0.5, y: 0.5 };
  const direction = options.direction || "right";
  const coverDuration = options.coverDuration || DEFAULT_COVER_DURATION;
  const revealDuration = options.revealDuration || DEFAULT_REVEAL_DURATION;

  // 1. Create curtains container
  const container = document.createElement("div");
  container.className = "motion-curtains";
  container.setAttribute("data-motion-curtains", "");
  container.setAttribute("aria-hidden", "true");

  // 2. Create curtain panel
  const curtain = document.createElement("div");
  curtain.className = "motion-curtain";
  curtain.style.setProperty("--curtain", color);
  container.appendChild(curtain);

  document.body.appendChild(container);

  try {
    // Phase 1: Wipe Cover
    const coverEffect = wipe({ direction });
    await coverEffect.cover(curtain, coverDuration);

    // Suppress background element CSS transitions during DOM mutation
    document.documentElement.classList.add("theme-curtain-transitioning");

    // Phase 2: State Update behind the curtain
    await updateCallback();

    // Allow browser two paint frames to apply and stabilize styles
    await new Promise((resolve) => {
      requestAnimationFrame(() => {
        requestAnimationFrame(resolve);
      });
    });

    // Phase 3: Iris Reveal
    const revealEffect = iris({ origin });
    await revealEffect.reveal(curtain, revealDuration);
  } catch (err) {
    console.error("Curtains transition error:", err);
  } finally {
    document.documentElement.classList.remove("theme-curtain-transitioning");
    if (container.parentNode) {
      container.parentNode.removeChild(container);
    }
    isTransitioning = false;
  }
}

export default curtains;
