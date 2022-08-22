import classes from "./IntroBackground.module.css";
import SvgWave from "./SvgWave";
function IntroBackground(props) {
  const color = props.color;

  return (
    <div
      id="introBackground"
      className={classes.IntroBackground}
      style={{ background: color }}
    >
      <div className={classes.topShadow}></div>
      <SvgWave rotated={true} color="black" top={false} />
    
    </div>
  );
}

export default IntroBackground;
