import React from "react";
import { useEffect, useRef } from "react";
import Lottie from "lottie-web";
import Navigation from "./Navigation";
import classes from "./MainHeader.module.css";

const MainHeader = (props) => {
  const container = useRef(null);

  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../UI/loginLottie.json"),
    });
  }, []);

  return (
    <header className={classes["main-header"]}>
      <h1>Tec Track</h1>
      <Navigation
        isLoggedIn={props.isAuthenticated}
        onLogout={props.onLogout}
      />
      {/* <div className={classes["lottie-container"]} ref={container}></div> */}
    </header>
  );
};

export default MainHeader;
