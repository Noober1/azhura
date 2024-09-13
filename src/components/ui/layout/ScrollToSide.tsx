"use client";

import React, { useRef } from "react";
import styles from "./ScrollToSide.module.css";
import { motion, MotionStyle, useScroll, useTransform } from "framer-motion";
import { twMerge } from "tailwind-merge";
import useWindowDimension from "@/hooks/useWindowDimension";
import { StaticImageData } from "next/image";
import ThumbnailCard from "@/components/ui/layout/ThumbnailCard";
import TextSplitBouncing from "../text/TextSplitBouncing";
import { useBreakpoint } from "@/hooks/useTailwindBreakpoints";
import SubtitleText from "../text/SubtitleText";
import TextSideScroll from "../text/TextSideScroll";
import IconMarquee, { IconMarqueeItems } from "./IconMarquee";
import { TechIconsDark } from "@/lib/constants";

const darkIcons = Object.entries(TechIconsDark);

export interface HorizontalScrollItem {
  title: string;
  description: string;
  image: StaticImageData;
  repoLink?: string;
  website?: string;
  techStack?: {
    name: string;
    iconName: string;
  }[];
}

const ITEM_WIDTH = 600;
const PARENT_HEIGHT = "250vh";

interface ScrollToSideProps {
  title: string;
  description: string;
  items: HorizontalScrollItem[];
  wrapperStyle?: MotionStyle;
  hoverCallBack?: (imageSrc: string) => void;
  wrapperClassName?: string;
}

const ScrollToSide = ({
  items,
  title,
  description,
  wrapperStyle,
  wrapperClassName,
}: ScrollToSideProps) => {
  const techItems: IconMarqueeItems = darkIcons.map(([item, value]) => ({
    icon: value,
    name: item,
  }));
  const { width } = useWindowDimension();
  const isDesktop = useBreakpoint("md");
  const parentRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: parentRef,
  });

  const scrollItem = useTransform(
    scrollYProgress,
    [0, 1],
    ["0px", ITEM_WIDTH * items.length * -1 + width + "px"]
  );

  return (
    <section
      ref={parentRef}
      className={styles.scrollToSide}
      style={{
        height: isDesktop ? PARENT_HEIGHT : undefined,
      }}
    >
      <motion.div
        className={twMerge(styles.contentWrapper, wrapperClassName)}
        style={wrapperStyle}
      >
        <div className={styles.backgroundText}>
          <TextSideScroll baseVelocity={-2}>PROJECT</TextSideScroll>
          <IconMarquee
            className="bg-foreground-100 mt-1 pointer-events-none"
            items={techItems}
          />
          <TextSideScroll baseVelocity={-2}>PROJECT</TextSideScroll>
          <IconMarquee
            className="bg-foreground-100 mt-1 pointer-events-none"
            items={techItems}
          />
          <TextSideScroll baseVelocity={0.5}>CUCU RUHIYATNA</TextSideScroll>
        </div>
        <div className={styles.title}>
          <h3 className="hidden">{title}</h3>
          <TextSplitBouncing className={styles.bounce}>
            {title}
          </TextSplitBouncing>
          <SubtitleText>{description}</SubtitleText>
        </div>
        <div className={styles.scrollWrapper}>
          <motion.div
            className={styles.itemWrapper}
            style={
              isDesktop
                ? {
                    translateX: scrollItem,
                  }
                : undefined
            }
          >
            {items.map((item, index) => (
              <motion.div
                key={index}
                style={{ width: isDesktop ? ITEM_WIDTH : undefined }}
                className={twMerge(styles.item)}
              >
                <ThumbnailCard key={index} {...item} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ScrollToSide;
