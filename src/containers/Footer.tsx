import React from "react";
import app from "../app.module.css";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className={app.iconContainer}>
      <div>
        <a>
          <img
            className={app.imgIcon}
            src="src/assets/icons8-linkedin-50.png"
          ></img>
        </a>
        <a>
          <img
            className={app.imgIcon}
            src="src/assets/icons8-mail-50.png"
          ></img>
        </a>
        <a>
          <img className={app.imgIcon} src="src/assets/icons8-tel-58.png"></img>
        </a>
        <a>
          <img
            className={app.imgIcon}
            src="src/assets/icons8-github-50.png"
          ></img>
        </a>
      </div>
    </div>
  );
};

export default Footer;
