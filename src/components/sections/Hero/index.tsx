"use client";

import TextSideScroll from "@/components/ui/text/TextSideScroll";
import styles from "@/components/sections/Hero/Hero.module.css";
import heroCover from "@/images/hero.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SocialMediaIcons from "./SocialMediaIcons";
import TextSplitBouncing from "@/components/ui/text/TextSplitBouncing";
import TopbarMenu from "@/components/ui/menu/TopbarMenu";
import TitleText from "@/components/ui/text/TitleText";

const HeroSection = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.6]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const opacity = useTransform(scrollYProgress, [0, 0.6, 1], [0.75, 0.75, 0]);
  const socialMediaOpacity = useTransform(
    scrollYProgress,
    [0, 0.75, 1],
    [0, 0, 1]
  );
  const backgroundOpacity = useTransform(scrollYProgress, [0, 1], [0.6, 0.1]);

  return (
    <div className={styles.hero} ref={targetRef}>
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
          <TopbarMenu />
          <motion.div className={styles.brand}>
            <TitleText progress={scrollYProgress} />
          </motion.div>
          <motion.div style={{ opacity: socialMediaOpacity }}>
            <SocialMediaIcons withoutTooltip />
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
