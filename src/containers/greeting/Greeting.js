import React, {useContext} from "react";
import {Fade} from "../../components/fade/Fade";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import coderHero from "../../assets/lottie/coderHero";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {illustration, greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);

  if (!greeting.displayGreeting) {
    return null;
  }

  return (
    <div className="greet-main" id="greeting">
      <div className="greeting-main">
        <Fade left duration={1000} distance="40px">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {"Hi all, I'm "}
                <span className="gradient-text">
                  {greeting.username || "Daffa Radityo"}
                </span>{" "}
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>


              <SocialMedia />

              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                {greeting.resumeLink && (
                  <Button
                    text="See my resume"
                    newTab={true}
                    href={greeting.resumeLink}
                  />
                )}
              </div>
            </div>
          </div>
        </Fade>
        <Fade right duration={1000} distance="40px">
          <div className="greeting-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={coderHero} />
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
