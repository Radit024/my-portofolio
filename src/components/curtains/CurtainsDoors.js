import React from "react";
import {motion, AnimatePresence} from "framer-motion";
import {usePortfolioMode} from "../../contexts/PortfolioModeContext";
import "./CurtainsDoors.scss";

// Motion.dev signature curtains ease
const CURTAIN_EASE = [0.76, 0, 0.24, 1];

export default function CurtainsDoors() {
  const {isTransitioning, transitionPhase, targetMode} = usePortfolioMode();

  if (!isTransitioning) return null;

  const isEnteringFinance = targetMode === "finance";
  const isCoveredOrClosing =
    transitionPhase === "closing" || transitionPhase === "covered";

  return (
    <div
      className={`motion-curtains-doors-container ${
        isEnteringFinance ? "target-finance" : "target-tech"
      }`}
      aria-hidden="true"
    >
      {/* Left Door Panel */}
      <motion.div
        className="curtain-door-panel left-door"
        initial={{scaleX: 0}}
        animate={{scaleX: isCoveredOrClosing ? 1 : 0}}
        transition={{
          duration: 0.5,
          ease: CURTAIN_EASE
        }}
        style={{transformOrigin: "left center"}}
      >
        <div className="door-surface">
          <div className="door-grid-pattern" />
          <div className="door-edge-glow right-edge" />
        </div>
      </motion.div>

      {/* Right Door Panel */}
      <motion.div
        className="curtain-door-panel right-door"
        initial={{scaleX: 0}}
        animate={{scaleX: isCoveredOrClosing ? 1 : 0}}
        transition={{
          duration: 0.5,
          ease: CURTAIN_EASE
        }}
        style={{transformOrigin: "right center"}}
      >
        <div className="door-surface">
          <div className="door-grid-pattern" />
          <div className="door-edge-glow left-edge" />
        </div>
      </motion.div>

      {/* Center Vault Seal / Transition Emblem */}
      <AnimatePresence>
        {isCoveredOrClosing && (
          <motion.div
            className="curtains-doors-emblem"
            initial={{opacity: 0, scale: 0.85, y: 10}}
            animate={{opacity: 1, scale: 1, y: 0}}
            exit={{opacity: 0, scale: 0.9, y: -10}}
            transition={{duration: 0.25, ease: "easeOut"}}
          >
            <div className="emblem-card">
              <div className="emblem-icon-ring">
                {isEnteringFinance ? (
                  <i className="fas fa-chart-line emblem-icon" />
                ) : (
                  <i className="fas fa-code emblem-icon" />
                )}
              </div>
              <div className="emblem-text-group">
                <span className="emblem-kicker">
                  {isEnteringFinance
                    ? "TRANSITIONING TO"
                    : "TRANSITIONING TO"}
                </span>
                <h2 className="emblem-title">
                  {isEnteringFinance
                    ? "Finance & Quantitative Mode"
                    : "Tech & Engineering Mode"}
                </h2>
                <p className="emblem-subtitle">
                  {isEnteringFinance
                    ? "Algorithmic Trading • Risk Architecture • Unit Economics"
                    : "Full-Stack • Web3 • AI Decision Systems"}
                </p>
              </div>
              <div className="emblem-pulse-indicator">
                <span className="pulse-dot" />
                <span className="pulse-text">Activating mode...</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
