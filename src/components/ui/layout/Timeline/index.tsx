"use client";

import { motion, MotionValue, useMotionValueEvent } from "framer-motion";
import styles from "./Timeline.module.css";
import {
  forwardRef,
  ReactNode,
  Ref,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import TextSideScroll from "../../text/TextSideScroll";
import { twMerge } from "tailwind-merge";
import { stripPattern } from "@/lib/constants";
import { useTheme } from "next-themes";

interface TimelineProps {
  months: string[];
  scroll: MotionValue<number>;
}

export interface Handles extends Partial<HTMLDivElement> {
  fullScroll: number;
}

interface ItemProps {
  colSpan?: number;
  className?: string;
  title: string;
  date: string;
  description: ReactNode | string;
  backgroundText?: string;
  arrowPosition?: "top" | "bottom";
}

const Item = ({
  colSpan,
  className,
  title,
  date,
  description,
  arrowPosition = "bottom",
  backgroundText = "Education",
}: ItemProps) => {
  const [backgroundValue, sestBackgroundValue] = useState<string>(
    stripPattern("000")
  );
  const { theme } = useTheme();
  useEffect(() => {
    sestBackgroundValue(stripPattern(theme === "dark" ? "FFF" : "000"));
  }, [theme]);

  return (
    <td colSpan={colSpan} className={styles.itemWrapper}>
      <div
        className={twMerge(styles.textBackground, styles[arrowPosition])}
        style={{
          backgroundImage: `url("${backgroundValue}")`,
        }}
      >
        <TextSideScroll
          className="[&>div>span]:text-[8.6rem] [&>div>span]:text-primary/50 h-full"
          baseVelocity={4}
        >
          {backgroundText}
        </TextSideScroll>
      </div>
      <motion.div className={twMerge(styles.textWrapper, className)}>
        <section>
          <header>
            <h3>{title}</h3>
            <time>{date}</time>
          </header>
          <p>{description}</p>
        </section>
      </motion.div>
    </td>
  );
};

const Lines = ({ data }: { data: string[] }) => {
  return (
    <>
      {data.map((item, index) => {
        const label = item.split(" ");
        return (
          <td key={index}>
            <div>
              {label[0] === "January" ? (
                <label className={styles.yearLabel}>{label[1]}</label>
              ) : (
                <>
                  <label className={styles.dots} />
                  <div className={styles.monthLabel}>
                    {label[0].substring(0, 3)}
                  </div>
                </>
              )}
            </div>
          </td>
        );
      })}
    </>
  );
};

interface TimelineContent {
  colspan: number;
  content?: Omit<ItemProps, "colSpan">;
}

const educationItems: TimelineContent[] = [
  {
    colspan: 6,
  },
  {
    colspan: 12 * 3 - 1,
    content: {
      title: "SMK Bina Taruna Jalancagak",
      date: "July 2012 - June 2015",
      description: "Teknik Komputer dan Jaringan",
    },
  },
  { colspan: 3 },
  {
    colspan: 12 * 6 + 3,
    content: {
      title: "STMIK Subang",
      date: "September 2017 - 2021",
      description: "Information System (SI)",
    },
  },
];

const careerTimeline: TimelineContent[] = [
  {
    colspan: 42,
    content: {
      title: "Part-time",
      date: "January 2012 - June 2015",
      description: "Life as a blogger",
    },
  },
  { colspan: 8 },
  {
    colspan: 12 * 6 + 4,
    content: {
      title: "SMK Bina Taruna Jalancagak",
      date: "January 2012 - June 2015",
      description: "Lab assistance and administrator",
    },
  },
  { colspan: 0 },
  {
    colspan: 999,
    content: {
      title: "Freelancer",
      date: "August 2022 - Present",
      description: "Full-stack developer",
    },
  },
];

const TimelineContent = ({
  data,
  arrowPosition,
  backgroundText,
}: {
  data: TimelineContent[];
  arrowPosition: "top" | "bottom";
  backgroundText?: string;
}) => (
  <>
    {data.map((item, index) =>
      item.content ? (
        <Item
          arrowPosition={arrowPosition}
          key={index}
          backgroundText={backgroundText}
          colSpan={item.colspan}
          {...item.content}
        />
      ) : (
        <td key={index} colSpan={item.colspan} />
      )
    )}
  </>
);

const Timeline = ({ months, scroll }: TimelineProps, ref: Ref<Handles>) => {
  const entah = useRef<HTMLDivElement>(null);

  useMotionValueEvent(scroll, "change", (value) => {
    if (entah.current) {
      entah.current.scrollLeft = value;
    }
  });

  useImperativeHandle(ref, () => ({
    fullScroll: entah.current ? entah.current.scrollWidth : 0,
  }));

  return (
    <motion.div ref={entah} className={styles.main}>
      <table>
        <tbody>
          <tr className={styles.education}>
            <TimelineContent arrowPosition="bottom" data={educationItems} />
          </tr>
          <tr className={styles.line}>
            <Lines data={months} />
          </tr>
          <tr className={styles.education}>
            <TimelineContent
              backgroundText="career"
              arrowPosition="top"
              data={careerTimeline}
            />
          </tr>
        </tbody>
      </table>
    </motion.div>
  );
};

export default forwardRef(Timeline);
