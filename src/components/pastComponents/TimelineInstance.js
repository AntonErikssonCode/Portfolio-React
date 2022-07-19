import "./TimelineInstance.css";

const data = [
  {
    start: 0,
    end: 11,
    name: "Personal Assistant",
    company: "Ambass AB",
    time: "June 2014 - January 2015",
    lessons: "Responsibility & Empaty",
    description: ["sak1", "sak2", "sak3"],
    type: "Working",
    location: "Norrköping",
  },
  {
    start: 12,
    end: 19,
    name: "Personal Assistant",
    company: "Norrköping Municiplaity ",
    time: "January 2015 - August 2015",
    lessons: "Responsibility & Empaty",
    description: ["sak1", "sak2", "sak3"],
    type: "Working",
    location: "Norrköping",
  },
  {
    start: 20,
    end: 35,
    name: "Traveling and Working Abroad",
    company: "dasd ",
    time: "September 2015 - December 2016",
    lessons: "English Fluency",
    description: ["sak1", "sak2", "sak3"],
    type: "Personal Development",
    location: "South East Asia, Australia and Canada",
  },
  {
    start: 36,
    end: 55,
    name: "Customer Service and Sales",
    company: "Telia Company",
    time: "Jan 2017 - August 2018",
    lessons: "123",
    description: ["sak1", "sak2", "sak3"],
    type: "Working",
    location: "Gothenburg",
  },
  {
    start: 56,
    end: 90,
    name: "BSc Cognitive Science ",
    company: "Gothenburg University",
    time: "September 2018 - June 2021",
    lessons: "123",
    description: ["sak1", "sak2", "sak3"],
    type: "Studying",
    location: "Gothenburg",
  },
  {
    start: 91,
    end: 104,
    name: "MSc Interaction design and technologies ",
    company: "Chalmers University of Technology",
    time: "August 2021 - Present",
    lessons: "123",
    description: ["dasdasd", "sak2", "sak3"],
    type: "Studying",
    location: "Gothenburg",
  },
];

function TimelineInstance(props) {
  const timeValue = props.time;

  var selectedInstance = data.filter((obj) => {
    return timeValue >= obj.start && timeValue <= obj.end;
  });

  return (
    <div className="timelineInstance">
      <div className="timelineInstance-top1">
        <h4>{selectedInstance[0].name}</h4>
      
      </div>
      <div className="timelineInstance-top2">
        <h4>{selectedInstance[0].company}</h4>
        <h4>{selectedInstance[0].type}</h4>
    
      </div>
      <div className="timelineInstance-top3">
        <h4>{selectedInstance[0].location}</h4>
        <h4>{selectedInstance[0].time}</h4>
      </div>
      <div className="timelineInstance-top4">
        <ul>
          {selectedInstance[0].description.map(function (item, i) {
           
            return <li key={i} >{item}</li>;
          })}
        </ul>
      </div>
      <div className="timelineInstance-top5">
      <h4>{selectedInstance[0].lessons}</h4>
      </div>
      
    </div>
  );
}
export default TimelineInstance;
