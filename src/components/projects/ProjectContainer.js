import classes from "./ProjectContainer.module.css";
import ProjectItem from "./ProjectItem";
import Title from "../features/Title";
function ProjectContainer() {
  return (
    <div>
      <h3 className={classes.projectContainertitle}> My Projects</h3>
      <div className={classes.projectContainer}>
        <ProjectItem
          title="Festival of Death"
          theme="Speculative Design"
          image="https://images.pexels.com/photos/1270184/pexels-photo-1270184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          description="Bold conceptual projected challening the fascination of crime and gore. . ."
          alignment="left"
        />
        <ProjectItem
          title="This website"
          theme="Programming: JavaScript  "
          image="https://images.pexels.com/photos/707837/pexels-photo-707837.jpeg?auto=compress&cs=tinysrgb&w=600"
          description="I made a vanilla javascript reactration of the game mobilegame 2048. Just for fun I made it scalable. Try it out! "
          alignment="right"
        />
        <ProjectItem
          title="C-Space"
          theme="Design/Information Visualization"
          image="https://images.pexels.com/photos/1279813/pexels-photo-1279813.jpeg?auto=compress&cs=tinysrgb&w=600"
          description="Designs and layouts done for school projects."
          alignment="left"
        />
        <ProjectItem
          title="Are Chatbots Human?"
          theme="Batchelors Thesis: Cognitive Science"
          description="Are Chatbots Human? Evaluating Potential Determinants of Anthropomorphism in Technology"
          alignment="right"
        />
         <ProjectItem
          title="Game visualisations"
          theme="Batchelors Thesis: Cognitive Science"
          description="Are Chatbots Human? Evaluating Potential Determinants of Anthropomorphism in Technology"
          alignment="right"
        />
      </div>
    </div>
  );
}
export default ProjectContainer;
