import React from "react";
import {MotionConfig} from "framer-motion";
import {useReducedMotion} from "./hooks/useReducedMotion";
import "./App.scss";
import Main from "./containers/Main";

function App() {
  const reduceMotion = useReducedMotion();
  return (
    <MotionConfig
      reducedMotion={reduceMotion ? "always" : "never"}
      transition={{duration: 0.2, ease: [0.16, 1, 0.3, 1]}}
    >
      <Main />
    </MotionConfig>
  );
}

export default App;
