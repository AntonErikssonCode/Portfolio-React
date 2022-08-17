import React, { Component, useState, useEffect } from "react";
import "./SliderTitle.css";
let instancesCount = 0;

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
        <SplitText delay={1} copy="I WILL TELL YOU ABOUT MY" role="heading" />
      </h1>{" "}
    </div>
  );
}

export default SliderTitle;
