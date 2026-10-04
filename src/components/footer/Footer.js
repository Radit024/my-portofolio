import React from "react";
import {greeting} from "../../portfolio";
import "./Footer.scss";
export default function Footer() {
  return (
    <footer className="showcase-footer">
      <p>
        © {new Date().getFullYear()} {greeting.username}
      </p>
      <a href="#greeting">Back to top</a>
    </footer>
  );
}
