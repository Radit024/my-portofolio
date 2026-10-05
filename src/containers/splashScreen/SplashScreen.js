import React, {useContext, useEffect, useState} from "react";
import {motion} from "framer-motion";
import "./SplashScreen.scss";
import {greeting, splashScreen} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

const springExpand = {
  type: "spring",
  duration: 0.65,
  bounce: 0.1
};

const spinTransition = {
  ease: [0.57, 0.44, 0.66, 1.17],
  duration: 0.48
};

const modalVariants = {
  idle: {
    scale: 0.4,
    borderRadius: 58,
    opacity: 0
  },
  entry: {
    scale: 1,
    borderRadius: 58,
    opacity: 1,
    transition: {duration: 0.22, ease: "easeOut"}
  },
  spin: {
    scale: 1,
    borderRadius: 32,
    rotate: [-180, 0],
    transition: spinTransition
  },
  expand: {
    scale: 1,
    borderRadius: 24,
    rotate: 0,
    transition: springExpand
  }
};

const iconVariants = {
  idle: {scale: 0.6, opacity: 0},
  entry: {scale: 1, opacity: 1, transition: {duration: 0.2}},
  spin: {
    scale: [0.8, 1.75, 0.8],
    opacity: 1,
    transition: {duration: 0.48, ease: "easeInOut"}
  },
  expand: {
    scale: 2.3,
    opacity: 0,
    transition: {duration: 0.25, ease: "easeOut"}
  }
};

const innerVariants = {
  idle: {opacity: 0, scale: 0.92},
  entry: {opacity: 0, scale: 0.92},
  spin: {opacity: 0, scale: 0.92},
  expand: {
    opacity: 1,
    scale: 1,
    transition: {delay: 0.16, duration: 0.38, ease: "easeOut"}
  }
};

const techPills = [
  {name: "Full-Stack", icon: "fab fa-react", color: "cyan"},
  {name: "AI & DSS", icon: "fab fa-python", color: "emerald"},
  {name: "Web3", icon: "fas fa-cube", color: "purple"},
  {name: "Logistics", icon: "fas fa-truck-moving", color: "amber"}
];

const ambientGlyphs = [
  {glyph: "</>", top: "18%", left: "15%", delay: 0},
  {glyph: "+", top: "25%", right: "18%", delay: 0.4},
  {glyph: "{ }", bottom: "22%", left: "18%", delay: 0.8},
  {glyph: "◇", bottom: "26%", right: "16%", delay: 0.2},
  {glyph: "λ", top: "15%", right: "32%", delay: 0.6},
  {glyph: "//", bottom: "16%", left: "36%", delay: 1.0}
];

const sparkAngles = [0, 45, 90, 135, 180, 225, 270, 315];

