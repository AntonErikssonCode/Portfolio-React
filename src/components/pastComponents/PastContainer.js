import "./PastContainer.css";
import ProjectContainer from "./projects/ProjectContainer";
import Title from "../features/Title";
import SliderTimeline from "./SliderTimeline";
import SvgWave from "../layout/SvgWave"
function PastContainer(props) {
  return (
    <div className="pastContainer">
      <Title
        type="past-title"
        topText="What I've Done In The "
        botText="PAST"
      />
     
      <ProjectContainer />
      <SliderTimeline />

      <SvgWave rotated={true} color="white" top={false}/>
    
    </div>
  );
}
export default PastContainer;
