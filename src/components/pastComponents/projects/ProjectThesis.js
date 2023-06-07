import "./Projects.css";
import "./ProjectThesis.css";


function ProjectThesis() {
  const cover = require("../../../assets/project2/cover.jpg");
  const agg = require("../../../assets/project2/agg.JPG");
  const happy = require("../../../assets/project2/happy.JPG");
  const sad = require("../../../assets/project2/sad.JPG");
  const example = require("../../../assets/project2/example2.JPG");
  const masterThesis = require("../../../assets/pdf/masterThesis.pdf");

  return (
    <div className="MyWebsite-container">
      <div className="MyWebsite-inspiration-container">
        <div>
          <h3 className="MyWebsite-inspiration-firstTitle noMarginTop">
            Introduction
          </h3>
          <p>
            I am delighted to share with you my Master Thesis passion project—an
            ambitious endeavor to visualize music's emotions in 3D. Despite its
            inherent complexity, I embraced the challenge wholeheartedly, driven
            by the aim of unraveling the intricate connection between music and
            emotion.
          </p>
          <h3 className="project-link-container" >
        <a
        className="project-link"
          href="https://github.com/AntonErikssonCode/VibifyEnv"
          target="_blank"
          rel="noopener noreferrer"

        >
          View Code
        </a>
      </h3>
      
      <h3 className=" noMarginTop project-link-container" >
        <a
        className="project-link"
          href={masterThesis}
          target="_blank"
          rel="noopener noreferrer"

        >
          View Thesis
        </a>
      </h3>
          <h3>Abstract</h3>
          <p>
            Abstract This project aimed to develop a 3D music visualizer using
            affect estimation and real-time audio features. Methods used during
            the project ranged from research through design, focus groups,
            prototyping, and an experimental survey. The final iteration of the
            visualizer could generate 3D scenes based on the music and extracted
            affect values, which participants found to be visually pleasing and
            fitting to the music. However, the visualizer struggled to
            accurately communicate the affect values visually, which is
            attributed to the lacking aesthetic profile and the subsequent
            implementation. Despite this, the project successfully manifested an
            affect-based visualizer that offers potential for further
            development. Future research is needed to investigate the use of
            abstract means for communicating emotions, and standardization of
            measures and language is required for this multidisciplinary domain.
          </p>
          <h3>Methods Used </h3>
          <ul>
            <li>Double Diamond Model</li>
            <li>Research Through Design</li>
            <li> Focus Group</li>
            <li>Brainstorming</li>
            <li>Importance/Difficulty Matrix</li>
            <li>MoSCoW analysis</li>
            <li>Prototyping</li>
            <li>Coding</li>
          </ul>
          <h3>Tech Used</h3>
          <ul>
            <li>JS</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Essentia.js</li>
            <li>Meyda</li>
            <li>Three.js</li>
          </ul>
        </div>
      </div>

      <h3 className="noMarginTop">Results</h3>
      <div className="projectThesis-results">
        <div className="portfolio-img portfolio-img-fullsize">
          <img src={happy} />
        </div>
        <div className="portfolio-img portfolio-img-fullsize">
          <img src={sad} />
        </div>
        <div className="portfolio-img portfolio-img-fullsize">
          <img src={agg} />
        </div>
        <div></div>
      </div>

      
    </div>
  );
}

export default ProjectThesis;
