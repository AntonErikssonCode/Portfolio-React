import "./AboutTheFuture.css";
import Title from "../features/Title";
import { motion } from "framer-motion";
import Contact from "./Contact";
import Me from "./Me";
function AboutTheFuture() {
  

  return (
    <div className="AboutTheFuture-container">
      <Title
        topTextSize="4vw"
        botTextSize="10vw"
        topText="But What About The "
        botText="FUTURE"
      />
      <Contact/>
      <Me/>

    </div>
  );
}
export default AboutTheFuture;
