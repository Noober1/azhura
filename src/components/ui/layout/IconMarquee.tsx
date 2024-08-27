"use client";

import styles from "./IconMarquee.module.css";
import { motion, Variants } from "framer-motion";
import React from "react";
import Magnetic from "../Magnetic";
import { useBreakpoint } from "@/hooks/useTailwindBreakpoints";

const ITEM_WIDTH = [7, 6];

interface Items {
  name: string;
  icon: string;
}

export type IconMarqueeItems = Items[];

const IconMarquee = ({ items }: { items: Items[] }) => {
  const isDesktop = useBreakpoint("md");
  const Items = () => {
    return (
      <>
        {items.map((item, index) => (
          <Magnetic key={index}>
            <motion.div
              className={styles.itemWrapper}
              style={{
                width: `${isDesktop ? ITEM_WIDTH[0] : ITEM_WIDTH[1]}rem`,
              }}
              key={index}
            >
              <motion.img
                draggable={false}
                width={`${isDesktop ? ITEM_WIDTH[0] : ITEM_WIDTH[1]}rem`}
                height={`${isDesktop ? ITEM_WIDTH[0] : ITEM_WIDTH[1]}rem`}
                src={`https://svgl.app/library/${item.icon}`}
                alt={item.name}
              />
              <label>{item.name}</label>
            </motion.div>
          </Magnetic>
        ))}
      </>
    );
  };

  const variants: Variants = {
    initial: {
      translateX: "0%",
    },
    animate: {
      translateX:
        -1 * items.length * (isDesktop ? ITEM_WIDTH[0] : ITEM_WIDTH[1]) + "rem",
      transition: {
        bounce: false,
        ease: "linear",
        duration: 20,
        repeat: Infinity,
      },
    },
  };

  return (
    <div className={styles.main}>
      <motion.div
        animate="animate"
        className={styles.scrollWrapper}
        variants={variants}
      >
        <Items />
        <Items />
        <Items />
      </motion.div>
    </div>
  );
};

export default IconMarquee;
