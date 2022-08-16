import React from "react";
import "./LoadingAnimation.css";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
function LoadingAnimation(props) {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
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
          scale: 15,
          transition: { delay: 2, duration: 1 },
        }}
        className="LoadingAnimation-logo"
      >
        <motion.div
          initial={{ opacity: 0, x: "-100%" }}
          animate={{ opacity: 1, x: "0%", transition: { duration: 1 } }}
          className="LoadingAnimation-green LoadingAnimation-box"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: "0%", transition: { duration: 1 } }}
          className="LoadingAnimation-purple LoadingAnimation-box"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
          className="LoadingAnimation-white"
        ></motion.div>
      </motion.div>
    </motion.div>
  );
}

export default LoadingAnimation;
