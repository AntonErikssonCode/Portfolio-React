import React,{Component} from "react";
import "./SliderTitle.css"
class SplitText extends Component {
  render(){
    return(
      <span aria-label={this.props.copy} role={this.props.role} >
          {this.props.copy.split("").map(function(char, index){
            let style = {"animationDelay": (3 + index / 10) + "s"}
            return <span
              aria-hidden="true"
              key={index}
              style={style}
              >
              {char}
              
            </span>;
          })}
        </span>
    );
  }
}

class SliderTitle extends Component {
  render() {
    return(
      <div className="titleDiv">
      <h1><SplitText copy="I WILL TELL YOU ABOUT MY" role="heading" /></h1>

      </div>
    );
  }
}

export default SliderTitle;