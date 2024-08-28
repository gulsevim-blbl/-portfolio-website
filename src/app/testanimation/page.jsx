"use client";

import { delay, motion } from "framer-motion";

const TestPage = () => {
  const variants = {
    variant1: {
      x: 300,
      y: 200,
      opacity: 0.5,
      transition:{
        delay:2,
        duration:3
      }
    },
    variant2: {
      x: -550,
      y: 200,
      rotation: 90,
    },
  };

  return (
    <div className="h-full flex items-center justify-center">
      <motion.div
        className="w-96 h-96 bg-pink-400 rounded"
        variants={variants}
        animate="variant2"
      ></motion.div>
    </div>
  );
};

export default TestPage;