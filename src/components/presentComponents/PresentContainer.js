import './PresentContainer.css'
import ImgBoardContainer from './boards/ImgBoardContainer';
import SkillsContainer from './techs/SkillsContainer';
import Title from '../features/Title';
function PresentContainer(props){
  return(
    <div className='presentContainer'>
           <Title
        topTextSize="5vw"
        botTextSize="8vw"
        topText="What I Do In The"
        botText="PRESENT"
      />
  <ImgBoardContainer />
       
       <SkillsContainer/>
    </div>
  )
}
export default PresentContainer;