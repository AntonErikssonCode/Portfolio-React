import "./SecondContent.css";

function SecondContent(props) {
  const color = props.color;
  
  return (
    <div className="contentDiv">
      

  
      <div className="colorBox" style= {{background: color}}></div>
      <div className="contentInput">
        {props.children}
      </div>
    
    </div>
  );
}

export default SecondContent;
