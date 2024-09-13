"use client";

import styles from "./IconMarquee.module.css";
import { motion, Variants } from "framer-motion";
import React, { useRef } from "react";
import Magnetic from "../Magnetic";
import { twMerge } from "tailwind-merge";

const ITEM_WIDTH = 7;

interface Items {
  name: string;
  icon: string;
}

export type IconMarqueeItems = Items[];

interface IconMarqueeProps {
  items: Items[];
  className?: string;
}

const IconMarquee = ({ items, className }: IconMarqueeProps) => {
  const scrollRef = useRef(-1 * items.length * ITEM_WIDTH + "rem");
  const Items = () => {
    return (
      <>
        {items.map((item, index) => (
          <Magnetic key={index}>
            <motion.div
              className={styles.itemWrapper}
              style={{
                width: `${ITEM_WIDTH}rem`,
              }}
              key={index}
            >
              <motion.img
                draggable={false}
                width={`${ITEM_WIDTH}rem`}
                height={`${ITEM_WIDTH}rem`}
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
      translateX: scrollRef.current,
      transition: {
        bounce: false,
        ease: "linear",
        duration: 20,
        repeat: Infinity,
      },
    },
  };

  return (
    <div className={twMerge(styles.main, className)}>
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
