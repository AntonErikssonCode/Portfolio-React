import classes from "./IntroBackground.module.css";
import { useMemo } from "react";
import svgImage from "./wavesOpacity.svg";
import Scene from "../../3D/Scene";
function IntroBackground(props) {
  const color = props.color;

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
