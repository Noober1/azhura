"use client";
import styles from "./TrackScroll.module.css";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import React, { useRef, useState } from "react";
import StickyContainer from "./StickyContainer";
import AboutMe from "./AboutMe";
import TechStack from "./TechStack";
import MyExperience from "./MyExperience";
import { twMerge } from "tailwind-merge";

interface SectionName {
  text: "About me" | "My Experience" | "Tech Stack";
  color: "primary" | "secondary" | "warning";
}

const sectionViewport = {
  margin: "-80% 0% -80% 0%",
};

const TrackScroll = () => {
  const ref = useRef(null);
  const [currentSection, setSection] = useState<SectionName>({
    color: "primary",
    text: "About me",
  });
  const [transformSticky, settransformSticky] = useState<boolean>(true);

  const { scrollYProgress } = useScroll({
    target: ref,
  });
  useMotionValueEvent(scrollYProgress, "change", (value) => {
    settransformSticky(value < 1);
  });

  return (
    <section ref={ref} className={styles.trackScroll}>
      <motion.div
        className={twMerge(styles.section, styles.profile)}
        onViewportEnter={(event) =>
          setSection({
            color: "primary",
            text: "About me",
          })
        }
        viewport={sectionViewport}
      >
        <AboutMe />
      </motion.div>
      <motion.div
        className={twMerge(styles.section, "!mb-0")}
        onViewportEnter={() =>
          setSection({
            color: "warning",
            text: "Tech Stack",
          })
        }
        viewport={sectionViewport}
      >
        <TechStack />
      </motion.div>

      <motion.div
        className={styles.section}
        onViewportEnter={() =>
          setSection({
            color: "secondary",
            text: "My Experience",
          })
        }
        viewport={sectionViewport}
      >
        <MyExperience />
      </motion.div>
      <StickyContainer
        minimize={transformSticky}
        currentSection={currentSection}
      />
    </section>
  );
};

export default TrackScroll;
