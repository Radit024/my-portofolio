import React, {useContext} from "react";
import "./Achievement.scss";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import {achievementSection, illustration} from "../../portfolio";
import {financeAchievementSection} from "../../financePortfolio";
import {Fade} from "../../components/fade/Fade";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import trophyAward from "../../assets/lottie/trophyAward";
import StyleContext from "../../contexts/StyleContext";
import {usePortfolioMode} from "../../contexts/PortfolioModeContext";

export default function Achievement() {
  const {isDark} = useContext(StyleContext);
  const {mode} = usePortfolioMode();
  const isFinance = mode === "finance";
  const activeAchievements = isFinance ? financeAchievementSection : achievementSection;

  if (!activeAchievements.display) {
    return null;
  }
  return (
    <div className="main" id="achievements">
      <div className="achievement-section-container">
        <Fade bottom duration={1000} distance="20px">
          <div className="achievement-header-section">
            <h1
              className={
                isDark
                  ? "dark-mode heading achievement-heading"
                  : "heading achievement-heading"
              }
            >
              {activeAchievements.title}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle achievement-subtitle"
                  : "subTitle achievement-subtitle"
              }
            >
              {activeAchievements.subtitle}
            </p>
          </div>
        </Fade>
        <div className="achievement-main-div">
          <Fade left duration={1000} distance="30px">
            <div className="achievement-image-div">
              {illustration.animated ? (
                <DisplayLottie animationData={trophyAward} />
              ) : (
                <span className="trophy-emoji">🏆</span>
              )}
            </div>
          </Fade>
          <Fade right duration={1000} distance="30px">
            <div className="achievement-cards-div">
              {activeAchievements.achievementsCards.map((card, i) => {
                return (
                  <AchievementCard
                    key={i}
                    isDark={isDark}
                    cardInfo={{
                      title: card.title,
                      description: card.subtitle,
                      image: card.image,
                      imageAlt: card.imageAlt,
                      footer: card.footerLink
                    }}
                  />
                );
              })}
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}
