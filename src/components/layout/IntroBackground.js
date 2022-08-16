import classes from "./IntroBackground.module.css";
import svgImage from "./wavesOpacity.svg";
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
