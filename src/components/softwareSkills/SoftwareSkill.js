import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";
import CustomSvgIcon, {isCustomSvg} from "../common/CustomSvgIcon";

export default function SoftwareSkill({skills: customSkills}) {
  const activeSkills = customSkills || skillsSection.softwareSkills;
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {activeSkills.map((skills, i) => {
            const svgKey =
              skills.iconType ||
              (isCustomSvg(skills.fontAwesomeClassname)
                ? skills.fontAwesomeClassname
                : null) ||
              (skills.skillName?.toLowerCase().includes("solidity")
                ? "solidity"
                : null);

            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                {svgKey ? (
                  <CustomSvgIcon
                    name={svgKey}
                    className="software-skill-icon-svg"
                    ariaLabel={skills.skillName}
                  />
                ) : (
                  <i className={skills.fontAwesomeClassname}></i>
                )}
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
