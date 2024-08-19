import TextSideScroll from "@/components/ui/text/TextSideScroll";
import TextSplitBouncing from "@/components/ui/text/TextSplitBouncing";
import { AnimationControls, motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { twMerge } from "tailwind-merge";

interface StickyContainerProps {
  minimize: boolean;
  currentSection: {
    color: string;
    text: string;
  };
}

const StickyContainer = ({
  minimize,
  currentSection,
}: StickyContainerProps) => {
  const backgroundControls = useAnimation();
  const backgroundTextControls = useAnimation();
  useEffect(() => {
    if (minimize) {
      backgroundControls.start({
        position: "absolute",
        width: "100%",
        height: "100%",
        transform: "skew(0deg)",
        bottom: 0,
        left: 0,
      });
      backgroundTextControls.start({
        opacity: 1,
        display: "initial",
      });
    } else {
      backgroundControls.start({
        position: "absolute",
        width: "100%",
        height: "20%",
        bottom: "-50%",
        left: 0,
      });

      backgroundTextControls.start({
        opacity: 0,
        display: "none",
      });
    }
  }, [backgroundControls, backgroundTextControls, minimize]);
  return (
    <motion.div className="sticky-container">
      <motion.div
        className="background"
        initial={{
          width: "100%",
          height: 0,
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
        }}
        animate={backgroundControls}
      >
        <motion.div
          key={currentSection.text}
          animate={backgroundTextControls}
          className={twMerge("background-text", currentSection.color)}
        >
          <TextSideScroll hoverEffect={false} baseVelocity={1}>
            {currentSection.text}
          </TextSideScroll>
        </motion.div>
      </motion.div>
      <div className="text">
        <TextSplitBouncing>{currentSection.text}</TextSplitBouncing>
      </div>
    </motion.div>
  );
};

export default StickyContainer;
