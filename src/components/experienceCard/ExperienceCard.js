import React from "react";
import LinkArrow from "../linkArrow/LinkArrow";
import "./ExperienceCard.scss";
export default function ExperienceCard({cardInfo}) {
  return (
    <article className="experience-entry">
      <p className="experience-entry-date">{cardInfo.date}</p>
      <div className="experience-entry-content">
        <p className="experience-entry-company">{cardInfo.company}</p>
        <h3>{cardInfo.role}</h3>
        <p className="experience-entry-description">{cardInfo.desc}</p>
        {cardInfo.descBullets?.length > 0 && (
          <ul>
            {cardInfo.descBullets.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
        {cardInfo.sourceUrl && (
          <a
            className="showcase-link"
            href={cardInfo.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            View participation certificate <LinkArrow />
          </a>
        )}
      </div>
    </article>
  );
}
