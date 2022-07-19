import "./PastContainer.css";
import Timeline from "./Timeline";
import ProjectContainer from "../projects/ProjectContainer";
import Quote from "./Quote";
import Title from "../features/Title";
import SliderTimeline from "./SliderTimeline";
function PastContainer(props) {
  return (
    <div className="pastContainer">
      <Title
        topTextSize="3.5vw"
        botTextSize="14vw"
        topText="What I've Done In The "
        botText="PAST"
      />
      <SliderTimeline />
      <ProjectContainer />
    
    </div>
  );
}
export default PastContainer;
