import "./Title.css";

function Title(props){
  const topTextSize = props.topTextSize;
  const botTextSize = props.botTextSize;
  const topText = props.topText;
  const botText = props.botText;
  return(
    <div className="title-div">
      <h2 className="top-text" style={{ fontSize: topTextSize}}>{topText} </h2>
      <h2 className="bot-text"  style={{ fontSize: botTextSize}}>{botText}</h2>
    </div>
  )
}
export default Title;