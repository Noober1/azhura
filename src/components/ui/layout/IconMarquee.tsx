"use client";

import styles from "./IconMarquee.module.css";
import { motion, Variants } from "framer-motion";
import React, { useRef } from "react";
import Magnetic from "../Magnetic";

const ITEM_WIDTH = 7;

interface Items {
  name: string;
  icon: string;
}

export type IconMarqueeItems = Items[];

const IconMarquee = ({ items }: { items: Items[] }) => {
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
