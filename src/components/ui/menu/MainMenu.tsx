"use client";
import { AnimatePresence, motion, Variants } from "framer-motion";
import WaveStagger from "../WaveStagger";
import styles from "./MainMenu.module.css";
import React, { useState } from "react";
import AnimatedHamburgerButton from "../button/HamburgerButton";
import { twMerge } from "tailwind-merge";
import TopbarMenu from "./TopbarMenu";

const variants: Variants = {
  topBarInitial: {
    top: -30,
  },
  topBarAnimate: {
    top: 0,
  },
  menuButtonInitial: {
    x: -70,
  },
  menuButtonAnimate: {
    x: 0,
  },
};

const MainMenu = ({ modeTop }: { modeTop?: boolean }) => {
  const [isActive, setisActive] = useState(false);
  return (
    <>
      <AnimatePresence>
        {modeTop && (
          <motion.div
            exit="topBarInitial"
            initial="topBarInitial"
            animate="topBarAnimate"
            transition={{
              delay: 0.25,
              duration: 0.25,
            }}
            variants={variants}
            className="pointer-events-auto fixed top-0 left-0 right-0 flex justify-center"
          >
            <TopbarMenu />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div className={twMerge(styles.main, isActive && styles.active)}>
        <AnimatePresence>
          {!modeTop && (
            <motion.div
              transition={{
                delay: 0.25,
                duration: 0.25,
              }}
              exit="menuButtonInitial"
              initial="menuButtonInitial"
              animate="menuButtonAnimate"
              variants={variants}
              className="p-2"
            >
              <AnimatedHamburgerButton
                active={isActive}
                setActive={setisActive}
              />
            </motion.div>
          )}
        </AnimatePresence>
        <WaveStagger showMenu={isActive} />
      </motion.div>
    </>
  );
};

export default MainMenu;
