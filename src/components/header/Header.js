import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  skillsSection,
  techStack,
  educationInfo,
  bigProjects,
  achievementSection
} from "../../portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);

  const viewSkills = skillsSection.display;
  const viewProficiency = techStack.display || techStack.viewSkillBars;
  const viewEducation = educationInfo.display;
  const viewProjects = bigProjects.display;
  const viewAchievement = achievementSection.display;

  // Monochromatic, uniform navigation items
  const navItems = [
    viewSkills && {id: "skills", label: "Skills"},
    viewProficiency && {
      id: "proficiency",
      label: "Proficiency"
    },
    viewEducation && {
      id: "education",
      label: "Education"
    },
    viewProjects && {
      id: "projects",
      label: "Projects"
    },
    viewAchievement && {
      id: "achievements",
      label: "Achievements"
    },
    {id: "contact", label: "Contact Me"}
  ].filter(Boolean);

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>

        {/* Desktop Menu */}
        <ul
          className={
            isDark ? "dark-menu menu desktop-menu" : "menu desktop-menu"
          }
        >
          {navItems.map(item => (
            <li key={item.id}>
              <a href={`#${item.id}`}>{item.label}</a>
            </li>
          ))}
          <li className="theme-toggle-desktop">
            <ToggleSwitch />
          </li>
        </ul>
      </header>
    </Headroom>
  );
}

export default Header;
