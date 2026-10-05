import React, {useContext} from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import {illustration, skillsSection} from "../../portfolio";
import {Fade} from "../../components/fade/Fade";
import {motion} from "framer-motion";
import {useReducedMotion} from "../../hooks/useReducedMotion";
import globalParcelTracking from "../../assets/lottie/globalParcelTracking";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";
import CustomSvgIcon, {isCustomSvg} from "../../components/common/CustomSvgIcon";

function renderTechIcon(iconKey, isTag = false) {
  if (!iconKey) return null;
  if (isCustomSvg(iconKey)) {
    return (
      <CustomSvgIcon
        name={iconKey}
        className={isTag ? "tag-icon-svg" : "card-icon-svg"}
      />
    );
  }
  return <i className={iconKey} aria-hidden="true"></i>;
}

export default function Skills() {
  const {isDark} = useContext(StyleContext);
  const reduceMotion = useReducedMotion();

  if (!skillsSection.display) {
    return null;
  }

  const hasSkillCards =
    Array.isArray(skillsSection.skillCards) &&
    skillsSection.skillCards.length > 0;

  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      <div className="skills-main-div">
        <Fade left duration={1000}>
          <div className="skills-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={globalParcelTracking} />
            ) : (
              <img
                alt="Man Working"
                src={require("../../assets/images/developerActivity.svg")}
              />
            )}
          </div>
        </Fade>
        <Fade right duration={1000}>
          <div className="skills-text-div">
            <h1
              className={isDark ? "dark-mode skills-heading" : "skills-heading"}
            >
              {skillsSection.title}{" "}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle skills-text-subtitle"
                  : "subTitle skills-text-subtitle"
              }
            >
              {skillsSection.subTitle}
            </p>
            <SoftwareSkill skills={skillsSection.softwareSkills} />
            {hasSkillCards ? (
              <div className="skills-cards-grid">
                {skillsSection.skillCards.map((card, i) => (
                  <motion.div
                    key={card.title || i}
                    className={`skill-feature-card ${card.accent || "blue"}`}
                    whileHover={reduceMotion ? undefined : {y: -4}}
                    transition={{duration: 0.25, ease: "easeOut"}}
                  >
                    <div className="card-top-row">
                      <div
                        className={`card-icon-wrapper ${card.accent || "blue"}`}
                      >
                        {renderTechIcon(card.icon, false)}
                      </div>
                      <h3 className="card-feature-title">{card.title}</h3>
                    </div>
                    <p className="card-feature-desc">{card.description}</p>
                    {card.tags && card.tags.length > 0 && (
                      <div className="card-tags-list">
                        {card.tags.map((tag, tagIdx) => {
                          const tagName =
                            typeof tag === "string" ? tag : tag.name;
                          const tagIcon =
                            typeof tag === "object" ? tag.icon : null;
                          return (
                            <span key={tagIdx} className="card-tag-pill">
                              {tagIcon && renderTechIcon(tagIcon, true)}
                              <span>{tagName}</span>
                            </span>
                          );
                        })}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            ) : (
              <div>
                {skillsSection.skills.map((skills, i) => {
                  return (
                    <p
                      key={i}
                      className={
                        isDark
                          ? "dark-mode subTitle skills-text"
                          : "subTitle skills-text"
                      }
                    >
                      {skills}
                    </p>
                  );
                })}
              </div>
            )}
          </div>
        </Fade>
      </div>
    </div>
  );
}
