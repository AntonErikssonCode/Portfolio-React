import './FutureContainer.css'
import Me from './Me';
import Contact from './Contact';
import Title from '../features/Title';
import Quote from '../pastComponents/Quote';
function FutureContainer(props){
  return(
    <div className='futureContainer'>
            <Title
        topTextSize="4vw"
        botTextSize="10vw"
        topText="But What About The "
        botText="FUTURE"
      />
      <Me/>
      <Quote />
      <Contact/>

      
    </div>
  )
}
export default FutureContainer;