import React, {useContext} from "react";
import "./Progress.scss";
import {illustration, techStack} from "../../portfolio";
import {financeTechStack} from "../../financePortfolio";
import {Fade} from "../../components/fade/Fade";
import developmentPerson from "../../assets/lottie/developmentPerson";
import agriData from "../../assets/lottie/agriData";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import {motion} from "framer-motion";
import {useReducedMotion} from "../../hooks/useReducedMotion";
import StyleContext from "../../contexts/StyleContext";
import {usePortfolioMode} from "../../contexts/PortfolioModeContext";

const containerVariants = {
  hidden: {opacity: 0},
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.15
    }
  }
};

const skillItemVariants = {
  hidden: {opacity: 0, x: -20},
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

const barFillVariants = {
  hidden: {width: "0%"},
  visible: targetWidth => ({
    width: targetWidth,
    transition: {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.05
    }
  })
};

export default function StackProgress() {
  const reduceMotion = useReducedMotion();
  const {isDark} = useContext(StyleContext) || {};
  const {mode} = usePortfolioMode();
  const isFinance = mode === "finance";
  const activeTechStack = isFinance ? financeTechStack : techStack;

  if (activeTechStack.viewSkillBars || activeTechStack.display) {
    return (
      <Fade bottom duration={1000} distance="20px">
        <div className="skills-container" id="proficiency">
          <motion.div
            className="skills-bar"
            variants={reduceMotion ? undefined : containerVariants}
            initial={reduceMotion ? "visible" : "hidden"}
            whileInView="visible"
            viewport={{once: true, amount: 0.2}}
          >
            <h1 className="skills-heading">{activeTechStack.title || "Proficiency"}</h1>
            {activeTechStack.subtitle && (
              <p
                className={
                  isDark
                    ? "dark-mode subTitle skills-subtitle"
                    : "subTitle skills-subtitle"
                }
              >
                {activeTechStack.subtitle}
              </p>
            )}
            <div className="skills-list">
              {activeTechStack.experience.map((exp, i) => {
                return (
                  <motion.div
                    key={i}
                    className="skill"
                    variants={reduceMotion ? undefined : skillItemVariants}
                  >
                    <div className="skill-header-row">
                      <p className="skill-name">{exp.Stack}</p>
                      <span className="skill-percentage">
                        {exp.progressPercentage}
                      </span>
                    </div>
                    <div className="meter">
                      <motion.span
                        className="meter-fill"
                        custom={exp.progressPercentage}
                        variants={reduceMotion ? undefined : barFillVariants}
                        style={
                          reduceMotion
                            ? {width: exp.progressPercentage}
                            : undefined
                        }
                      />
                    </div>
                    {exp.technologies && (
                      <div className="skill-tech-pills">
                        {exp.technologies.split(",").map((tech, techIdx) => (
                          <span key={techIdx} className="tech-chip">
                            {tech.trim()}
                          </span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <div className="skills-image">
            {illustration.animated ? (
              <DisplayLottie
                key={isFinance ? "finance-progress-lottie" : "tech-progress-lottie"}
                animationData={isFinance ? agriData : developmentPerson}
              />
            ) : (
              <img
                alt="Skills"
                src={require("../../assets/images/skill.svg")}
              />
            )}
          </div>
        </div>
      </Fade>
    );
  }
  return null;
}
