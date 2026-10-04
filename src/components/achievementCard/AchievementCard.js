import React from "react";
import LinkArrow from "../linkArrow/LinkArrow";
import "./AchievementCard.scss";
export default function AchievementCard({cardInfo}) {
  return (
    <article className="certificate-card">
      <div className="certificate-summary">
        <p className="certificate-issuer">{cardInfo.description}</p>
        <h3>{cardInfo.title}</h3>
        <p className="certificate-issued">Issued {cardInfo.issued}</p>
      </div>
      <div className="certificate-information">
        <details className="certificate-details">
          <summary>Credential details</summary>
          <div>
            <p>
              {cardInfo.expired ? "Expired" : "Expires"} {cardInfo.expires}
            </p>
            <p>Credential ID: {cardInfo.credentialId}</p>
          </div>
        </details>
        {cardInfo.footer.map(link => (
          <a
            className="showcase-link"
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${link.name}: ${cardInfo.title}`}
          >
            {link.name}
            <LinkArrow />
          </a>
        ))}
      </div>
    </article>
  );
}
