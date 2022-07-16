import classes from "./MainContent.module.css";

function MainContent(props) {

  return (
    <div className={classes.MainContent}>
      <div className={classes.wrapper}>
      <div className={classes.wave}></div>
      
      </div>

      {props.children}
    </div>
  );
}

export default MainContent;