export default function SplashScreen() {
  const {isDark} = useContext(StyleContext);
  const [phase, setPhase] = useState("idle");
  const [percent, setPercent] = useState(0);

  // Pokopia phase sequencer: idle -> entry -> spin -> expand
  useEffect(() => {
    const entryTimer = setTimeout(() => setPhase("entry"), 50);
    const spinTimer = setTimeout(() => setPhase("spin"), 320);
    const expandTimer = setTimeout(() => setPhase("expand"), 860);

    return () => {
      clearTimeout(entryTimer);
      clearTimeout(spinTimer);
      clearTimeout(expandTimer);
    };
  }, []);

  // Smooth harmonic counter for loading progress
  useEffect(() => {
    let isMounted = true;
    const startTime = Date.now();
    const totalDuration =
      splashScreen && splashScreen.duration ? splashScreen.duration : 3200;
    const progressDuration = totalDuration * 0.84;

    const timer = setInterval(() => {
      if (!isMounted) return;
      const elapsed = Date.now() - startTime;
      const t = Math.min(1, elapsed / progressDuration);
      const progress = Math.min(
        100,
        Math.round((1 - Math.exp(-4.2 * t) * Math.cos(3.2 * t)) * 100)
      );
      setPercent(progress);

      if (t >= 1) {
        clearInterval(timer);
        setPercent(100);
      }
    }, 28);

    return () => {
      isMounted = false;
      clearInterval(timer);
    };
  }, []);

  return (
    <div
      className={isDark ? "dark-mode splash-container" : "splash-container"}
      role="status"
      aria-label="Loading portfolio"
    >
      {/* Ambient Radial Spotlight Glow */}
      <motion.div
        className="pokopia-backdrop-glow"
        animate={{
          scale: phase === "expand" ? [1, 1.18, 1] : 0.85,
          opacity: phase === "expand" ? 0.9 : 0.4
        }}
        transition={{
          duration: 2.4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Floating Ambient Glyphs (Atmosphere) */}
      {ambientGlyphs.map((item, idx) => (
        <motion.div
          key={idx}
          className="ambient-floater"
          style={{top: item.top, left: item.left, right: item.right, bottom: item.bottom}}
          animate={{
            y: [-6, 6, -6],
            opacity: [0.35, 0.7, 0.35]
          }}
          transition={{
            duration: 3 + item.delay,
            repeat: Infinity,
            ease: "easeInOut",
            delay: item.delay
          }}
        >
          {item.glyph}
        </motion.div>
      ))}

      {/* Pokopia Modal Stage */}
      <div className="pokopia-stage" data-phase={phase}>
        {/* Particle Sparks Burst upon expand */}
        {phase === "expand" && (
          <div className="pokopia-spark-burst">
            {sparkAngles.map((deg, idx) => {
              const rad = (deg * Math.PI) / 180;
              const targetX = Math.cos(rad) * 110;
              const targetY = Math.sin(rad) * 110;
              return (
                <motion.div
                  key={idx}
                  className="pokopia-spark-dot"
                  initial={{x: 0, y: 0, scale: 0, opacity: 1}}
                  animate={{
                    x: targetX,
                    y: targetY,
                    scale: [0, 1.3, 0],
                    opacity: [1, 1, 0]
                  }}
                  transition={{
                    duration: 0.65,
                    ease: "easeOut",
                    delay: idx * 0.015
                  }}
                />
              );
            })}
          </div>
        )}

        <motion.div
          className="pokopia-modal"
          variants={modalVariants}
          initial="idle"
          animate={phase}
          layout
        >
          {/* Accent Inner Border */}
          <div className="pokopia-accent-ring" />

          {/* Central Pulse Icon (Active during entry & spin, vanishes on expand) */}
          <motion.div
            className="pokopia-icon-wrapper"
            variants={iconVariants}
            initial="idle"
            animate={phase}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
          </motion.div>

          {/* Inner Content Surface (Revealed upon expand) */}
          <motion.div
            className="pokopia-inner-content"
            variants={innerVariants}
            initial="idle"
            animate={phase}
          >
            {/* Top Pill Badge */}
            <div className="pokopia-badge-pill">
              <span className="pokopia-live-dot" />
              <span>DAFFA.DEV · PORTFOLIO 2026</span>
            </div>

            {/* Brand Signature */}
            <div className="pokopia-brand-row">
              <span className="pokopia-bracket">&lt;&nbsp;</span>
              <span className="pokopia-title">{greeting.username}</span>
              <span className="pokopia-bracket">&nbsp;/&gt;</span>
            </div>

            {/* Tech Specialty Pills (Visual Richness) */}
            <div className="pokopia-pills-grid">
              {techPills.map((pill, idx) => (
                <motion.div
                  key={pill.name}
                  className={`pokopia-pill-item ${pill.color}`}
                  initial={{opacity: 0, scale: 0.8, y: 10}}
                  animate={{opacity: 1, scale: 1, y: 0}}
                  transition={{
                    type: "spring",
                    stiffness: 340,
                    damping: 18,
                    delay: 0.18 + idx * 0.05
                  }}
                  whileHover={{scale: 1.06}}
                >
                  <i className={pill.icon} />
                  <span>{pill.name}</span>
                </motion.div>
              ))}
            </div>

            {/* Glowing Neon Progress Bar & Meta Counter */}
            <div className="pokopia-progress-container">
              <div className="pokopia-progress-track">
                <motion.div
                  className="pokopia-progress-fill"
                  initial={{scaleX: 0}}
                  animate={{scaleX: 1}}
                  transition={{
                    type: "spring",
                    stiffness: 28,
                    damping: 15,
                    delay: 0.15
                  }}
                />
              </div>

              <div className="pokopia-status-meta">
                <span>{percent === 100 ? "● WORKSPACE READY" : "INITIALIZING SYSTEMS"}</span>
                <span>{percent}%</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
