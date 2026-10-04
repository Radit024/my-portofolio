import React, {useEffect, useRef, Suspense} from "react";
import {useReducedMotion} from "../../hooks/useReducedMotion";
import Lottie from "lottie-react";
import Loading from "../../containers/loading/Loading";

export default function DisplayLottie({animationData}) {
  const container = useRef(null);
  const animation = useRef(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) {
      animation.current?.goToAndStop(0, true);
      return;
    }

    let inView = true;
    const updatePlayback = () => {
      if (inView && !document.hidden) {
        animation.current?.play();
      } else {
        animation.current?.pause();
      }
    };
    const observer =
      typeof IntersectionObserver === "undefined"
        ? null
        : new IntersectionObserver(entries => {
            inView = entries[0].isIntersecting;
            updatePlayback();
          });
    if (observer) observer.observe(container.current);
    document.addEventListener("visibilitychange", updatePlayback);
    updatePlayback();

    return () => {
      observer?.disconnect();
      document.removeEventListener("visibilitychange", updatePlayback);
    };
  }, [reduceMotion, animationData]);

  return (
    <div ref={container}>
      <Suspense fallback={<Loading />}>
        <Lottie
          lottieRef={animation}
          animationData={animationData}
          autoplay={false}
          loop={!reduceMotion}
        />
      </Suspense>
    </div>
  );
}
