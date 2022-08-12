import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

function Animate(props) {
  const type = props.variant;
  const slideInFromBotScale = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "linear" },
      y: 0,
    },
    hidden: { opacity: 0, y: "100px", scale: 0.1 },
  };

  const slideInFromRight = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 }, x: "0%" },
    hidden: { opacity: 0, scale: 1, x: "-50%" },
  };

  const slideInFromBot = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 }, y: "0%" },
    hidden: { opacity: 0, scale: 1, y: "50%" },
  };
  const fadeIn = {
    visible: { opacity: 1, transition: { duration: 1 } },
    hidden: { opacity: 0 },
  };
  const slideInFromBotScaleSmall = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 }, y: "0%" },
    hidden: { opacity: 0, scale: 1, y: "50%" },
  };

  const variants = [
    slideInFromBotScale,
    slideInFromRight,
    slideInFromBot,
    fadeIn,
    slideInFromBotScaleSmall,
  ];
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      console.dir(inView)
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={variants[type]}
      animate={controls}
      className="animate"
    >
      {props.children}
    </motion.div>
  );
}

export default Animate;
