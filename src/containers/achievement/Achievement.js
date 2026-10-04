import React from "react";
import "./Achievement.scss";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import {achievementSection} from "../../portfolio";
export default function Achievement() {
  if (!achievementSection.display) return null;
  return (
    <section
      className="portfolio-section credentials-showcase"
      id="achievements"
    >
      <header className="portfolio-section-header">
        <h2>{achievementSection.title}</h2>
        <p>{achievementSection.subtitle}</p>
      </header>
      <div className="achievement-cards-div">
        {achievementSection.achievementsCards.map(card => (
          <AchievementCard
            key={card.credentialId}
            cardInfo={{
              ...card,
              description: card.subtitle,
              footer: card.footerLink
            }}
          />
        ))}
      </div>
    </section>
  );
}
