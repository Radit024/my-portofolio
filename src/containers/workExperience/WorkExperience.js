import React from "react";
import "./WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import {workExperiences} from "../../portfolio";
export default function WorkExperience() {
  if (!workExperiences.display) return null;
  return (
    <section className="portfolio-section experience-showcase" id="experience">
      <header className="portfolio-section-header">
        <h2>{workExperiences.title}</h2>
        <p>{workExperiences.subtitle}</p>
      </header>
      <div className="experience-cards-div">
        {workExperiences.experience.map(card => (
          <ExperienceCard key={card.role} cardInfo={card} />
        ))}
      </div>
    </section>
  );
}
