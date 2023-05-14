import classes from "./ProjectContainer.module.css";
import ProjectItem from "./ProjectItem";
import ProjectSlider from "./ProjectSlider";
import SvgWave from "../../layout/SvgWave";
import ProjectDiscopop from "./ProjectDiscopop";

function ProjectContainer() {
  return (
    <div className={classes.projectContainer}>
      <SvgWave rotated={true} color="var(--secondColor)" top={true} />
      <h3 className={classes.projectContainertitle}> My Projects</h3>
      <div className="project-column">
      <ProjectItem
          title="Applying Affect Estimates in 3D Music Visualization"
          theme="Music Visualization"
          image={require("../../../assets/project1/slider-old.gif")}
          description="Journeying through the development of an affect-based music visualizer "
          alignment="left"
          component={<ProjectSlider />}
        />
        
      <ProjectItem
          title="DnD Character Log"
          theme="Web Design And NoSql"
          image={require("../../../assets/project1/slider-old.gif")}
          description="Hobby project where users can upload and change thier DnD Characters."
          alignment="right"
          component={<ProjectSlider />}
        />

      <ProjectItem
          title="Pawly: Virtual Dog"
          theme="Augmented Reality and Concept Design"
          image={require("../../../assets/project1/slider-old.gif")}
          description="A design concept for an app that promotes physical activity among children. "
          alignment="left"
          component={<ProjectSlider />}
        />
          <ProjectItem
          title="Discopop: Colocated Mobile Game"
          theme="Game Development and Mobile Design "
          image={require("../../../assets/project1/slider-old.gif")}
          description="The design of a colocated mobile game using Flutter and Firebase Real Time Database. "
          alignment="right"
          component={<ProjectSlider />}
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
