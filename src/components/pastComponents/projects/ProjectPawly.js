import "./Projects.css";

function ProjectPawly() {
  const hemsida = require("../../../assets/project3/hemsida.png");
  const ram = require("../../../assets/project3/ram.png");

  return (
    <div className="MyWebsite-container">
      <div className="MyWebsite-inspiration-container">
        <div >
          <h3 className="MyWebsite-inspiration-firstTitle noMarginTop">
            Stakeholders
          </h3>
          <p>Generation Pep</p>

          <h3 className=" ">The Task</h3>
          <p>
            Our objective was to develop an application that indirectly
            encourages children to increase their level of physical activity by
            utilizing the concept of taking care of a dog.
          </p>
          <h3 className=" ">Our Idea:</h3>
          <p>
            Introducing Pawly, an augmented reality application that serves as a
            virtual pet experience for young users. With Pawly, children can
            create and nurture their own virtual pet. By incorporating exercise
            into the gameplay, such as taking virtual dog strolls, children can
            engage in physical activity in an enjoyable and interactive manner.
            As they progress in the game and care for their virtual dog, they
            will develop emotional bonds, mirroring the experience of having a
            real-life companion.{" "}
          </p>
          <h3 className=" ">Key Insights</h3>
          <p>
            Working alongside real stakeholders and an exceptional team proved
            to be an invaluable experience, fostering a collaborative
            environment where diverse ideas converged and thrived.{" "}
          </p>

          <h3 className="project-link-container">
            <a
              className="project-link"
              href="https://www.idxpo.se/current/group_01/index.html#about"
              target="_blank"
              rel="noopener noreferrer"
            >
              View The Pawly Website
            </a>
          </h3>
        </div>
      </div>

      <h3 className="">Results</h3>
      <div className="projectThesis-results">
        <div className="portfolio-img portfolio-img-fullsize">
          <img src={hemsida} />
        </div>
       
      </div>
    </div>
  );
}

export default ProjectPawly;
