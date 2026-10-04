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
import {splashScreen} from "../portfolio";
import {StyleProvider} from "../contexts/StyleContext";
import {useLocalStorage} from "../hooks/useLocalStorage";
import "./Main.scss";
import "./LowerPortfolio.scss";

const Main = () => {
  const reduceMotion = useReducedMotion();
  const darkPref = window.matchMedia
    ? window.matchMedia("(prefers-color-scheme: dark)")
    : null;
  const [isDark, setIsDark] = useLocalStorage(
    "isDark",
    darkPref ? darkPref.matches : false
  );
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

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
        {isShowingSplashAnimation && splashScreen.enabled && !reduceMotion ? (
          <SplashScreen />
        ) : (
          <>
            <Header />
            <Greeting />
            <Skills />
            <StackProgress />
            <Education />
            <div className="lower-portfolio">
              <WorkExperience />
              <Projects />
              <StartupProject />
              <Achievement />
              <Blogs />
              <Talks />
              <Twitter />
              <Podcast />
              <Profile />
              <Footer />
            </div>
            <ScrollToTopButton />
          </>
        )}
      </StyleProvider>
    </div>
  );
};

export default Main;
