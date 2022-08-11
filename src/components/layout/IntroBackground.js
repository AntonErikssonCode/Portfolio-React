import classes from "./IntroBackground.module.css";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import svgImage from "./wavesOpacity.svg";
function IntroBackground(props) {
  const { pathname } = useLocation();
  const color = props.color;
  const [deg, setDeg] = useState(0);
  /* const background =
    "linear-gradient(var(--mainColor)35%, var(--secondColor)70%)"; */
  const transform = "rotate(" + deg + "deg)";

  /* useEffect(() => {
    setDeg(deg + 80);
  }, [pathname]);
 */
  return (
    <div
      id="introBackground"
      className={classes.IntroBackground}  style= {{background: color}}
    >
      <div className={classes.topShadow}></div>
        <img className={classes.svgIMG} src={svgImage} alt="SVG logo image" />
    </div>
  );
}

export default IntroBackground;
