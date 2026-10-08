import React, {useContext, useEffect, useState} from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useMotionValueEvent,
  useSpring,
  useTransform,
  animate
} from "framer-motion";
import StyleContext from "../../contexts/StyleContext";
import "./SplashScreen.scss";

/**
 * Line Reveal Loading Screen
 * Implemented from https://motion.dev/examples/react-loading-line-reveal
 * Exact Showcase Specs:
 * - Progress spring: stiffness 500, damping 40
 * - Step interval: 300ms, increment: Math.random() * 0.3
 * - Completion trigger: progress >= 1
 * - Horizontal curtain reveal: spring transition with visualDuration 0.5s (500ms), bounce 0
 */
function useProgress() {
  const progress = useSpring(0, {
    stiffness: 500,
    damping: 40
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const next = progress.get() + Math.random() * 0.3;

      if (next >= 1) {
        progress.set(1);
        clearInterval(interval);
      } else {
        progress.set(next);
      }
    }, 300);

    return () => clearInterval(interval);
  }, [progress]);

  // Fallback safety to guarantee progress reaches 1 by 1500ms
  useEffect(() => {
    const timer = setTimeout(() => {
      if (progress.get() < 1) {
        progress.set(1);
      }
    }, 1500);
    return () => clearTimeout(timer);
  }, [progress]);

  return progress;
}

export default function SplashScreen({onFinish}) {
  const {isDark} = useContext(StyleContext);
  const [isLoaded, setIsLoaded] = useState(false);

  const progress = useProgress();
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

  // Completion trigger for horizontal expansion
  useMotionValueEvent(progress, "change", latest => {
    if (latest >= 1 && !isLoaded) {
      setIsLoaded(true);
    }
  });

  // Horizontal expansion animation upon loaded (visualDuration: 0.5s = 500ms, bounce: 0)
  useEffect(() => {
    if (!isLoaded) return;

    const transition = {
      type: "spring",
      visualDuration: 0.5,
      bounce: 0
    };

    animate(leftEdge, "calc(0% - 0px)", transition);
    animate(rightEdge, "calc(100% + 0px)", transition);

    const finishTimer = setTimeout(() => {
      if (onFinish) onFinish();
    }, 500);

    return () => clearTimeout(finishTimer);
  }, [isLoaded, leftEdge, rightEdge, onFinish]);

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
        transition={{duration: 0.5}}
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
