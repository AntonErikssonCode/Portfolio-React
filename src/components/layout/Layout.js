import Slider from "../navigation/Slider";
import "./Layout.css";
import Scene from "../../3D/Scene";
import Logo from "../features/Logo";
import LoadingAnimation from "../features/LoadingAnimation";
import {useState, useEffect} from 'react';

function Layout(props) {


  return (
    <div className="layout">
    
      <Logo topLeft={true} link={true}/>
      <Slider />
      <div className="scene-container">
      <Scene/>
      </div>
      
      <main>
     
        {props.children}
        
      </main>
 
      
    </div>
  );
}
export default Layout;
