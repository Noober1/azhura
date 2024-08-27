import TextSideScroll from "@/components/ui/text/TextSideScroll";
import TextSplitBouncing from "@/components/ui/text/TextSplitBouncing";
import {
  AnimationControls,
  motion,
  useAnimation,
  Variants,
} from "framer-motion";
import React, { useEffect } from "react";
import { twMerge } from "tailwind-merge";
import styles from "./StickyContainer.module.css";

interface StickyContainerProps {
  minimize: boolean;
  currentSection: {
    color: string;
    text: string;
  };
}

const variants: Variants = {
  minimize: {
    height: "100%",
    opacity: 1,
  },
  unminimize: {
    height: "0%",
    opacity: 0,
  },
};

const StickyContainer = ({
  minimize,
  currentSection,
}: StickyContainerProps) => {
  const backgroundControls = useAnimation();

  useEffect(() => {
    backgroundControls.start(minimize ? "minimize" : "unminimize");
  }, [backgroundControls, minimize]);

  return (
    <motion.div className={styles.stickyContainer}>
      <motion.div
        animate={backgroundControls}
        variants={variants}
        initial="minimize"
        className={twMerge(styles.background, styles[currentSection.color])}
      >
        <motion.div key={currentSection.text} className={styles.backgroundText}>
          <TextSideScroll hoverEffect={false} baseVelocity={1}>
            {currentSection.text}
          </TextSideScroll>
        </motion.div>
      </motion.div>
      <motion.div
        className={styles.text}
        animate={backgroundControls}
        variants={variants}
        initial="minimize"
      >
        <TextSplitBouncing>{currentSection.text}</TextSplitBouncing>
      </motion.div>
    </motion.div>
  );
};

export default StickyContainer;
