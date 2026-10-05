import React, {createContext, useContext, useState, useCallback} from "react";
import {useReducedMotion} from "../hooks/useReducedMotion";

const PortfolioModeContext = createContext({
  mode: "tech",
  isTransitioning: false,
  transitionPhase: "idle", // "idle" | "closing" | "covered" | "opening"
  targetMode: null,
  switchMode: () => {}
});

export const PortfolioModeProvider = ({children}) => {
  const reduceMotion = useReducedMotion();
  const [mode, setMode] = useState(() => {
    try {
      const saved = localStorage.getItem("portfolio_mode");
      return saved === "finance" ? "finance" : "tech";
    } catch {
      return "tech";
    }
  });

  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionPhase, setTransitionPhase] = useState("idle");
  const [targetMode, setTargetMode] = useState(null);

  const switchMode = useCallback(
    newMode => {
      if (newMode === mode || isTransitioning) return;

      if (reduceMotion) {
        setMode(newMode);
        try {
          localStorage.setItem("portfolio_mode", newMode);
        } catch {}
        if (typeof window !== "undefined" && typeof window.scrollTo === "function") {
          try {
            window.scrollTo({top: 0, behavior: "auto"});
          } catch {}
        }
        return;
      }

      setIsTransitioning(true);
      setTargetMode(newMode);
      setTransitionPhase("closing");

      // 1. Doors close (500ms)
      const closeTimer = setTimeout(() => {
        setTransitionPhase("covered");
        setMode(newMode);
        try {
          localStorage.setItem("portfolio_mode", newMode);
        } catch {}
        if (typeof window !== "undefined" && typeof window.scrollTo === "function") {
          try {
            window.scrollTo({top: 0, behavior: "auto"});
          } catch {}
        }

        // 2. Brief hold at center lock (180ms)
        const holdTimer = setTimeout(() => {
          setTransitionPhase("opening");

          // 3. Doors open (500ms)
          const openTimer = setTimeout(() => {
            setTransitionPhase("idle");
            setIsTransitioning(false);
            setTargetMode(null);
          }, 500);

          return () => clearTimeout(openTimer);
        }, 180);

        return () => clearTimeout(holdTimer);
      }, 500);

      return () => clearTimeout(closeTimer);
    },
    [mode, isTransitioning, reduceMotion]
  );

  return (
    <PortfolioModeContext.Provider
      value={{
        mode,
        isTransitioning,
        transitionPhase,
        targetMode,
        switchMode
      }}
    >
      {children}
    </PortfolioModeContext.Provider>
  );
};

export const usePortfolioMode = () => useContext(PortfolioModeContext);

export default PortfolioModeContext;
