import React, {useContext, useState, useEffect, useMemo} from "react";
import {motion, AnimatePresence} from "framer-motion";
import StyleContext from "../../contexts/StyleContext";
import {
  skillsSection,
  techStack,
  educationInfo,
  bigProjects,
  achievementSection
} from "../../portfolio";
import "./RadialMenu.scss";

// SVG Paths for Dots Morph Button (from https://motion.dev/examples/react-dots-morph-button)
const dotsPaths = [
  {
    dot: "M27.75 27.75L27.7499 27.7499",
    line: "M15.75 15.75L27.75 27.75"
  },
  {
    dot: "M27.75 3.75L27.7499 3.75007",
    line: "M15.75 15.75L27.75 3.75"
  },
  {
    dot: "M3.75 27.75L3.75007 27.7499",
    line: "M15.75 15.75L3.75 27.75"
  },
  {
    dot: "M3.75 3.75L3.75007 3.75007",
    line: "M3.75 3.75L14.75 14.75"
  }
];

const morphSpring = {stiffness: 170, damping: 26};

export default function RadialMenu() {
  const {isDark, changeTheme} = useContext(StyleContext);
  const [isOpen, setIsOpen] = useState(false);

  const viewSkills = skillsSection.display;
  const viewProficiency = techStack.display || techStack.viewSkillBars;
  const viewEducation = educationInfo.display;
  const viewProjects = bigProjects.display;
  const viewAchievement = achievementSection.display;

  // Build the list of actions dynamically with mathematical angle distribution
  const menuActions = useMemo(() => {
    const tier1Items = [
      {
        id: "theme",
        label: isDark ? "Light Mode" : "Dark Mode",
        icon: isDark ? "fas fa-sun" : "fas fa-moon",
        isTheme: true,
        tier: 1
      },
      {
        id: "contact",
        label: "Contact Me",
        href: "#contact",
        icon: "fas fa-paper-plane",
        tier: 1
      },
      viewSkills && {
        id: "skills",
        label: "Skills",
        href: "#skills",
        icon: "fas fa-code",
        tier: 1
      }
    ].filter(Boolean);

    const tier2Items = [
      viewProficiency && {
        id: "proficiency",
        label: "Proficiency",
        href: "#proficiency",
        icon: "fas fa-chart-line",
        tier: 2
      },
      viewEducation && {
        id: "education",
        label: "Education",
        href: "#education",
        icon: "fas fa-graduation-cap",
        tier: 2
      },
      viewProjects && {
        id: "projects",
        label: "Projects",
        href: "#projects",
        icon: "fas fa-laptop-code",
        tier: 2
      },
      viewAchievement && {
        id: "achievements",
        label: "Achievements",
        href: "#achievements",
        icon: "fas fa-trophy",
        tier: 2
      }
    ].filter(Boolean);

    // Distribute angles in Tier 1 (range: 98° to 178°)
    const n1 = tier1Items.length;
    const itemsWithAngles1 = tier1Items.map((item, i) => {
      let angle = 138;
      if (n1 > 1) {
        angle = 98 + (i * (178 - 98)) / (n1 - 1);
      }
      return {...item, angle};
    });

    // Distribute angles in Tier 2 (range: 90° to 180°)
    const n2 = tier2Items.length;
    const itemsWithAngles2 = tier2Items.map((item, i) => {
      let angle = 135;
      if (n2 > 1) {
        angle = 90 + (i * (180 - 90)) / (n2 - 1);
      }
      return {...item, angle};
    });

    return [...itemsWithAngles1, ...itemsWithAngles2];
  }, [
    isDark,
    viewSkills,
    viewProficiency,
    viewEducation,
    viewProjects,
    viewAchievement
  ]);

  // Close when window resizes to desktop width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  // Dismiss and scroll / toggle theme
  const handleItemClick = (e, item) => {
    if (item.isTheme) {
      changeTheme(e);
      setIsOpen(false);
      return;
    }

    if (item.href) {
      e.preventDefault();
      setIsOpen(false);
      const target = document.querySelector(item.href);
      if (target) {
        target.scrollIntoView({behavior: "smooth"});
      } else {
        window.location.hash = item.href;
      }
    }
  };

  return (
    <div
      className={`radial-menu-wrapper ${isDark ? "dark-theme" : "light-theme"}`}
    >
      {/* Backdrop Scrim */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="radial-backdrop"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.2}}
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* Floating Radial Actions Container */}
      <div className="radial-menu-container">
        {/* Radial Fanned Items */}
        <AnimatePresence>
          {isOpen &&
            menuActions.map((item, index) => {
              const radius = item.tier === 1 ? 74 : 138;
              const rad = (item.angle * Math.PI) / 180;
              const targetX = Math.round(radius * Math.cos(rad));
              const targetY = Math.round(-radius * Math.sin(rad));

              return (
                <motion.div
                  key={item.id}
                  className="radial-item-wrapper"
                  initial={{scale: 0, x: 0, y: 0, opacity: 0}}
                  animate={{scale: 1, x: targetX, y: targetY, opacity: 1}}
                  exit={{scale: 0, x: 0, y: 0, opacity: 0}}
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 25,
                    delay: index * 0.03
                  }}
                >
                  <motion.button
                    type="button"
                    className={`radial-item-btn ${item.isTheme ? "theme-item" : ""}`}
                    onClick={e => handleItemClick(e, item)}
                    whileHover={{scale: 1.15}}
                    whileTap={{scale: 0.92}}
                    aria-label={item.label}
                    title={item.label}
                  >
                    <i className={item.icon} aria-hidden="true" />
                    <span className="radial-item-tooltip">{item.label}</span>
                  </motion.button>
                </motion.div>
              );
            })}
        </AnimatePresence>

        {/* Central Radial Trigger: Dots Morph Button */}
        <motion.button
          type="button"
          className={`radial-trigger-btn ${isOpen ? "is-open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{scale: 1.08}}
          whileTap={{scale: 0.93}}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          title={isOpen ? "Close menu" : "Open menu"}
        >
          <motion.div
            className="radial-dots-inner"
            animate={{rotate: isOpen ? 90 : 0}}
            transition={{type: "spring", ...morphSpring}}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 32 32"
              fill="none"
              style={{overflow: "visible", display: "block"}}
            >
              {dotsPaths.map((p, idx) => (
                <motion.path
                  key={idx}
                  stroke="currentColor"
                  strokeLinecap="round"
                  initial={false}
                  animate={{
                    d: isOpen ? p.line : p.dot,
                    strokeWidth: isOpen ? 6 : 12
                  }}
                  transition={{
                    d: {type: "spring", ...morphSpring},
                    strokeWidth: {type: "spring", ...morphSpring}
                  }}
                />
              ))}
            </svg>
          </motion.div>
        </motion.button>
      </div>
    </div>
  );
}
