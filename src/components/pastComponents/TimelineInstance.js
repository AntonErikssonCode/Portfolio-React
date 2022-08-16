import "./TimelineInstance.css";

const data = [
  {
    start: 0,
    end: 11,
    name: "Personal Assistant",
    company: "Ambass AB",
    time: "June 2014 - January 2015",
    lessons: "Responsibility & Empaty",
    description: ["Assisted disabled children with their needs and everyday tasks. "],
    type: "Working",
    location: "Norrköping",
    image: "./personal-assistant.jpg"  },
  {
    start: 12,
    end: 19,
    name: "Personal Assistant",
    company: "Norrköping Municiplaity ",
    time: "January 2015 - August 2015",
    lessons: "Responsibility & Empathy",
    description: ["Assisted disabled children with their needs and everyday tasks."],
    type: "Working",
    location: "Norrköping",
    image: "./personal-assistant.jpg"  },
  {
    start: 20,
    end: 35,
    name: "Traveling and Working Abroad",
    company: " ",
    time: "September 2015 - December 2016",
    lessons: "Independence & English Fluency",
    description: ["Explored the world and met different cultures and customs.", "Worked jobs such as waiter, cleaner and farmer. "],
    type: "Personal Development",
    location: "Asia, Australia & Canada",
    image: "./travel.jpg"  },
  {
    start: 36,
    end: 55,
    name: "Customer Service and Sales",
    company: "Telia Company",
    time: "Jan 2017 - August 2018",
    lessons: "Sales & Customer Interactions",
    description: ["Helped customers with everything from invoices, technical issues to sales of hardware and services. ", "Handled communication by phone, chat, mail and post. "],
    type: "Working",
    location: "Norrköping & Gothenburg",
    image: "./phone.jpg"  },
  {
    start: 56,
    end: 90,
    name: "BSc Cognitive Science ",
    company: "Gothenburg University",
    time: "September 2018 - June 2021",
    lessons: "Heuristics Analysis, Scientific Methodology, Critical Thinking & Project Execution.",
    description: ["Gained knowledge of a multitude of cognitive processes, such as perception, attention and memory, and how they are integrated in the human mind.", "Got more involved in coding and the underlying structures of AI and Big data. ", "Developed my skills in research, conduction of scientific studies, critical thinking and of course cooperation."],
    type: "Studying",
    location: "Gothenburg",
    image: "./brain.jpg"  },
  {
    start: 91,
    end: 104,
    name: "MSc Interaction Design ",
    company: "Chalmers University of Technology",
    time: "August 2021 - Present",
    lessons: "Design Principles,  Iterative Development & Creative Playfulness",
    description: ["Gaining a deeper understanding of the design process and developing my skills in prototyping, wireframing, user research and information visualization. ", "Have intentionally sought after and included courses that involve coding, such as Computer Graphics and Web Development: Scripts and Databases."],
    type: "Studying",
    location: "Gothenburg",
    image: "./design-small.png"
  },
];

function TimelineInstance(props) {
  const timeValue = props.time;

  var selectedInstance = data.filter((obj) => {
    return timeValue >= obj.start && timeValue <= obj.end;
  });

  return (
    <div className="timelineInstance">
      <div className="timelineInstance-left">
        <img className="timelineInstance-left-img" src={require(`${selectedInstance[0].image}`)} />
      </div>
      <div className="timelineInstance-right"> 
        <div className="timelineInstance-name-container">   <h4 className="timelineInstance-name">{selectedInstance[0].name}</h4></div>
     
      
 
        <div className="timelineInstance-company-and-type">
        <h4 className="timelineInstance-company">{selectedInstance[0].company}</h4>
        <h4 className="timelineInstance-type">{selectedInstance[0].type}</h4>
    
        </div>
        
    
        <div className="timelineInstance-location-and-time">
        <h4 className="timelineInstance-location">{selectedInstance[0].location}</h4>
        <h4 className="timelineInstance-time">{selectedInstance[0].time}</h4>
        </div>

        <ul className="timelineInstance-list">
          {selectedInstance[0].description.map(function (item, i) {
           
            return <li className="timelineInstance-list-item" key={i} >{item}</li>;
          })}
        </ul>

        <div className="timelineInstance-lessons-container">        <h4 className="timelineInstance-lessons">{selectedInstance[0].lessons}</h4></div>
     
      

    
        </div>
    </div>
  );
}
export default TimelineInstance;
