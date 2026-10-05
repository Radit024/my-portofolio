import React from "react";
import {motion} from "framer-motion";
import {usePortfolioMode} from "../../contexts/PortfolioModeContext";
import "./FloatingModeSwitch.scss";

export default function FloatingModeSwitch() {
  const {mode} = usePortfolioMode();
  const isFinance = mode === "finance";

  return (
    <motion.aside
      className={`floating-mode-switch ${isFinance ? "mode-finance" : "mode-tech"}`}
      initial={{opacity: 0, y: 30}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.5, delay: 0.3}}
      aria-label="Mode switcher"
    >
    </motion.aside>
  );
}
