/* import Slider from "../navigation/Slider"; */
import "./Layout.css";
import Scene from "../../3D/Scene";
import Logo from "../features/Logo";
import Slider from "../navigation/SliderNew";
function Layout(props) {
  return (
    <div className="layout">
      <Logo topLeft={true} link={true} />
      <Slider />
      <div className="scrollable-top"></div>
      <div className="scene-container">
        <Scene />
      </div>
      <main>{props.children}</main>
    </div>
  );
}
export default Layout;
