import classes from "./Slider.module.css";
import { useState, useLayoutEffect, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SliderTitle from "./SliderTitle";
import { useLocation } from "react-router-dom";

function Slider() {
  const [sliderState, setSliderState] = useState("/past");
  const [silderDown, setsilderDown] = useState(true);
  const [keyPress, setKeyPress] = useState(false);
  const sliderBackground = useRef();
  const sliderDiv = useRef();
  const sliderRef = useRef();
  const { pathname } = useLocation();
  
  

  // Set Up Navigation
  const navigate = useNavigate();
  function navigateTo(where) {
    navigate(where);
  }

  //Handle Keydown Event
  document.onkeydown = checkKey;
  function checkKey(e) {
    e = e || window.event;
    if (e.keyCode == "37") {
      clickHandler("left");
    } else if (e.keyCode == "39") {
      clickHandler("right");
    }
  }

  //Set load in  position based on url
  useEffect(() => {
    const slider = document.getElementById("slider");
    if (pathname == "/present") {
      slider.style.transform = "translateX(var(--sliderMovesmall))";
      slider.firstChild.innerHTML = "PRESENT";
      setSliderState("/present");
      navigateTo("present");
    }
    if (pathname == "/future" || pathname == "/future/contact-me") {
      slider.style.transform = "translateX(var(--sliderMoveLarge))";
      setSliderState("/future");
      slider.firstChild.innerHTML = "FUTURE";
      navigateTo(pathname);
    }
  }, []);

  useEffect(() => {
    const slider = document.getElementById("slider");
    if (pathname == "/future/contact-me") {
      slider.style.transform = "translateX(var(--sliderMoveLarge))";
      setSliderState("/future");
      slider.firstChild.innerHTML = "FUTURE";
      navigateTo(pathname);
    }
  }, [pathname]);

  // Detect an animate slider position depending on position
  const scrolledDown = useWindowPosition();
  function useWindowPosition() {
    const [scrollPosition, setPosition] = useState(0);
    useLayoutEffect(() => {
      function updatePosition() {
        setPosition(window.pageYOffset);
        
       
      }
      window.addEventListener("scroll", updatePosition);
      updatePosition();
     
      return () => window.removeEventListener("scroll", updatePosition);
    }, []);

    return scrollPosition > 320 ? true : false;
  }

  useLayoutEffect(() => {
    setsilderDown(scrolledDown);
  }, [scrolledDown]);


  // Animation, navigation and state change of slider
  function clickHandler(click) {
    const slider = document.getElementById("slider");

    if (click != sliderState || keyPress) {
     
      // PAST
      if (
        (sliderState == "/past" && click == "Present") ||
        (sliderState == "/past" && click == "right")
      ) {
        slider.style.transform = "translateX(var(--sliderMovesmall))";
        slider.firstChild.innerHTML = "PRESENT";
        setSliderState("/present");
        navigateTo("present");
      }

      if (
        (sliderState == "/past" && click == "Future") ||
        (sliderState == "/past" && click == "left")
      ) {
        slider.style.transform = "translateX(var(--sliderMoveLarge))";
        setSliderState("/future");
        slider.firstChild.innerHTML = "FUTURE";
        navigateTo("future");
      }

      // PRESENT
      if (
        (sliderState == "/present" && click == "Past") ||
        (sliderState == "/present" && click == "left")
      ) {
        slider.style.transform = "translateX(0)";
        slider.firstChild.innerHTML = "PAST";
        setSliderState("/past");
        navigateTo("past");
      }
      if (
        (sliderState == "/present" && click == "Future") ||
        (sliderState == "/present" && click == "right")
      ) {
        slider.style.transform = "translateX(var(--sliderMoveLarge))";
        slider.firstChild.innerHTML = "FUTURE";
        setSliderState("/future");
        navigateTo("future");
      }
      // FUTURE
      if (
        (sliderState == "/future" && click == "Past") ||
        (sliderState == "/future" && click == "right")
      ) {
        slider.style.transform = "translateX(0rem)";
        slider.firstChild.innerHTML = "PAST";
        setSliderState("/past");
        navigateTo("past");
      }
      if (
        (sliderState == "/future" && click == "Present") ||
        (sliderState == "/future" && click == "left")
      ) {
        slider.style.transform = "translateX(var(--sliderMovesmall))";
        slider.firstChild.innerHTML = "PRESENT";
        setSliderState("/present");
        navigateTo("present");
      }
    }
  }
  return (
    <div
      ref={sliderBackground}
      className={
        classes.sliderBackground
        /*  silderDown ? classes.sliderAnimateOut : classes.sliderAnimateIn */
      }
    >
      {silderDown ? "" : <SliderTitle />}
      <div
        ref={sliderDiv}
        className={silderDown ? classes.sliderDivOut : classes.sliderDivIn}
      >
        <div
          ref={sliderRef}
          className={`${classes.sliderBar} ${
            silderDown ? classes.sliderBarOut : classes.sliderBarIn
          }`}
        >
          <div
            className={`${classes.sliderStates}  ${
              silderDown ? classes.sliderStatesDown : ""
            }`}
            onClick={() => clickHandler("Past")}
          >
            <h2>PAST</h2>
          </div>
          <div
            className={`${classes.sliderStates}  ${
              silderDown ? classes.sliderStatesDown : ""
            }`}
            onClick={() => clickHandler("Present")}
          >
            <h2>PRESENT</h2>
          </div>
          <div
            className={`${classes.sliderStates}  ${
              silderDown ? classes.sliderStatesDown : ""
            }`}
            onClick={() => clickHandler("Future")}
          >
            <h2>FUTURE</h2>
          </div>

          <div id="slider" className={classes.slider}>
            <h2>PAST</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
