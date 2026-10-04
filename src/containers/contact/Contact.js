import React from "react";
import {motion} from "framer-motion";
import {useReducedMotion} from "../../hooks/useReducedMotion";
import LinkArrow from "../../components/linkArrow/LinkArrow";
import {contactInfo, socialMediaLinks} from "../../portfolio";
import "./Contact.scss";
const socialNames = {
  github: "GitHub",
  linkedin: "LinkedIn",
  gitlab: "GitLab",
  facebook: "Facebook",
  instagram: "Instagram",
  twitter: "X / Twitter",
  medium: "Medium",
  stackoverflow: "Stack Overflow",
  kaggle: "Kaggle"
};
export default function Contact() {
  const reduceMotion = useReducedMotion();
  return (
    <section className="portfolio-section contact-showcase" id="contact">
      <div className="contact-showcase-top">
        <h2>{contactInfo.title}</h2>
        <p>{contactInfo.subtitle}</p>
      </div>
      <motion.a
        className="contact-email-action"
        href={`mailto:${contactInfo.email_address}`}
        whileTap={reduceMotion ? undefined : {scale: 0.99}}
      >
        <span>{contactInfo.email_address}</span>
        <LinkArrow />
      </motion.a>
      <div className="contact-secondary">
        {contactInfo.number && (
          <a className="showcase-link" href={`tel:${contactInfo.number}`}>
            {contactInfo.number}
          </a>
        )}
        {socialMediaLinks.display && (
          <nav aria-label="Social profiles" className="contact-socials">
            {Object.entries(socialNames)
              .filter(([key]) => socialMediaLinks[key])
              .map(([key, label]) => (
                <a
                  key={key}
                  href={socialMediaLinks[key]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {label}
                  <LinkArrow />
                </a>
              ))}
          </nav>
        )}
      </div>
    </section>
  );
}
