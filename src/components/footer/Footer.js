import React from "react";
import "./Footer.scss";
import {Fade} from "../fade/Fade";

export default function Footer() {
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className="footer-text">
          Made with ❤️ by Daffa Radityo
        </p>
      </div>
    </Fade>
  );
}
