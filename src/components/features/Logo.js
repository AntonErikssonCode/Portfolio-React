import {useRef} from 'react';
import classes from "./Logo.module.css"
import { Link } from 'react-router-dom';
function Logo(){

  return(
    <div  className={classes.portfolioTitle}>
        <Link to={{pathname:"future/contact-me"}}><h1 className={classes.heading}><span className={classes.name}>ANTON ERIKSSONS</span> <span className={classes.portfolio}>PORTFOLIO</span></h1>
        </Link>
      </div>
  )
}

export default Logo


