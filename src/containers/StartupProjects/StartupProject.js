import React from "react";
import {motion} from "framer-motion";
import {useReducedMotion} from "../../hooks/useReducedMotion";
import "./StartupProjects.scss";
import "../LowerPortfolio.scss";
import {bigProjects} from "../../portfolio";
import LinkArrow from "../../components/linkArrow/LinkArrow";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import build from "../../assets/lottie/build";
import {Fade} from "../../components/fade/Fade";

export default function StartupProject() {
  const reduceMotion = useReducedMotion();

  if (!bigProjects.display) return null;

  const headerTags = [
    "Full-Stack Web",
    "Quantitative Trading",
    "Decision Support Systems",
    "Smart Contracts & Web3"
  ];

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
              <div className="projects-header-tags">
                {headerTags.map(tag => (
                  <span className="header-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Fade>
          <Fade right duration={1000} distance="30px">
            <div className="portfolio-header-image">
              <DisplayLottie animationData={build} />
            </div>
          </Fade>
        </header>
        <div className="projects-container">
          {bigProjects.projects.map(project => (
            <article className="project-card" key={project.projectName}>
              <div
                className={`project-preview project-preview--${project.previewStyle}`}
              >
                {project.image && (
                  <motion.img
                    whileHover={reduceMotion ? undefined : {scale: 1.025}}
                    transition={{duration: 0.25}}
                    src={project.image}
                    alt={project.imageAlt || project.projectName}
                    loading="lazy"
                    decoding="async"
                    width="1120"
                    height="700"
                  />
                )}
                <span className="project-preview-caption">
                  {project.previewLabel}
                </span>
              </div>
              <div className="project-detail">
                <p className="project-date">{project.date}</p>
                <h3 title={project.projectName}>
                  {project.displayName || project.projectName}
                </h3>
                <p className="project-description">{project.projectDesc}</p>
                {project.contributors && (
                  <p className="project-contributors">
                    Collaborators: {project.contributors}
                  </p>
                )}
                {project.skills?.length > 0 && (
                  <ul className="project-skills" aria-label="Project skills">
                    {project.skills.map(skill => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                )}
                <div className="project-card-footer">
                  {project.footerLink?.map(link => (
                    <a
                      className="showcase-link"
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${link.name}: ${project.projectName}`}
                    >
                      {link.name}
                      <LinkArrow />
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
