import "./FutureContainer.css";
import Me from "./Me";
import Title from "../features/Title";
import SvgWave from "../layout/SvgWave";
import Goals from "./Goals";
import { ContactUs } from "./SendMail";

function FutureContainer() {
  return (
    <div className="futureContainer">
      <Title type="future-title" topText="What About The " botText="FUTURE" />
      <Goals />
      <Me></Me>
      <ContactUs />
      <SvgWave rotated={true} color="var(--mainColor)" top={false} />
    </div>
  );
}
export default FutureContainer;
