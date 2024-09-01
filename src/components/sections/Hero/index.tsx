"use client";

import TextSideScroll from "@/components/ui/text/TextSideScroll";
import styles from "@/components/sections/Hero/Hero.module.css";
import heroCover from "@/images/hero.jpg";
import {
  motion,
  useAnimation,
  useMotionValueEvent,
  useScroll,
  useTransform,
  Variants,
} from "framer-motion";
import { useRef, useState } from "react";
import SocialMediaIcons from "./SocialMediaIcons";
import TitleText from "@/components/ui/text/TitleText";
import { twMerge } from "tailwind-merge";

const helloVariants: Variants = {
  initial: {
    translateY: 30,
  },
  animate: {
    translateY: 0,
    transition: {
      type: "spring",
      duration: 0.25,
    },
  },
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const HeroSection = () => {
  const parentRef = useRef<HTMLDivElement>(null);
  const helloTextControl = useAnimation();
  const [showSocialMedia, setshowSocialMedia] = useState<boolean>(false);

  const { scrollYProgress } = useScroll({
    target: parentRef,
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.6]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const opacity = useTransform(scrollYProgress, [0, 0.6, 1], [0.75, 0.75, 0]);
  const backgroundOpacity = useTransform(scrollYProgress, [0, 1], [0.6, 0.1]);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    if (value > 0.75) {
      helloTextControl.start("animate");
    } else {
      helloTextControl.start("initial");
    }

    setshowSocialMedia(value > 0.75);
  });

  return (
    <div className={styles.hero} ref={parentRef}>
      <div className={styles.wrapper}>
        <div className={styles.backgroundWrapper}>
          <motion.div
            className={styles.background}
            style={{
              backgroundImage: `url(${heroCover.src})`,
              scale,
              rotate,
              opacity: backgroundOpacity,
            }}
          />
        </div>
        <div className={styles.brandWrapper}>
          <motion.div className={styles.brand}>
            <motion.div className={twMerge(styles.helloText, "lg:ml-10")}>
              <motion.span
                animate={helloTextControl}
                variants={helloVariants}
                transition={{
                  type: "spring",
                  duration: 0.5,
                }}
                initial="initial"
              >
                <span className="text-danger">Hello</span>, i am
              </motion.span>
            </motion.div>
            <TitleText progress={scrollYProgress} />
            <motion.div className={styles.helloText}>
              <motion.span
                className="lg:mr-10 text-right lg:!text-xl"
                animate={helloTextControl}
                variants={helloVariants}
                transition={{
                  type: "spring",
                  duration: 0.5,
                }}
                initial="initial"
              >
                A <span className="text-primary">full-stack</span> developer
              </motion.span>
            </motion.div>
          </motion.div>
          <motion.div
            style={{
              opacity: showSocialMedia ? 1 : 0,
              pointerEvents: showSocialMedia ? "all" : "none",
            }}
            className="transition-all duration-250"
          >
            <SocialMediaIcons />
          </motion.div>
        </div>
      </div>

      <motion.div className={styles.scrollBottomWrapper} style={{ opacity }}>
        <TextSideScroll baseVelocity={-5} className={styles.scrollBottomText}>
          Scroll to bottom
        </TextSideScroll>
      </motion.div>
    </div>
  );
};

export default HeroSection;
