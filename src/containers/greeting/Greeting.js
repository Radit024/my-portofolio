import React, {useContext} from "react";
import {motion} from "framer-motion";
import {useReducedMotion} from "../../hooks/useReducedMotion";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import landingPerson from "../../assets/lottie/landingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";

import {illustration, greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  const reduceMotion = useReducedMotion();
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <div className="greet-main" id="greeting">
      <div className="greeting-main">
        <motion.div
          className="greeting-text-div"
          initial={reduceMotion ? false : {y: 12, opacity: 0.85}}
          animate={{y: 0, opacity: 1}}
          transition={{duration: 0.55, ease: [0.16, 1, 0.3, 1]}}
        >
          <div>
            <h1
              className={isDark ? "dark-mode greeting-text" : "greeting-text"}
            >
              {" "}
              {greeting.title}{" "}
              <motion.span
                className="wave-emoji"
                initial={false}
                animate={{rotate: reduceMotion ? 0 : [0, -10, 12, -8, 8, 0]}}
                transition={{duration: 0.7, delay: 0.15, ease: "easeInOut"}}
              >
                {emoji("👋")}
              </motion.span>
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
        </motion.div>
        <div className="greeting-image-div">
          {illustration.animated ? (
            <DisplayLottie animationData={landingPerson} />
          ) : (
            <img
              alt="man sitting on table"
              src={require("../../assets/images/manOnTable.svg")}
            ></img>
          )}
        </div>
      </div>
    </div>
  );
}
