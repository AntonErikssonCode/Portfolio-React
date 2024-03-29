import "./SliderTitle.css";

function SplitText(props) {
  return (
    <span aria-label={props.copy} role={props.role}>
      {props.copy.split("").map(function (char, index) {
        let style = { animationDelay: props.delay + index / 10 + "s" };
        return (
          <span aria-hidden="true" key={index} style={style}>
            {char}
          </span>
        );
      })}
    </span>
  );
}

function SliderTitle() {
  return (
    <div className="titleDiv">
      <h1>
        <SplitText delay={3} copy="LET ME TELL YOU ABOUT MY" role="heading" />
      </h1>{" "}
    </div>
  );
}

export default SliderTitle;
