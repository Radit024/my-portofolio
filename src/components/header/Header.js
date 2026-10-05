import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {usePortfolioMode} from "../../contexts/PortfolioModeContext";
import {
  greeting,
  workExperiences,
  skillsSection,
  bigProjects,
  openSource,
  blogSection,
  talkSection,
  achievementSection
} from "../../portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);
  const {mode, switchMode, isTransitioning} = usePortfolioMode();
  const isFinance = mode === "finance";

  const viewExperience = !isFinance && workExperiences.display;
  const viewOpenSource = !isFinance && openSource.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = !isFinance && blogSection.display;
  const viewTalks = !isFinance && talkSection.display;

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="mode-badge-tag">{isFinance ? "Finance" : "Tech"}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          <li className="header-mode-switcher-item">
            <div
              className={`header-mode-switcher ${
                isFinance ? "active-finance" : "active-tech"
              }`}
              role="group"
              aria-label="Portfolio Mode Switcher"
            >
              <button
                type="button"
                className={`mode-pill-btn ${!isFinance ? "selected" : ""}`}
                onClick={() => switchMode("tech")}
                disabled={isTransitioning}
                title="Switch to Tech Mode"
              >
                <i className="fas fa-code" aria-hidden="true" /> Tech
              </button>
              <button
                type="button"
                className={`mode-pill-btn ${isFinance ? "selected" : ""}`}
                onClick={() => switchMode("finance")}
                disabled={isTransitioning}
                title="Switch to Finance Mode (Curtains Doors animation)"
              >
                <i className="fas fa-chart-line" aria-hidden="true" /> Finance
              </button>
            </div>
          </li>
          {viewSkills && (
            <li>
              <a href="#skills">{isFinance ? "Finance Skills" : "Skills"}</a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experience">Experiences</a>
            </li>
          )}
          {bigProjects.display && (
            <li>
              <a href="#projects">
                {isFinance ? "Trading & Projects" : "Projects"}
              </a>
            </li>
          )}
          {viewOpenSource && (
            <li>
              <a href="#opensource">Open Source</a>
            </li>
          )}
          {viewAchievement && (
            <li>
              <a href="#achievements">
                {isFinance ? "Credentials" : "Certifications"}
              </a>
            </li>
          )}
          {viewBlog && (
            <li>
              <a href="#blogs">Blogs</a>
            </li>
          )}
          {viewTalks && (
            <li>
              <a href="#talks">Talks</a>
            </li>
          )}
          <li>
            <a href="#contact">Contact Me</a>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
