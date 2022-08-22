import classes from "./MainContent.module.css";

function MainContent(props) {
  const wrapperHeight = props.wrapperHeight;
  return <div className={classes.MainContent}>{props.children}</div>;
}

export default MainContent;
