import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";

const SolidityIcon = () => (
  <svg
    className="software-skill-icon-svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    aria-label="Solidity"
  >
    <path d="M4.409 6.608L7.981.255l3.572 6.353H4.409zM8.411 0l3.569 6.348L15.552 0H8.411zm4.036 17.392l3.572 6.354 3.575-6.354h-7.147zm-.608-10.284h-7.43l3.715 6.605 3.715-6.605zm.428-.25h7.428L15.982.255l-3.715 6.603zM15.589 24l-3.569-6.349L8.448 24h7.141zm-3.856-6.858H4.306l3.712 6.603 3.715-6.603zm.428-.25h7.433l-3.718-6.605-3.715 6.605z" />
  </svg>
);

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
            const isSolidity =
              skills.fontAwesomeClassname === "solidity" ||
              skills.iconType === "solidity" ||
              skills.skillName?.toLowerCase().includes("solidity");

            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                {isSolidity ? (
                  <SolidityIcon />
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
