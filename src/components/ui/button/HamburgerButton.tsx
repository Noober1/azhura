import React from "react";
import { MotionConfig, motion } from "framer-motion";

const VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "35%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["35%", "50%", "50%"],
      left: "50%",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "35%"],
      left: "calc(50% + 9px)",
    },
  },
};

interface AnimatedHamburgerButtonProps {
  active?: boolean;
  setActive: (value: (value: boolean) => boolean | boolean) => void;
}

const AnimatedHamburgerButton = ({
  active = false,
  setActive,
}: AnimatedHamburgerButtonProps) => {
  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <motion.button
        initial={false}
        animate={active ? "open" : "closed"}
        onClick={() => setActive((pv) => !pv)}
        className="relative h-14 w-14 rounded-md bg-foreground pointer-events-auto transition-colors"
      >
        <motion.span
          variants={VARIANTS.top}
          className="absolute h-1 w-10 bg-background"
          style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
        />
        <motion.span
          variants={VARIANTS.middle}
          className="absolute h-1 w-10 bg-background"
          style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
        />
        <motion.span
          variants={VARIANTS.bottom}
          className="absolute h-1 w-5 bg-background"
          style={{
            x: "-50%",
            y: "50%",
            bottom: "35%",
            left: "calc(50% + 1.25rem)",
          }}
        />
      </motion.button>
    </MotionConfig>
  );
};

export default AnimatedHamburgerButton;
