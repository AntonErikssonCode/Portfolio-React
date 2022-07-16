import classes from "./Slider.module.css";
import { useState, useLayoutEffect, useRef} from "react";
import { useNavigate } from "react-router-dom";
import SliderTitle from "./SliderTitle";




function Slider() {
  
  const [sliderState, setSliderState] = useState("/past");
  const [silderDown, setsilderDown] = useState(true);


  const sliderBackground =  useRef();
  const sliderRef =  useRef();
  // Set Up Navigation
 
  
  const navigate = useNavigate();
  function navigateTo(where) {
    navigate(where);
  }

  // Detect an animate slider position depending on position
  const scrolledDown = useWindowPosition();
  function useWindowPosition() {
    const [scrollPosition, setPosition] = useState(0);
    useLayoutEffect(() => {
      function updatePosition() {
        setPosition(window.pageYOffset);
      }
      window.addEventListener('scroll', updatePosition);
      updatePosition();
      return () => window.removeEventListener('scroll', updatePosition);
    }, []);
    
    
    return scrollPosition > 100 ?  true: false;
  }

  useLayoutEffect(() => {
    setsilderDown(scrolledDown)
  },[scrolledDown])


  // Animation, navigation and state change of slider
  function clickHandler(click) {
    const slider = document.getElementById("slider");
    
    if (click != sliderState) {
      // PAST
      if (sliderState == "/past" && click == "Present") {
        slider.style.transform = "translateX(0vw)";
        slider.firstChild.innerHTML = "Present";
        setSliderState("/present");
        navigateTo("present");
      }

      if (sliderState == "/past" && click == "Future") {
        slider.style.transform = "translateX(16vw)";
        setSliderState("/future");
        slider.firstChild.innerHTML = "Future";
        navigateTo("future");
      }

      // PRESENT
      if (sliderState == "/present" && click == "Past") {
        slider.style.transform = "translateX(-16vw)";
        slider.firstChild.innerHTML = "Past";
        setSliderState("/past");
        navigateTo("past");
      }
      if (sliderState == "/present" && click == "Future") {
        slider.style.transform = "translateX(16vw)";
        slider.firstChild.innerHTML = "Future";
        setSliderState("/future");
        navigateTo("future");
      }

      // FUTURE
      if (sliderState == "/future" && click == "Past") {
        slider.style.transform = "translateX(-16vw)";
        slider.firstChild.innerHTML = "Past";
        setSliderState("/past");
        navigateTo("past");
      }
      if (sliderState == "/future" && click == "Present") {
        slider.style.transform = "translateX(0px)";
        slider.firstChild.innerHTML = "Present";
        setSliderState("/present");
        navigateTo("present");
      }
    }
  }
  return (
    <div ref={sliderBackground} className={silderDown? classes.sliderAnimateOut: classes.sliderAnimateIn}>
      
      {silderDown? "": <SliderTitle/>}
      <div className={classes.sliderDiv}>

      </div>
      <div ref={sliderRef}  className={classes.sliderBar}>
        <div
          className={classes.sliderStates}
          onClick={() => clickHandler("Past")}
        >
          <h2>Past</h2>
        </div>
        <div
          className={classes.sliderStates}
          onClick={() => clickHandler("Present")}
        >
          <h2>Present</h2>
        </div>
        <div
          className={classes.sliderStates}
          onClick={() => clickHandler("Future")}
        >
          <h2>Future</h2>
        </div>
      </div>
      <div id="slider" className={classes.slider}>
        <h2>Past</h2>
      </div>
    </div>
  );
}

export default Slider;
