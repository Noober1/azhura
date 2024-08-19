"use client";

import "@/components/layouts/style.css";
import { motion } from "framer-motion";

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{
        opacity: 1,
        height: "100%",
        top: "0%",
      }}
      animate={{
        opacity: 0,
        height: 0,
        top: "50%",
        display: "none",
      }}
      className="loading-screen"
      viewport={{
        once: true,
      }}
    >
      <span>Loading</span>
    </motion.div>
  );
};

export default LoadingScreen;
