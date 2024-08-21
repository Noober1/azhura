"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./ScrollToSide.module.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { twMerge } from "tailwind-merge";
import useWindowDimensions from "@/hooks/useWindowDimention";
import { StaticImageData } from "next/image";
import ThumbnailCard from "@/components/ui/layout/ThumbnailCard";
import TextSplitBouncing from "../text/TextSplitBouncing";
import { Image } from "@nextui-org/react";

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
  hoverCallBack?: (imageSrc: string) => void;
}

const ScrollToSide = ({
  items,
  title,
  description,
  hoverCallBack,
}: ScrollToSideProps) => {
  const [currentImage, setcurrentImage] = useState<HorizontalScrollItem>(
    items[0]
  );
  const { width } = useWindowDimensions();
  const parentRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: parentRef,
  });

  const scrollItem = useTransform(
    scrollYProgress,
    [0, 1],
    ["0px", ITEM_WIDTH * items.length * -1 + width + "px"]
  );

  const handleHoverThumbnail = (item: HorizontalScrollItem) => {
    if (hoverCallBack) {
      hoverCallBack(item.image.src);
    }
    setcurrentImage(item);
  };

  return (
    <section
      ref={parentRef}
      className={styles.scrollToSide}
      style={{
        height: PARENT_HEIGHT,
      }}
    >
      <div className={styles.contentWrapper}>
        <div className={styles.backgroundImage}>
          <Image
            key={currentImage.title}
            as={motion.img}
            src={currentImage.image.src}
            alt={currentImage.title}
          />
        </div>
        <div className={styles.title}>
          <h3 className="hidden">{title}</h3>
          <TextSplitBouncing className={styles.bounce}>
            {title}
          </TextSplitBouncing>
          <p>{description}</p>
        </div>
        <div className={styles.scrollWrapper}>
          <motion.div
            className={styles.itemWrapper}
            style={{
              translateX: scrollItem,
            }}
          >
            {items.map((item, index) => (
              <motion.div
                onMouseEnter={() => handleHoverThumbnail(item)}
                key={index}
                style={{ width: ITEM_WIDTH }}
                className={twMerge(styles.item)}
              >
                <ThumbnailCard key={index} {...item} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ScrollToSide;
