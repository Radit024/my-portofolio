import React, {useEffect, useRef, Suspense, useContext, useMemo} from "react";
import {useReducedMotion} from "../../hooks/useReducedMotion";
import Lottie from "lottie-react";
import Loading from "../../containers/loading/Loading";
import StyleContext from "../../contexts/StyleContext";

/**
 * Adapt dark/near-black palette colors in Lottie animations so they
 * stand out vibrantly and legibly against dark backgrounds.
 */
const lottieAdaptedCache = new WeakMap();

function adaptLottieColors(data, isDark) {
  if (!isDark || !data) return data;
  if (lottieAdaptedCache.has(data)) {
    return lottieAdaptedCache.get(data);
  }

  try {
    const cloned = JSON.parse(JSON.stringify(data));

    function replaceColor(obj) {
      if (!obj || typeof obj !== "object") return;

      if (obj.c && Array.isArray(obj.c.k) && typeof obj.c.k[0] === "number") {
        const [r, g, b] = obj.c.k;
        // Match dark navy/black fills and strokes (e.g. #080039, #0a0a0a)
        if (r < 0.15 && g < 0.15 && b < 0.35) {
          // Replace with luminous lavender-slate palette
          obj.c.k = [
            0.85,
            0.88,
            0.98,
            obj.c.k[3] !== undefined ? obj.c.k[3] : 1
          ];
        }
      }

      for (const key of Object.keys(obj)) {
        if (typeof obj[key] === "object") {
          replaceColor(obj[key]);
        }
      }
    }

    replaceColor(cloned);
    lottieAdaptedCache.set(data, cloned);
    return cloned;
  } catch (e) {
    return data;
  }
}

export default function DisplayLottie({animationData}) {
  const container = useRef(null);
  const animation = useRef(null);
  const reduceMotion = useReducedMotion();
  const {isDark} = useContext(StyleContext) || {};

  const currentAnimationData = useMemo(() => {
    return adaptLottieColors(animationData, isDark);
  }, [animationData, isDark]);

  useEffect(() => {
    if (reduceMotion) {
      animation.current?.goToAndStop(0, true);
      return;
    }

    let inView = true;
    const updatePlayback = () => {
      if (inView && !document.hidden) {
        animation.current?.play();
      } else {
        animation.current?.pause();
      }
    };
    const observer =
      typeof IntersectionObserver === "undefined"
        ? null
        : new IntersectionObserver(entries => {
            inView = entries[0].isIntersecting;
            updatePlayback();
          });
    if (observer) observer.observe(container.current);
    document.addEventListener("visibilitychange", updatePlayback);
    updatePlayback();

    return () => {
      observer?.disconnect();
      document.removeEventListener("visibilitychange", updatePlayback);
    };
  }, [reduceMotion, animationData]);

  return (
    <div
      ref={container}
      className={isDark ? "lottie-container lottie-dark" : "lottie-container"}
      style={{
        filter: isDark
          ? "drop-shadow(0 12px 30px rgba(108, 99, 255, 0.22))"
          : undefined,
        transition: "filter 0.3s ease"
      }}
    >
      <Suspense fallback={<Loading />}>
        <Lottie
          lottieRef={animation}
          animationData={currentAnimationData}
          autoplay={false}
          loop={!reduceMotion}
        />
      </Suspense>
    </div>
  );
}
