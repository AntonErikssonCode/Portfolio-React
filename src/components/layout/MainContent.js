import classes from "./MainContent.module.css";

import {SvgBot} from "./SvgBot";
function MainContent(props) {
  const wrapperHeight = props.wrapperHeight;
  return (
    <div className={classes.MainContent}>
 

      {props.children}
      <SvgBot/>
    </div>
  );
}

export default MainContent;
