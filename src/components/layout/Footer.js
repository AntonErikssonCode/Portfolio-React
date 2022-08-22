import "./Footer.css";
import "../../index.css";
import { Link } from "react-router-dom";
import Logo from "../features/Logo";

function Footer() {
  return (
    <footer>
      <Logo topLeft={false} link={false} />
      <div className="footer-content">
        <div className="footer-content-left">
          <h3>
            <span className="footer-bold">Mail: </span>
            anton.eriksson.gu@gmail.com
          </h3>
          <h3>
            <span className="footer-bold">Phone: </span>072-569 22 90
          </h3>
        </div>
        <div className="footer-content-right">
          <h3>
            <a
              target="_blank"
              rel="noreferrer"
              href={"https://www.linkedin.com/in/anton-eriksson-4b907b19b/"}
            >
              <img src={require("./linkedin_line.png")} />
              LinkedIn
            </a>
          </h3>
          <h3>
            <a
              target="_blank"
              rel="noreferrer"
              href={"https://github.com/AntonErikssonCode"}
            >
              <img src={require("./github_fill.png")} />
              GitHub
            </a>
          </h3>
        </div>
      </div>
      <Link
        to={{ pathname: "/future/contact-me" }}
        className="footer-contactMe"
      >
        <h2 className="footer-contactMe">Contact Me</h2>
      </Link>
      <h4>I created this site from scratch using React.</h4>
      <h5>© 2022 Anton Eriksson</h5>
    </footer>
  );
}

export default Footer;
