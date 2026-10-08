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
import RadialMenu from "../components/radialMenu/RadialMenu";
import GithubProfile from "./githubProfile/GithubProfile";
import Profile from "./profile/Profile";
import SplashScreen from "./splashScreen/SplashScreen";
import {
  splashScreen,
  workExperiences,
  openSource,
  blogSection,
  talkSection,
  githubProfile,
  podcastSection
} from "../portfolio";
import {StyleProvider} from "../contexts/StyleContext";
import {useLocalStorage} from "../hooks/useLocalStorage";
import {curtains} from "../utils/curtainsTransition";
import "./Main.scss";

const MainContent = ({isDark}) => {
  const reduceMotion = useReducedMotion();

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
    <div className={isDark ? "dark-mode" : ""}>
      {isShowingSplashAnimation && splashScreen.enabled && !reduceMotion && (
        <SplashScreen onFinish={() => setIsShowingSplashAnimation(false)} />
      )}
      <Header />
      <Greeting />
      <Skills />
      <StackProgress />
      <Education />
      {workExperiences.display && <WorkExperience />}
      {openSource.display && <Projects />}
      <StartupProject />
      <Achievement />
      {blogSection.display && <Blogs />}
      {talkSection.display && <Talks />}
      {githubProfile.display && <GithubProfile />}
      {podcastSection.display && <Podcast />}
      <Profile />
      <Footer />
      <ScrollToTopButton />
      <RadialMenu />
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

  const changeTheme = event => {
    const nextIsDark = !isDark;
    const curtainColor = nextIsDark ? "#0d111c" : "#ffffff";

    let origin = {x: 0.5, y: 0.5};
    if (event && event.target && event.target.getBoundingClientRect) {
      const rect = event.target.getBoundingClientRect();
      if (
        typeof window !== "undefined" &&
        window.innerWidth &&
        window.innerHeight
      ) {
        origin = {
          x: (rect.left + rect.width / 2) / window.innerWidth,
          y: (rect.top + rect.height / 2) / window.innerHeight
        };
      }
    } else if (
      event &&
      typeof event.clientX === "number" &&
      typeof window !== "undefined" &&
      window.innerWidth
    ) {
      origin = {
        x: event.clientX / window.innerWidth,
        y: event.clientY / window.innerHeight
      };
    }

    curtains(
      () => {
        setIsDark(nextIsDark);
      },
      {
        color: curtainColor,
        origin: origin,
        direction: nextIsDark ? "right" : "left",
        coverDuration: 280,
        revealDuration: 340
      }
    );
  };

  return (
    <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
      <MainContent isDark={isDark} />
    </StyleProvider>
  );
};

export default Main;
