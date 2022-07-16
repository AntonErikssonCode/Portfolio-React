import "./Timeline.css";
import useCollapse from "react-collapsed";
import { useState } from "react";

function Timeline() {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
  const [item, setItem] = useState("");
  let timelineName = "";
  const data = {
    Work1: {
      type: "work",
      place: "Norrköping",
      time: "2018",
      activity: "Salesman and Customer Service",
      company: "Telia Company",
      keywords:
        "Sales, customer relations, technical support and responsebility",
      description:
        "Worked at telia selling pgones and stuff, it was pretty fun",
    },
    Travel: {
      type: "travel",
      place: "The World",
      time: "2018",
      activity: "Salesman and Customer Service",
      company: "Telia Company",
      keywords:
        "Sales, customer relations, technical support and responsebility",
      description:
        "Worked at telia selling pgones and stuff, it was pretty fun",
    },
    Work2: {
      type: "work",
      place: "Norrköping/Gothenburg",
      time: "2018",
      activity: "Salesman and Customer Service",
      company: "Telia Company",
      keywords:
        "Sales, customer relations, technical support and responsebility",
      description:
        "Worked at telia selling pgones and stuff, it was pretty fun",
    },
    School1: {
      type: "school",
      place: "Gothenburg",
      time: "2018",
      activity: "Salesman and Customer Service",
      company: "Telia Company",
      keywords:
        "Sales, customer relations, technical support and responsebility",
      description:
        "Worked at telia selling pgones and stuff, it was pretty fun",
    },
    School2: {
      type: "school",
      place: "Gothenburg",
      time: "2018",
      activity: "Salesman and Customer Service",
      company: "Telia Company",
      keywords:
        "Sales, customer relations, technical support and responsebility",
      description:
        "Worked at telia selling pgones and stuff, it was pretty fun",
    },
  };
  function handleOnHover(e) {
    setExpanded(true);
  }
  function handleOnHoverOut(e) {
    setExpanded(false);
  }
  function handleOnHoverItem(e) {
    timelineName = e.target.innerText;
    let selectedItem = data[timelineName];
    setItem(selectedItem);
  }

  const [style, setStyle] = useState({ display: "none" });

  return (

      <div className="timeline-container">
        <h2>
          <span className="timeline-text-top">THE</span>{" "}
          <span className="timeline-text-bot">TIMELINE</span>
        </h2>


      <div className="timelineCollapse">
        <div
          className="timeline"
          {...getToggleProps({
            onMouseOver: handleOnHover,
            onMouseOut: handleOnHoverOut,
          })}
        >
          <div className=" timeline-item timeline-date">
            2014
          </div>
          <div
            onMouseOver={handleOnHoverItem}
            className="timeline-item timeline-item1"
          >
            Work1
          </div>
          <div
            onMouseOver={handleOnHoverItem}
            className="timeline-item timeline-item2"
          >
            Travel
          </div>
          <div
            onMouseOver={handleOnHoverItem}
            className="timeline-item timeline-item3"
          >
            Work2
          </div>
          <div
            onMouseOver={handleOnHoverItem}
            className="timeline-item timeline-item4"
          >
            School1
          </div>
          <div
            onMouseOver={handleOnHoverItem}
            className="timeline-item timeline-item5"
          >
            School2
          </div>
          <div className=" timeline-item timeline-date timeline-date2 ">
            2022
          </div>
        </div>
        <section
          {...getToggleProps({
            onMouseOver: handleOnHover,
            onMouseOut: handleOnHoverOut,
          })}
          className={`timelineOpen` }
          {...getCollapseProps()}
        > 
        
          <h3>Activity: <span className="timelineOpen-notBold">{item.activity}</span></h3>
          <h3>Company: <span className="timelineOpen-notBold">{item.company}</span></h3>
          <div className="timelineOpen-placeTime">
            <h3>Place: <span className="timelineOpen-notBold">{item.place}</span></h3>
            <h3>Time: <span className="timelineOpen-notBold">{item.time}</span></h3>
          </div>

         
          
          <p>{item.description}</p>
          <h3>Lessons learned: <span className="timelineOpen-notBold">{item.keywords}</span></h3>
        </section>
      </div>
    </div>
  );
}

export default Timeline;
