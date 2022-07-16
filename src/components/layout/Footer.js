import "./Footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-content-left">
          <h3>
            <span className="footer-bold">Mail:   </span>
            anton.eriksson.gu@gmail.com
          </h3>
          <h3>
            <span className="footer-bold">Phone: </span>072-569 22 90
          </h3>
        </div>
        <div className="footer-content-right">
          <h3>
            <a target="_blank" rel="noreferrer" href={"https://bobbyhadz.com/blog/react-add-css-class-on-hover"}>
            <img src={require('./linkedin-logo.png')} />LinkedIn
            </a>
          </h3>
          <h3>
          <a target="_blank" rel="noreferrer" href={"https://bobbyhadz.com/blog/react-add-css-class-on-hover"}>
            <img src={require('./facebook.png')} />Facebook
            </a>
          </h3>
        </div>
      </div>
      <Link to={{pathname:"/future/contact-me"}} className="footer-contactMe"><h2 className="footer-contactMe">Contact Me</h2></Link>
      <h4>I created this website from scratch using react.</h4>

    </footer>
  );
}

export default Footer;
