import app from "../app.module.css";

const Footer = () => {
  return (
    <div className={app.iconContainer}>
      <div>
        <a href="https://www.linkedin.com/in/fedegrana/">
          <img
            className={app.imgIcon}
            src="public/icons8-linkedin-50.png"
          ></img>
        </a>
        <a href="mailto:federicorgrana@gmail.com">
          <img
            className={app.imgIcon}
            src="public/icons8-mail-50.png"
          ></img>
        </a>
        <a href="https://wa.me/59892680552">
          <img className={app.imgIcon} src="public/icons8-tel-58.png"></img>
        </a>
        <a href="https://github.com/fgrana">
          <img
            className={app.imgIcon}
            src="public/icons8-github-50.png"
          ></img>
        </a>
      </div>
    </div>
  );
};

export default Footer;
