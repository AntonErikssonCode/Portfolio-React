import classes from "./ProjectContainer.module.css";
import ProjectItem from "./ProjectItem";
import ProjectSlider from "./ProjectSlider";
import SvgWave from "../../layout/SvgWave";
import ProjectDiscopop from "./ProjectDiscopop";
import ProjectDnd from "./ProjectDnD";
import ProjectPawly from "./ProjectPawly";
import ProjectThesis from "./ProjectThesis";

function ProjectContainer() {
  return (
    <div className={classes.projectContainer}>
      <SvgWave rotated={true} color="var(--secondColor)" top={true} />
      <h3 className={classes.projectContainertitle}> My Projects</h3>
      <div className="project-column">
      <ProjectItem
          title="Applying Affect Estimates in 3D Music Visualization"
          theme="Music Visualization"
          image={require("../../../assets/project2/cover.jpg")}
          description="Journeying through the development of an affect-based music visualizer "
          alignment="left"
          component={<ProjectThesis />}
        />
        
      <ProjectItem
          title="DnD Character Log"
          theme="Web Design And NoSql"
          image={require("../../../assets/project5/cover.jpg")}
          description="Hobby project where users can upload and change thier DnD Characters."
          alignment="right"
          component={<ProjectDnd />}
        />

      <ProjectItem
          title="Pawly: Virtual Dog"
          theme="Augmented Reality and Concept Design"
          image={require("../../../assets/project3/cover.png")}
          description="A design concept for an app that promotes physical activity among children. "
          alignment="left"
          component={<ProjectPawly />}
        />
          <ProjectItem
          title="Discopop: Colocated Mobile Game"
          theme="Game Development and Mobile Design "
          image={require("../../../assets/project4/cover.png")}
          description="The design of a colocated mobile game using Flutter and Firebase Real Time Database. "
          alignment="right"
          component={<ProjectDiscopop />}
        />
        <ProjectItem
          title="The Process Behind the Slider"
          theme="UX And Web Development"
          image={require("../../../assets/project1/slider-old.gif")}
          description="Share my decision making processes and the reasoning that went into the creation of this site's slider navigation."
          alignment="left"
          component={<ProjectSlider />}
        />
      </div>
      
      <div className={classes.moreProjects}>
      <h4>More Projects Coming Soon</h4>

      </div>
      
      <SvgWave rotated={true} color="black" top={false} />

    </div>
  );
}
export default ProjectContainer;
