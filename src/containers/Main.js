import React, {useEffect, useState} from "react";
import {useReducedMotion} from "../hooks/useReducedMotion";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import StackProgress from "./skillProgress/skillProgress";
import WorkExperience from "./workExperience/WorkExperience";
import Projects from "./projects/Projects";
import StartupProject from "./StartupProjects/StartupProject";
import Achievement from "./achievement/Achievement";
import Blogs from "./blogs/Blogs";
import Footer from "../components/footer/Footer";
import Talks from "./talks/Talks";
import Podcast from "./podcast/Podcast";
import Education from "./education/Education";
import ScrollToTopButton from "./topbutton/Top";
import Twitter from "./twitter-embed/twitter";
import Profile from "./profile/Profile";
import SplashScreen from "./splashScreen/SplashScreen";
import CurtainsDoors from "../components/curtains/CurtainsDoors";
import FloatingModeSwitch from "../components/floatingSwitch/FloatingModeSwitch";
import {splashScreen} from "../portfolio";
import {StyleProvider} from "../contexts/StyleContext";
import {PortfolioModeProvider, usePortfolioMode} from "../contexts/PortfolioModeContext";
import {useLocalStorage} from "../hooks/useLocalStorage";
import "./Main.scss";

const MainContent = ({isDark}) => {
  const {mode} = usePortfolioMode();
  const reduceMotion = useReducedMotion();
  const isFinance = mode === "finance";

  const [isShowingSplashAnimation, setIsShowingSplashAnimation] = useState(
    splashScreen.enabled && !reduceMotion
  );

  useEffect(() => {
    if (reduceMotion) {
      setIsShowingSplashAnimation(false);
      return;
    }
    if (splashScreen.enabled && isShowingSplashAnimation) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      );
      return () => {
        clearTimeout(splashTimer);
      };
    }
  }, [reduceMotion, isShowingSplashAnimation]);

  return (
    <div
      className={`${isDark ? "dark-mode" : ""} ${
        isFinance ? "finance-mode" : "tech-mode"
      }`}
    >
      {/* Motion.dev Curtains: Doors Page Transition Overlay */}
      <CurtainsDoors />

      {isShowingSplashAnimation && splashScreen.enabled && !reduceMotion ? (
        <SplashScreen />
      ) : (
        <>
          <Header />
          <Greeting />
          <Skills />
          <StackProgress />
          <Education />
          {!isFinance && <WorkExperience />}
          {!isFinance && <Projects />}
          <StartupProject />
          <Achievement />
          {!isFinance && <Blogs />}
          {!isFinance && <Talks />}
          {!isFinance && <Twitter />}
          {!isFinance && <Podcast />}
          <Profile />
          <Footer />
          <ScrollToTopButton />
          <FloatingModeSwitch />
        </>
      )}
    </div>
  );
};

const Main = () => {
  const darkPref = window.matchMedia
    ? window.matchMedia("(prefers-color-scheme: dark)")
    : null;
  const [isDark, setIsDark] = useLocalStorage(
    "isDark",
    darkPref ? darkPref.matches : false
  );

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <PortfolioModeProvider>
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
        <MainContent isDark={isDark} />
      </StyleProvider>
    </PortfolioModeProvider>
  );
};

export default Main;
