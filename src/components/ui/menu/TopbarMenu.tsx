import React from "react";

import styles from "./TopbarMenu.module.css";
import Magnetic from "../Magnetic";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { mainMenuList } from "@/lib/constants";

const variants: Variants = {
  initial: {
    opacity: 0,
    translateY: -30,
  },
  onView: (index) => ({
    opacity: 1,
    translateY: 0,
    transition: {
      delay: index * 0.1,
    },
  }),
  onHover: {
    translateY: [0, 0, 0],
    transition: {
      duration: 0.25,
    },
  },
};

const TopbarMenu = () => {
  return (
    <ul className={styles.menu}>
      {mainMenuList.map((item, index) => (
        <Magnetic key={index}>
          <motion.li
            key={index}
            custom={index}
            variants={variants}
            initial="initial"
            whileInView="onView"
          >
            <Link href={item.link}>{item.label}</Link>
          </motion.li>
        </Magnetic>
      ))}
    </ul>
  );
};

export default TopbarMenu;
