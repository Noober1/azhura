"use client";

import React, { useEffect, useRef, useState } from "react";
import Timeline, { Handles } from "@/components/ui/layout/Timeline";
import useWindowDimensions from "@/hooks/useWindowDimention";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

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
  const months = generateMonths(new Date("January 2012"), new Date());
  const { width } = useWindowDimensions();
  const parentRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: parentRef,
  });
  const springed = useSpring(scrollYProgress);

  const timelineRef = useRef<Handles>(null);

  const scroll = useTransform(
    springed,
    [0, 1],
    [0, timelineRef.current ? timelineRef.current.fullScroll - width : 0]
  );

  return (
    <motion.div ref={parentRef} className="w-full h-[350vh] relative">
      <div className="sticky flex flex-col justify-center top-0 overflow-auto ">
        <h3 className="text-center text-3xl my-20 font-['Inpin']">
          My life my adventure
        </h3>
        <Timeline ref={timelineRef} scroll={scroll} months={months} />
      </div>
    </motion.div>
  );
};

export default MyExperience;
