import { motion, MotionStyle, Variants } from "framer-motion";
import React from "react";
import { twMerge } from "tailwind-merge";

interface TextSplitBouncingProp {
  children: string;
  delay?: number;
  className?: string;
  initDelay?: number;
  duration?: number;
  bounceHeight?: number;
  textStyle?: MotionStyle;
  viewportMargin?: string;
}

const TextSplitBouncing = ({
  children,
  delay = 0.05,
  initDelay = 0,
  className,
  duration = 0.25,
  bounceHeight = 15,
  textStyle,
  viewportMargin,
}: TextSplitBouncingProp) => {
  const variants: Variants = {
    initial: {
      translateY: -bounceHeight,
      opacity: 0,
    },
    animate: (index) => ({
      opacity: 1,
      translateY: [0, -bounceHeight, 0],
      transition: {
        duration,
        delay: initDelay + index * delay,
      },
    }),
  };

  return (
    <motion.div className={twMerge("relative", className)}>
      {children.split("").map((item, index) => {
        return (
          <motion.span
            className="inline-block whitespace-pre-wrap"
            key={children + index}
            custom={index}
            style={textStyle}
            variants={variants}
            whileInView="animate"
            initial="initial"
            animate="animate"
            viewport={{
              margin: viewportMargin,
            }}
          >
            {item}
          </motion.span>
        );
      })}
    </motion.div>
  );
};

export default TextSplitBouncing;
