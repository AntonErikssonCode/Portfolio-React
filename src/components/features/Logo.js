import classes from "./Logo.module.css";
import { Link } from "react-router-dom";
import LogoImg from "./LogoImg.svg";

function Logo(props) {
  const topLeft = props.topLeft;
  const link = props.link;
  return (
    <div className={classes.portfolioTitle}>
      {link ? (
        <Link to={{ pathname: "future/contact-me" }}>
          <h1 className={topLeft ? classes.headingTopLeft : classes.heading}>
            <img src={LogoImg} className={classes.portfolioTitleImg} />
            <div className={classes.portfolioTitleText}>
              <span className={classes.name}>ANTON ERIKSSONS</span>{" "}
              <span className={classes.portfolio}>PORTFOLIO</span>
            </div>
          </h1>
        </Link>
      ) : (
        <h1 className={topLeft ? classes.headingTopLeft : classes.heading}>
          <img src={LogoImg} className={classes.portfolioTitleImg} />
          <div className={classes.portfolioTitleText}>
            <span className={classes.name}>ANTON ERIKSSONS</span>{" "}
            <span className={classes.portfolio}>PORTFOLIO</span>
          </div>
        </h1>
      )}
    </div>
  );
}

export default Logo;
