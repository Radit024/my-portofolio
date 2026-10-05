import React, {useContext} from "react";
import "./Podcast.scss";
import {podcastSection, illustration} from "../../portfolio";
import {Fade} from "../../components/fade/Fade";
import StyleContext from "../../contexts/StyleContext";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import chillPerson from "../../assets/lottie/chillPerson";

export default function Podcast() {
  const {isDark} = useContext(StyleContext);

  if (!podcastSection)
    console.error("podcastSection object for Podcast section is missing");

  if (!podcastSection.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="podcast">
        <div className="podcast-section-container">
          <div className="podcast-main-div">
            <Fade left duration={1000} distance="30px">
              <div className="podcast-content-left">
                <h1 className="podcast-header-title">{podcastSection.title}</h1>
                <p
                  className={
                    isDark
                      ? "dark-mode podcast-header-subtitle"
                      : "subTitle podcast-header-subtitle"
                  }
                >
                  {podcastSection.subtitle}
                </p>
                <div className="podcast-players-list">
                  {podcastSection.podcast.map((podcastLink, i) => {
                    if (!podcastLink) {
                      console.log(
                        `Podcast link for ${podcastSection.title} is missing`
                      );
                    }
                    return (
                      <div className="podcast-player-wrapper" key={i}>
                        <iframe
                          className="podcast"
                          src={podcastLink}
                          frameBorder="0"
                          scrolling="no"
                          title={`Podcast track ${i + 1}`}
                          loading="lazy"
                        ></iframe>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Fade>
            <Fade right duration={1000} distance="30px">
              <div className="podcast-image-div">
                {illustration.animated ? (
                  <DisplayLottie animationData={chillPerson} />
                ) : null}
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </Fade>
  );
}
