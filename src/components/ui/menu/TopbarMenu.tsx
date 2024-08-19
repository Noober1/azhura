import React from "react";

import styles from "./TopbarMenu.module.css";
import { Button } from "@nextui-org/react";
import Magnetic from "../Magnetic";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

interface MenuList {
  label: string;
  link: string;
}

const list: MenuList[] = [
  { label: "Home", link: "/" },
  { label: "About", link: "/about" },
  { label: "Project", link: "project" },
  { label: "Blog", link: "/blog" },
  { label: "Contact", link: "/contact" },
];

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
      {list.map((item, index) => (
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
