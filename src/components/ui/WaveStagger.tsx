"use client";
import styles from "./WaveStagger.module.css";
import useElementDimension from "@/hooks/useElementDimension";
import {
  motion,
  MotionValue,
  useAnimation,
  useMotionValue,
  useMotionValueEvent,
  useSpring,
  useTransform,
  Variants,
} from "framer-motion";
import _ from "lodash";
import NextLink from "next/link";
import React, { MouseEvent, useEffect, useRef, useState } from "react";

interface BarProps {
  isActive?: boolean;
  pointerPosition: MotionValue<number>;
  parentHeight: number;
  parentWidth: number;
  parentTop: number;
  showMenu?: boolean;
}

const Bar = ({ showMenu, ...props }: BarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const newProgress = useMotionValue(0);
  const childRect = useElementDimension(ref);
  const progress = useSpring(newProgress, {
    damping: 3,
    stiffness: 50,
  });
  const childYPos = childRect.top - props.parentTop;
  const halfOfParentWidth = (3 / 4) * props.parentWidth + 100;
  useMotionValueEvent(props.pointerPosition, "change", (latest) => {
    const newVal = _.clamp(
      latest,
      childYPos - halfOfParentWidth,
      childYPos + halfOfParentWidth
    );

    newProgress.set(newVal);
  });

  useEffect(() => {
    if (!showMenu) {
      newProgress.jump(childYPos - halfOfParentWidth);
    }
  }, [childYPos, halfOfParentWidth, newProgress, showMenu]);

  const width = useTransform(
    progress,
    [childYPos - halfOfParentWidth, childYPos, childYPos + halfOfParentWidth],
    ["15%", "100%", "15%"]
  );

  const opacity = useTransform(
    progress,
    [childYPos - halfOfParentWidth, childYPos, childYPos + halfOfParentWidth],
    [0.3, 1, 0.3]
  );

  return (
    <motion.div
      ref={ref}
      style={{
        width,
        opacity,
      }}
      initial={{
        width: 0,
      }}
      className={styles.bar}
    ></motion.div>
  );
};

interface RepeatBarProps extends BarProps {
  repeat?: number;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const RepeatBar = ({ repeat = 5, ...props }: RepeatBarProps) => (
  <>
    {[...new Array(repeat)].map((item, index) => (
      <Bar key={index} {...props} />
    ))}
  </>
);

const variants: Variants = {
  hideMenu: {
    width: "0%",
  },
  showMenu: {
    width: "100%",
  },
};

interface WaveStaggerProps {
  showMenu?: boolean;
}

const WaveStagger = ({ showMenu }: WaveStaggerProps) => {
  const showMenuControl = useAnimation();
  const parentRef = useRef<HTMLDivElement>(null);
  const pointerYPosition = useMotionValue(0);
  const [isActive, setActive] = useState(true);
  const { height, width, top } = useElementDimension(parentRef);

  const handlePointerMove = (event: MouseEvent) => {
    const { height, y } = event.currentTarget.getBoundingClientRect();
    const mouseYPos = event.clientY - y;
    const clampValue = _.clamp(mouseYPos, 0, height);
    pointerYPosition.set(clampValue);
  };

  const handlePointerEnter = () => {
    setActive(true);
  };

  const handlePointerLeave = () => {
    setActive(false);
  };

  useEffect(() => {
    showMenuControl.start(showMenu ? "showMenu" : "hideMenu");
  }, [showMenu, showMenuControl]);

  const barProps: RepeatBarProps = {
    pointerPosition: pointerYPosition,
    parentHeight: height,
    parentTop: top,
    parentWidth: width,
    showMenu,
    isActive: isActive,
  };

  return (
    <motion.div
      className={styles.main}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onPointerMove={handlePointerMove}
      ref={parentRef}
    >
      <motion.div
        initial="hideMenu"
        animate={showMenuControl}
        variants={variants}
        transition={{
          duration: 0.5,
        }}
        className={styles.wrapper}
      >
        <Bar
          pointerPosition={pointerYPosition}
          parentHeight={height}
          parentTop={top}
          parentWidth={width}
          isActive={isActive}
          showMenu={showMenu}
        />
        <div className={styles.menuItem}>
          <NextLink href="/">Home</NextLink>
        </div>
        <RepeatBar repeat={5} {...barProps} />
        <div className={styles.menuItem}>
          <NextLink href="/about">About</NextLink>
        </div>
        <RepeatBar repeat={7} {...barProps} />
        <div className={styles.menuItem}>
          <NextLink href="/project">Project</NextLink>
        </div>
        <RepeatBar repeat={3} {...barProps} />
        <div className={styles.menuItem}>
          <NextLink href="/blog">Blog</NextLink>
        </div>
        <RepeatBar repeat={3} {...barProps} />
        <div className={styles.menuItem}>
          <NextLink href="/contact">Contact</NextLink>
        </div>
        <RepeatBar repeat={4} {...barProps} />
      </motion.div>
    </motion.div>
  );
};

export default WaveStagger;
