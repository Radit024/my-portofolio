import React from "react";
import "./Podcast.scss";
import {podcastSection} from "../../portfolio";
export default function Podcast() {
  if (!podcastSection?.display) return null;
  return (
    <section className="portfolio-section podcast-showcase">
      <header className="portfolio-section-header">
        <h2>{podcastSection.title}</h2>
        <p>{podcastSection.subtitle}</p>
      </header>
      <div className="podcast-main-div">
        {podcastSection.podcast.filter(Boolean).map((link, index) => (
          <iframe
            key={link}
            className="podcast"
            src={link}
            title={`Favourite song ${index + 1}`}
            loading="lazy"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          />
        ))}
      </div>
    </section>
  );
}
