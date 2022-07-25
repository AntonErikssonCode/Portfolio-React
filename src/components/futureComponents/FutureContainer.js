import './FutureContainer.css'
import Me from './Me';
import Contact from './Contact';
import Title from '../features/Title';
import SvgWave from '../layout/SvgWave';
import Goals from './Goals';
function FutureContainer(props){
  return(
    <div className='futureContainer'>
            <Title
        topTextSize="4vw"
        botTextSize="10vw"
        topText="But What About The "
        botText="FUTURE"
      />
      <Goals/>
      <Me>
    
      </Me>
     
      <Contact/>
      
    
      <SvgWave rotated={true} color="var(--mainColor)" top={false}/>
    </div>
  )
}
export default FutureContainer;