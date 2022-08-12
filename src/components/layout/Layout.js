import Slider from "../navigation/Slider";
import "./Layout.css";
import Scene from "../../3D/Scene";

import Logo from "../features/Logo";
function Layout(props) {
  return (
    <div className="layout">
      <Logo/>
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
