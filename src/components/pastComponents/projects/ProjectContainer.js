import classes from "./ProjectContainer.module.css";
import ProjectItem from "./ProjectItem";
import MyWebsite from "./MyWebsite";

import SvgWave from "../../layout/SvgWave"

function ProjectContainer() {
 
  return (
    <div  className={classes.projectContainer}>
      <SvgWave rotated={true} color="var(--secondColor)" top={true}/>
      <h3 className={classes.projectContainertitle}> My Projects</h3>
      <div>
        <ProjectItem
          title="The Process Behind the Slider"
          theme="UX And Web Development"
          image={require("./slider-old.gif")}
          description="Share my decision making processes and the reasoning that went into the creation of this site's slider navigation."
          alignment="left"
          component = {<MyWebsite/>}
        />

      </div>
      <SvgWave rotated={true} color="black" top={false}/>
    </div>
  );
}
export default ProjectContainer;
