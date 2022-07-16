import Slider from "../navigation/Slider";
import "./Layout.css";

import Logo from "../features/Logo";
function Layout(props) {
  return (
    <div className="layout">
      <Logo/>
      <Slider />
      <main>
        {props.children}
        
      </main>
    </div>
  );
}
export default Layout;
