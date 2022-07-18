import classes from "./MainContent.module.css";

function MainContent(props) {
  const wrapperHeight = props.wrapperHeight;
  return (
    <div className={classes.MainContent}>
      <div className={classes.wrapper} /* style={{height: wrapperHeight}} */>
      <div className={classes.wave} ></div>
      
      </div>

      {props.children}
    </div>
  );
}

export default MainContent;
