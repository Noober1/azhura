"use client";
import "./style.css";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import React, { useRef, useState } from "react";
import StickyContainer from "./StickyContainer";
import AboutMe from "./AboutMe";
import TechStack from "./TechStack";
import MyExperience from "./MyExperience";

interface SectionName {
  text: "About me" | "My Experience" | "Tech Stack";
  color: "primary" | "secondary" | "warning";
}

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
    <section ref={ref} className="track-scroll">
      <motion.div
        className="section profile"
        onViewportEnter={(event) =>
          setSection({
            color: "primary",
            text: "About me",
          })
        }
        viewport={{
          margin: "-80% 0% -80% 0%",
        }}
      >
        <AboutMe />
      </motion.div>
      <motion.div
        className="section"
        onViewportEnter={() =>
          setSection({
            color: "warning",
            text: "Tech Stack",
          })
        }
        viewport={{
          margin: "-80% 0% -80% 0%",
        }}
      >
        <TechStack />
      </motion.div>

      <motion.div
        className="section"
        onViewportEnter={() =>
          setSection({
            color: "secondary",
            text: "My Experience",
          })
        }
        viewport={{
          margin: "-80% 0% -80% 0%",
        }}
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
