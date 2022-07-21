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
  },
  {
    start: 12,
    end: 19,
    name: "Personal Assistant",
    company: "Norrköping Municiplaity ",
    time: "January 2015 - August 2015",
    lessons: "Responsibility & Empaty",
    description: ["Assisted disabled children with their needs and everyday tasks."],
    type: "Working",
    location: "Norrköping",
  },
  {
    start: 20,
    end: 35,
    name: "Traveling and Working Abroad",
    company: " ",
    time: "September 2015 - December 2016",
    lessons: "Independence & English Fluency",
    description: ["Explored the world and met diffrent cultures and customs. ", "Worked jobs such as waiter, cleaner and farmer. "],
    type: "Personal Development",
    location: "South East Asia, Australia & Canada",
  },
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
  },
  {
    start: 56,
    end: 90,
    name: "BSc Cognitive Science ",
    company: "Gothenburg University",
    time: "September 2018 - June 2021",
    lessons: "Heuristics Analysis, Scientifical Methodology, Critical Thinking & Project Execution.",
    description: ["I gained knowledge of a multitude of cognitive processes, such as perception, attention and memory, and how they are integrated in the human mind. ", "I learned about coding and the underlying structures of AI and Big data. ", " The education developed my skills in research, conduction of scientific studies, critical thinking and of course cooperation."],
    type: "Studying",
    location: "Gothenburg",
  },
  {
    start: 91,
    end: 104,
    name: "MSc Interaction design and technologies ",
    company: "Chalmers University of Technology",
    time: "August 2021 - Present",
    lessons: "Design Principles,  Iterative Development & Creative Playfulness",
    description: ["Gaining a deeper understanding of the design process and developing my skills in prototyping, wireframing, user research and information visualization. ", "Have intentionally sought after and included courses that involve coding, such as Computer Graphics and Web Development: Scripts and Databases."],
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
