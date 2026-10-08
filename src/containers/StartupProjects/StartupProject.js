import React, {useState, useEffect, useCallback} from "react";
import {motion, AnimatePresence} from "framer-motion";
import {useReducedMotion} from "../../hooks/useReducedMotion";
import "./StartupProjects.scss";
import "../LowerPortfolio.scss";
import {bigProjects} from "../../portfolio";
import LinkArrow from "../../components/linkArrow/LinkArrow";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import build from "../../assets/lottie/build";
import {Fade} from "../../components/fade/Fade";

function ArrowLeft() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

// Directional spring variants inspired by motion.dev/examples/react-animate-view-types
const slideVariants = {
  enter: direction => ({
    x: direction > 0 ? "100%" : direction < 0 ? "-100%" : 0,
    opacity: 0,
    scale: 0.98
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: {type: "spring", stiffness: 300, damping: 28, bounce: 0.2},
      opacity: {duration: 0.25},
      scale: {duration: 0.25}
    }
  },
  exit: direction => ({
    x: direction > 0 ? "-100%" : "100%",
    opacity: 0,
    scale: 0.98,
    transition: {
      x: {type: "spring", stiffness: 300, damping: 28, bounce: 0.2},
      opacity: {duration: 0.2},
      scale: {duration: 0.2}
    }
  })
};

const reducedVariants = {
  enter: {opacity: 0},
  center: {opacity: 1, transition: {duration: 0.25}},
  exit: {opacity: 0, transition: {duration: 0.2}}
};

export default function StartupProject() {
  const reduceMotion = useReducedMotion();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const projects = bigProjects.projects || [];
  const total = projects.length;

  const paginate = useCallback(
    newDirection => {
      if (total === 0) return;
      setDirection(newDirection);
      setCurrentIndex(prevIndex => (prevIndex + newDirection + total) % total);
    },
    [total]
  );

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === "ArrowLeft") {
        paginate(-1);
      } else if (e.key === "ArrowRight") {
        paginate(1);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [paginate]);

  if (!bigProjects.display || total === 0) return null;

  const currentProject = projects[currentIndex];

  return (
    <div className="lower-portfolio">
      <section className="portfolio-section project-showcase" id="projects">
        <header className="portfolio-section-header">
          <Fade left duration={1000} distance="30px">
            <div className="portfolio-header-text">
              <h2>{bigProjects.title}</h2>
              <p>
                {bigProjects.subtitle ||
                  "Quantitative trading systems, web applications, smart contracts, and decision support tools I have developed."}
              </p>
            </div>
          </Fade>
          <Fade right duration={1000} distance="30px">
            <div className="portfolio-header-image">
              <DisplayLottie animationData={build} />
            </div>
          </Fade>
        </header>

        {/* motion.dev Interactive Animated Viewport */}
        <div className="motion-view-stage">
          <div className="motion-view-viewport">
            <AnimatePresence
              initial={false}
              custom={direction}
              mode="popLayout"
            >
              <motion.article
                key={currentIndex}
                custom={direction}
                variants={reduceMotion ? reducedVariants : slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="project-card motion-view-card"
                drag={reduceMotion ? false : "x"}
                dragConstraints={{left: 0, right: 0}}
                dragElastic={0.2}
                onDragEnd={(e, {offset, velocity}) => {
                  const swipe = Math.abs(offset.x) * velocity.x;
                  if (swipe < -10000 || offset.x < -80) {
                    paginate(1);
                  } else if (swipe > 10000 || offset.x > 80) {
                    paginate(-1);
                  }
                }}
              >
                <div className="project-view-content">
                  {currentProject.previewLabel && (
                    <div className="project-view-meta">
                      <span className="project-category-badge">
                        {currentProject.previewLabel}
                      </span>
                    </div>
                  )}

                  <div className="project-detail">
                    <h3 className="project-title" title={currentProject.projectName}>
                      {currentProject.displayName || currentProject.projectName}
                    </h3>
                    <p className="project-description">
                      {currentProject.projectDesc}
                    </p>
                  </div>

                  {currentProject.skills && currentProject.skills.length > 0 && (
                    <div className="project-skills-list" aria-label="Project technologies">
                      {currentProject.skills.map(skill => (
                        <span key={skill} className="project-skill-pill">
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="project-card-footer">
                    {currentProject.footerLink?.map(link => (
                      <a
                        className="showcase-link"
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${link.name}: ${currentProject.projectName}`}
                      >
                        <span>{link.name}</span>
                        <LinkArrow />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>

          {/* Controls Bar (motion.dev signature toolbar) */}
          <div className="motion-view-toolbar">
            <button
              type="button"
              className="motion-nav-btn prev"
              aria-label="Previous project"
              onClick={() => paginate(-1)}
            >
              <ArrowLeft />
            </button>

            <div className="motion-counter-wrapper">
              <span className="motion-counter">
                {String(currentIndex + 1).padStart(2, "0")} /{" "}
                {String(total).padStart(2, "0")}
              </span>
            </div>

            <button
              type="button"
              className="motion-nav-btn next"
              aria-label="Next project"
              onClick={() => paginate(1)}
            >
              <ArrowRight />
            </button>
          </div>

          {/* Interactive Navigation Dots */}
          <div
            className="motion-dots"
            role="tablist"
            aria-label="Project slide navigation"
          >
            {projects.map((proj, idx) => (
              <button
                key={proj.projectName}
                type="button"
                role="tab"
                aria-selected={idx === currentIndex}
                aria-label={`Go to project ${idx + 1}: ${
                  proj.displayName || proj.projectName
                }`}
                className={`motion-dot ${idx === currentIndex ? "active" : ""}`}
                onClick={() => {
                  if (idx !== currentIndex) {
                    setDirection(idx > currentIndex ? 1 : -1);
                    setCurrentIndex(idx);
                  }
                }}
              />
            ))}
          </div>
        </div>

        {/* Accessible hidden items for complete DOM querying & SEO */}
        <div
          className="projects-hidden-store"
          style={{display: "none"}}
          aria-hidden="true"
        >
          {projects.map((project, idx) => {
            if (idx === currentIndex) return null;
            return (
              <div key={project.projectName} className="project-card">
                <h3>{project.displayName || project.projectName}</h3>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
