import React, {useContext} from "react";
import "./twitter.scss";
import {TwitterTimelineEmbed} from "react-twitter-embed";
import {twitterDetails} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import LinkArrow from "../../components/linkArrow/LinkArrow";

export default function Twitter() {
  const {isDark} = useContext(StyleContext);
  if (!twitterDetails.display || !twitterDetails.userName) return null;
  return (
    <section className="portfolio-section twitter-showcase" id="twitter">
      <header className="portfolio-section-header">
        <h2>Notes & updates</h2>
        <p>From my timeline on X.</p>
      </header>
      <div className="twitter-timeline">
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName={twitterDetails.userName}
          options={{height: 400}}
          key={isDark ? "dark" : "light"}
          theme={isDark ? "dark" : "light"}
          noFooter
          placeholder={<p className="twitter-placeholder">Loading timeline…</p>}
        />
      </div>
      <a
        className="showcase-link"
        href={`https://x.com/${twitterDetails.userName}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        View @{twitterDetails.userName} on X <LinkArrow />
      </a>
      <p className="twitter-fallback">
        If the timeline is unavailable, open the profile directly.
      </p>
    </section>
  );
}
