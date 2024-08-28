import styles from "./Tooltip.module.css";
import React, { ReactNode } from "react";
import { Tooltip as NextTooltip } from "@nextui-org/react";
import type { TooltipProps as NextTooltipProps } from "@nextui-org/react";
import { motion, Variants } from "framer-motion";
import TextSplitBouncing from "@/components/ui/text/TextSplitBouncing";

interface TooltipProps
  extends Omit<NextTooltipProps, "content" | "classNames"> {
  children: ReactNode;
  title: string;
  body?: string;
}

const tooltipVariants: Variants = {
  initial: {
    width: 0,
    left: "0%",
  },
  bodyInitial: {
    opacity: 0,
  },
  bodyOnView: {
    opacity: [0, 0, 0, 1],
    transition: {
      duration: 0.5,
    },
  },
  onView: {
    transition: {
      duration: 0.5,
    },
    width: ["0%", "100%", "100%", "0%"],
    left: ["0%", "0%", "0%", "100%"],
  },
};

export const Tooltip = ({ children, title, body, ...props }: TooltipProps) => {
  return (
    <NextTooltip
      closeDelay={0}
      content={
        <motion.div className={styles.tooltip}>
          <div className={styles.title}>
            <TextSplitBouncing bounceHeight={5} initDelay={0.4}>
              {title}
            </TextSplitBouncing>
          </div>
          {body && (
            <motion.div
              variants={tooltipVariants}
              animate="bodyOnView"
              className={styles.body}
            >
              {body}
            </motion.div>
          )}
          <motion.div
            className={styles.overlay}
            variants={tooltipVariants}
            initial="initial"
            animate="onView"
          />
        </motion.div>
      }
      classNames={{
        base: styles.tooltipBase,
        content: styles.tooltipContent,
      }}
      {...props}
    >
      {children}
    </NextTooltip>
  );
};
