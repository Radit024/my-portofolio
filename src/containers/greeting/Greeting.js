import React, {useContext} from "react";
import {Fade} from "../../components/fade/Fade";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import coderHero from "../../assets/lottie/coderHero";
import dataAnalysisSystems from "../../assets/lottie/dataAnalysisSystems";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {illustration, greeting} from "../../portfolio";
import {financeGreeting} from "../../financePortfolio";
import StyleContext from "../../contexts/StyleContext";
import {usePortfolioMode} from "../../contexts/PortfolioModeContext";
import CustomSvgIcon from "../../components/common/CustomSvgIcon";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  const {mode} = usePortfolioMode();
  const isFinance = mode === "finance";
  const activeGreeting = isFinance ? financeGreeting : greeting;

  if (!activeGreeting.displayGreeting) {
    return null;
  }

  return (
    <div className={`greet-main ${isFinance ? "finance-theme" : "tech-theme"}`} id="greeting">
      <div className="greeting-main">
        <Fade left duration={1000} distance="40px">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {"Hi all, I'm "}
                <span
                  className={
                    isFinance
                      ? "gradient-text finance-gradient"
                      : "gradient-text"
                  }
                >
                  {activeGreeting.username || "Daffa Radityo"}
                </span>{" "}
                <span className="wave-emoji">
                  {emoji(isFinance ? "📈" : "👋")}
                </span>
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {activeGreeting.subTitle}
              </p>

              {isFinance ? (
                <div className="hero-specialty-tags finance-tags">
                  <span className="specialty-tag tag-python">
                    <i className="fab fa-python" aria-hidden="true" /> Quant Bots & OKX API
                  </span>
                  <span className="specialty-tag tag-trading">
                    <CustomSvgIcon name="tradingview" className="tag-icon-svg" /> TradingView & Signals
                  </span>
                  <span className="specialty-tag tag-analytics">
                    <i className="fas fa-file-excel" aria-hidden="true" /> SME P&L & Costing
                  </span>
                  <span className="specialty-tag tag-solidity">
                    <CustomSvgIcon name="solidity" className="tag-icon-svg" /> Web3 & Value Chain
                  </span>
                </div>
              ) : (
                <div className="hero-specialty-tags">
                  <span className="specialty-tag tag-react">
                    <i className="fab fa-react" aria-hidden="true" /> Web & Full-Stack
                  </span>
                  <span className="specialty-tag tag-python">
                    <i className="fab fa-python" aria-hidden="true" /> Python & Decision Systems
                  </span>
                  <span className="specialty-tag tag-solidity">
                    <CustomSvgIcon name="solidity" className="tag-icon-svg" /> Solidity & Web3
                  </span>
                  <span className="specialty-tag tag-logistics">
                    <i className="fas fa-truck-moving" aria-hidden="true" /> Supply Chain
                  </span>
                </div>
              )}

              <SocialMedia />
            </div>
          </div>
        </Fade>
        <Fade right duration={1000} distance="40px">
          <div className="greeting-image-div">
            {illustration.animated ? (
              <DisplayLottie
                key={isFinance ? "finance-lottie" : "tech-lottie"}
                animationData={isFinance ? dataAnalysisSystems : coderHero}
              />
            ) : (
              <img
                alt="man sitting on table"
                src={require("../../assets/images/manOnTable.svg")}
              />
            )}
          </div>
        </Fade>
      </div>
    </div>
  );
}

