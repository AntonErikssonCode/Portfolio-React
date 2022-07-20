import "./SliderTimeline.css";
import { useEffect, useState } from "react";
import TimlineInstance from "./TimelineInstance";
const monthValues = {
  0: "Januari",
  1: "February",
  2: "Mars",
  3: "April",
  4: "May",
  5: "June",
  6: "July",
  7: "August",
  8: "September",
  9: "October",
  10: "November",
  11: "December",
};

function SliderTimeline() {
  const [year, setYear] = useState(2014);
  const [month, setMonth] = useState("June");
  const [timeValue, setTimeValue] = useState(5);

  function handleChange(e) {
    setTimeValue(e.target.value);
    console.dir(timeValue)
  }

  useEffect(() => {
    /* console.dir("target value" + e.target.value); */
    if (timeValue < 12) {
      setYear("2014");
    } else if (timeValue >= 12 && timeValue < 24) {
      setYear("2015");
    } else if (timeValue >= 24 && timeValue < 36) {
      setYear("2016");
    } else if (timeValue >= 36 && timeValue < 48) {
      setYear("2017");
    } else if (timeValue >= 48 && timeValue < 60) {
      setYear("2018");
    } else if (timeValue >= 60 && timeValue < 72) {
      setYear("2019");
    } else if (timeValue >= 72 && timeValue < 84) {
      setYear("2020");
    } else if (timeValue >= 84 && timeValue < 96) {
      setYear("2021");
    } else if (timeValue >= 96 && timeValue < 108) {
      setYear("2022");
    }
    var remainder = timeValue % 12;
    setMonth(monthValues[remainder]);
    console.dir(monthValues[remainder])
   
  }, [timeValue]);

  return (
    <div className="sliderTimeline-container">
 <h3>My Timeline</h3>
  
    <div className="sliderTimeline">
     
   
      <div className="sliderTimeline-display">
        <TimlineInstance time={timeValue} />
      </div>
      <div className="sliderTimeline-dates">
        <h4>{month}-{year}</h4>
 {/*       
       <h4>Year: <span className="sliderTimeline-notBold"> {year}</span></h4>
       <h4>Month:  <span className="sliderTimeline-notBold"> {month}</span></h4> */}
     </div>
      <input
        type="range"
        className="sliderTimeline-slider"
        min="5"
        max="104"
        defaultValue="5"
        /* onChange={(event) => setYear(event.target.value)} */
        on
        onChange={handleChange}
       
      />
     
    </div>
    </div>
  );
}
export default SliderTimeline;
