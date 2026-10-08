import React, {useContext, useEffect, useState} from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
  animate
} from "framer-motion";
import StyleContext from "../../contexts/StyleContext";
import "./SplashScreen.scss";

/**
 * Line Reveal Loading Screen
 * Implemented from https://motion.dev/examples/react-loading-line-reveal
 * Features:
 * - A precision vertical line extends from screen center (50%) to top (0%) & bottom (100%).
 * - Upon completion, the polygon clip-path expands horizontally (50% -> 0% & 100%).
 * - Base overlay smoothly fades out, parting like an aperture to reveal the page.
 */
export default function SplashScreen() {
  const {isDark} = useContext(StyleContext);
  const [isLoaded, setIsLoaded] = useState(false);

  const progress = useMotionValue(0);
  const leftEdge = useMotionValue("calc(50% - 2px)");
  const rightEdge = useMotionValue("calc(50% + 2px)");
  const topEdge = useTransform(progress, [0, 1], ["50%", "0%"]);
  const bottomEdge = useTransform(progress, [0, 1], ["50%", "100%"]);

  /**
   * Polygon cut-out from motion.dev/examples/react-loading-line-reveal:
   * Cuts into the middle with a vertical line, then expands horizontally once progress is 1.
   */
  const clipPath = useMotionTemplate`polygon(
    0% 0%, ${leftEdge} 0%, ${leftEdge} ${topEdge}, ${leftEdge} ${bottomEdge}, ${rightEdge} ${bottomEdge}, ${rightEdge} ${topEdge}, 
    ${leftEdge} ${topEdge}, ${leftEdge} 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%
  )`;

  // Vertical line extension animation (Phase 1)
  useEffect(() => {
    const controls = animate(progress, 1, {
      duration: 0.95,
      ease: [0.16, 1, 0.3, 1]
    });
    return () => controls.stop();
  }, [progress]);

  // Completion trigger for horizontal expansion (Phase 2)
  useMotionValueEvent(progress, "change", latest => {
    if (latest >= 0.999 && !isLoaded) {
      setIsLoaded(true);
    }
  });

  // Fallback safety timer ensuring loaded trigger
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1050);
    return () => clearTimeout(timer);
  }, []);

  // Horizontal expansion animation upon loaded
  useEffect(() => {
    if (!isLoaded) return;

    const transition = {
      type: "spring",
      stiffness: 280,
      damping: 28,
      mass: 0.85
    };

    animate(leftEdge, "calc(0% - 0px)", transition);
    animate(rightEdge, "calc(100% + 0px)", transition);
  }, [isLoaded, leftEdge, rightEdge]);

  return (
    <div
      className={`splash-line-reveal-container ${isDark ? "dark-theme" : "light-theme"}`}
      role="status"
      aria-label="Loading portfolio"
    >
      {/* Base Underlay: solid background behind the reveal overlay, fades out on loaded */}
      <motion.div
        className="line-reveal-base-overlay"
        animate={{opacity: isLoaded ? 0 : 1}}
        transition={{duration: 0.45, ease: "easeOut"}}
      />

      {/* Primary Reveal Layer with Polygon Clip-Path */}
      <motion.div className="line-reveal-clip-overlay" style={{clipPath}} />

      {/* Precision Vertical Reveal Line Indicator */}
      <motion.div
        className="line-reveal-indicator"
        style={{
          scaleY: progress,
          transformOrigin: "50% 50%"
        }}
        animate={{opacity: isLoaded ? 0 : 1}}
        transition={{duration: 0.2}}
      />
    </div>
  );
}
