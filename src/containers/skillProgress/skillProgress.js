import React from "react";
import "./Progress.scss";
import {illustration, techStack} from "../../portfolio";
import Build from "../../assets/lottie/build";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";

export default function StackProgress() {
  if (techStack.display) {
    return (
      <div className="skills-container">
        <div className="skills-bar">
          <h1 className="skills-heading">{techStack.title}</h1>
          <p className="tech-stack-subtitle">{techStack.subtitle}</p>
          {techStack.experience.map((exp, i) => {
            return (
              <div key={exp.Stack} className="skill">
                <h3>{exp.Stack}</h3>
                <p>{exp.technologies}</p>
              </div>
            );
          })}
        </div>

        <div className="skills-image">
          {illustration.animated ? (
            <DisplayLottie animationData={Build} />
          ) : (
            <img alt="Skills" src={require("../../assets/images/skill.svg")} />
          )}
        </div>
      </div>
    );
  }
  return null;
}
