"use client";

import React, { useMemo, useRef, useState } from "react";
import Timeline, { Handles } from "@/components/ui/layout/Timeline";
import useWindowDimension from "@/hooks/useWindowDimension";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import SubtitleText from "@/components/ui/text/SubtitleText";

function generateMonths(startDate: Date, endDate: Date): string[] {
  if (startDate > endDate) {
    throw new Error("Start date must be earlier than end date.");
  }

  const months: string[] = [];
  let currentDate = new Date(startDate);

  while (currentDate <= endDate) {
    const monthYear = currentDate.toLocaleString("default", {
      month: "long",
      year: "numeric",
    });
    months.push(monthYear);
    currentDate.setMonth(currentDate.getMonth() + 1);
  }

  return months;
}

const MyExperience = () => {
  const [bgValue, setBgValue] = useState(0);
  const textBackgroundPercent = useMemo(() => {
    return Math.round(bgValue);
  }, [bgValue]);

  const months = generateMonths(new Date("1 January 2012"), new Date());
  const { width } = useWindowDimension();
  const parentRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: parentRef,
  });

  const timelineRef = useRef<Handles>(null);

  const scroll = useTransform(
    scrollYProgress,
    [0, 1],
    [0, timelineRef.current ? timelineRef.current.fullScroll - width : 0]
  );

  const text = useTransform(scrollYProgress, [0, 1], [0, 100]);

  useMotionValueEvent(text, "change", (value) => {
    setBgValue(value);
  });

  return (
    <motion.div ref={parentRef} className="w-full h-[350vh] relative">
      <div className="sticky flex flex-col justify-center top-0 overflow-auto items-center">
        <SubtitleText as="h3" className="my-20">
          Here is a timeline of my works and educations
        </SubtitleText>
        <div className="relative w-full h-full">
          <motion.div className="absolute inset-0 font-impact italic flex items-center justify-center opacity-25 text-[5rem] sm:text-[6rem]">
            {textBackgroundPercent}%
          </motion.div>
          <Timeline ref={timelineRef} scroll={scroll} months={months} />
        </div>
      </div>
    </motion.div>
  );
};

export default MyExperience;
