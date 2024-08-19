"use client";
import "./style.css";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import React, { useRef, useState } from "react";
import StickyContainer from "./StickyContainer";
import AboutMe from "./AboutMe";

interface SectionName {
  text: "About me" | "Entah" | "Kenapa";
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
            color: "secondary",
            text: "Entah",
          })
        }
        viewport={{
          margin: "-80% 0% -80% 0%",
        }}
      >
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores
          nostrum neque eos incidunt saepe. Explicabo doloribus libero corrupti
          saepe unde, quidem ad id? Nemo laboriosam eius atque, tempora
          voluptatibus consectetur optio a nesciunt necessitatibus voluptate
          delectus unde nam animi iusto totam explicabo aliquid sit quod
          officia! Molestiae veritatis officia quaerat non? Laboriosam veritatis
          recusandae ipsa voluptatibus, ipsam eius iure delectus culpa velit
          dolores obcaecati quo molestiae autem molestias placeat cumque
          adipisci libero? Odio optio quas, dignissimos quidem aperiam tempore,
          quod perspiciatis debitis nulla tenetur, accusantium beatae eius nisi.
          Officiis omnis obcaecati molestiae praesentium nobis neque quam
          commodi vitae! Repudiandae, sed?
        </p>
      </motion.div>
      <motion.div
        className="section"
        onViewportEnter={() =>
          setSection({
            color: "warning",
            text: "Kenapa",
          })
        }
        viewport={{
          margin: "-80% 0% -80% 0%",
        }}
      >
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
          accusamus eius eos perferendis facere totam magnam voluptas soluta
          inventore. Quisquam tenetur porro quis distinctio minima atque
          perspiciatis iure maiores repellendus ratione. Omnis sit distinctio
          vel, magni eligendi tempora maiores tempore neque itaque odio quaerat
          ratione eveniet, quae sapiente ut accusamus quam debitis praesentium
          voluptate repudiandae soluta repellat obcaecati architecto corrupti!
          Facere, atque. Sunt dolor qui repellendus nihil voluptatem cum,
          recusandae eos corporis quaerat iste neque voluptas necessitatibus,
          sint velit. Voluptas officia similique explicabo architecto vel fuga a
          fugiat quos maxime deleniti. Repellendus, voluptatibus nobis culpa
          sequi dolor eaque soluta dolorem!
        </p>
      </motion.div>
      <StickyContainer
        minimize={transformSticky}
        currentSection={currentSection}
      />
    </section>
  );
};

export default TrackScroll;
