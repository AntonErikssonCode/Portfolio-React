import React from "react";
import "./LoadingAnimation.css";
import { motion } from "framer-motion";

function LoadingAnimation() {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  return (
    <motion.div
      initial={{ opacity: 1, scale: 1 }}
      animate={{ opacity: 0, scale: 1, transition: { delay: 2, duration: 1 } }}
      className="LoadingAnimation"
    >
      <motion.div
        initial={{ opacity: 1, scale: 1 }}
        animate={{
          opacity: 0,
          scale: 100,
          transition: { delay: 2, duration: 1.5 },
        }}
        className="LoadingAnimation-logo"
      >
        <motion.div
          initial={{ opacity: 0, x: "-150%" }}
          animate={{
            opacity: 1,
            x: "0%",
            transition: { duration: 1.5, type: "spring" },
          }}
          className="LoadingAnimation-green LoadingAnimation-box"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: "150%" }}
          animate={{
            opacity: 1,
            x: "0%",
            transition: { duration: 1.5, type: "spring" },
          }}
          className="LoadingAnimation-purple LoadingAnimation-box"
        ></motion.div>
        <motion.div
          initial={{
            opacity: 0,
            scale: 0,
            borderBottomLeftRadius: "50%",
            borderBottomRightRadius: "50%",
            borderTopLeftRadius: "50%",
            borderTopLeftRadius: "50%",
          }}
          animate={{
            opacity: 1,
            scale: 1,
            borderBottomLeftRadius: "0%",
            borderBottomRightRadius: "10%",
            borderTopLeftRadius: "0%",
            borderTopLeftRadius: "10%",
            transition: { delay: 0.3, duration: 1.5, type: "spring" },
          }}
          className="LoadingAnimation-white"
        ></motion.div>
      </motion.div>
    </motion.div>
  );
}

export default LoadingAnimation;
