import classes from "./ProjectContainer.module.css";
import ProjectItem from "./ProjectItem";
import MyWebsite from "./MyWebsite";



function ProjectContainer() {
 
  return (
    <div>
      <h3 className={classes.projectContainertitle}> My Projects</h3>
      <div className={classes.projectContainer}>
        <ProjectItem
          title="The Process Behind the Slider"
          theme="UX And Webdevelopment"
          image={require("./slider-old.gif")}
          description="Share my decision making processes and the reasoning that went in to the creation of this sites navigational slider. "
          alignment="left"
          component = {<MyWebsite/>}
        />

      </div>
    </div>
  );
}
export default ProjectContainer;
