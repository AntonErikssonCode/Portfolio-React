import "./Projects.css";

function ProjectDnD() {
  const add = require("../../../assets/project5/add.png");
  const selected = require("../../../assets/project5/selected.png");
  const main = require("../../../assets/project5/main.png");

  return (
    <div className="MyWebsite-container">
      <div className="MyWebsite-inspiration-container">
        <div>
          <h3 className="MyWebsite-inspiration-firstTitle noMarginTop">
          Description
          </h3>
          <p>
          I am pleased to present a side project I embarked upon to enhance the organization and management of NPCs in my D&D campaign. This endeavor led me to develop a system that utilizes Firebase for data storage, while employing TypeScript and Material UI (MUI) to create an intuitive and visually appealing website.
          </p>
          <h3 className="project-link-container" >
        <a
        className="project-link"
          href="https://github.com/AntonErikssonCode/dnd-log"
          target="_blank"
          rel="noopener noreferrer"

        >
          View Code
        </a>
      </h3>
      
      </div>
      </div>

      <h3 className="">Results</h3>
      <div className="projectThesis-results">
        <div className="portfolio-img portfolio-img-fullsize">
          <img src={main} />
        </div>
        <div className="portfolio-img portfolio-img-fullsize">
          <img src={selected} />
        </div>
        <div className="portfolio-img portfolio-img-fullsize">
          <img src={main} />
        </div>
        <div></div>
      </div>

      
    </div>
  );
}

export default ProjectDnD;
