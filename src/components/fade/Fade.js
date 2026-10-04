import React from "react";
import {motion} from "framer-motion";
import {useReducedMotion} from "../../hooks/useReducedMotion";

export function Fade({
  children,
  bottom,
  left,
  right,
  top,
  duration = 1000,
  distance = "20px",
  delay = 0
}) {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return <>{children}</>;

  const distVal = parseInt(distance, 10) || 20;
  let initialX = 0;
  let initialY = 0;

  if (bottom) initialY = distVal;
  if (top) initialY = -distVal;
  if (left) initialX = -distVal;
  if (right) initialX = distVal;

  return (
    <motion.div
      initial={{opacity: 0, x: initialX, y: initialY}}
      whileInView={{opacity: 1, x: 0, y: 0}}
      viewport={{once: true, amount: 0.1}}
      transition={{
        duration: duration / 1000,
        delay: delay / 1000,
        ease: [0.25, 0.1, 0.25, 1]
      }}
    >
      {children}
    </motion.div>
  );
}

export function Slide({
  children,
  left,
  right,
  top,
  bottom,
  duration = 1000,
  delay = 0
}) {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return <>{children}</>;

  let initialX = 0;
  let initialY = 0;

  if (left) initialX = -40;
  if (right) initialX = 40;
  if (top) initialY = -40;
  if (bottom) initialY = 40;

  return (
    <motion.div
      initial={{opacity: 0, x: initialX, y: initialY}}
      whileInView={{opacity: 1, x: 0, y: 0}}
      viewport={{once: true, amount: 0.1}}
      transition={{
        duration: duration / 1000,
        delay: delay / 1000,
        ease: [0.25, 0.1, 0.25, 1]
      }}
    >
      {children}
    </motion.div>
  );
}

export default Fade;
