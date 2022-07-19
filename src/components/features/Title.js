import "./Title.css";
import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


function Title(props) {
  const topTextSize = props.topTextSize;
  const botTextSize = props.botTextSize;
  const topText = props.topText;
  const botText = props.botText;

  const { ref, inView } = useInView();
  const titleAnimation = useAnimation();

  useEffect(() => {
    if (inView) {
      titleAnimation.start({
        y: 0,
        opacity:1,
        transition: {
          duration: 2,
          type:'spring'
        },
      });
    }
    if(!inView){
      titleAnimation.start({
        y: 0,
        opacity:0,
        transition: {
          duration: 2,
        },
      });

    }
    console.log("in view", inView);
  }, [inView]);
  return (
    <motion.div ref={ref} animate={titleAnimation} className="title-div">
      <h2 className="top-text" style={{ fontSize: topTextSize }}>
        {topText}{" "}
      </h2>
      <h2 className="bot-text" style={{ fontSize: botTextSize }}>
        {botText}
      </h2>
    </motion.div>
  );
}
export default Title;
