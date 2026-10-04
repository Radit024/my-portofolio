import React from "react";
import {motion} from "framer-motion";
import {useReducedMotion} from "../../hooks/useReducedMotion";
import "./Button.scss";

export default function Button({text, className, href, newTab}) {
  const reduceMotion = useReducedMotion();
  return (
    <div className={className}>
      <motion.a
        className="main-button"
        href={href}
        target={newTab ? "_blank" : undefined}
        rel={newTab ? "noopener noreferrer" : undefined}
        whileHover={reduceMotion ? undefined : {y: -2}}
        whileTap={reduceMotion ? undefined : {scale: 0.98}}
      >
        {text}
      </motion.a>
    </div>
  );
}
