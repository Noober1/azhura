import { StaticImageData } from "next/image";
import { Image } from "@nextui-org/react";
import React from "react";
import styles from "./ThumbnailCard.module.css";
import { motion, Variants } from "framer-motion";
import { Tooltip } from "../Tooltip";

const thumbnailVariant: Variants = {
  initial: {
    translateY: 100,
    opacity: 0,
  },
  onHover: {
    translateY: 0,
    opacity: 1,
  },
};

const techStackVariant: Variants = {
  techInitial: {
    translateY: -50,
    opacity: 0,
  },
  techOnHover: (delay) => ({
    translateY: 0,
    opacity: 1,
    transition: {
      delay: delay * 0.05,
    },
  }),
};

interface ThumbnailCardProps {
  image: StaticImageData;
  title: string;
  description: string;
  techStack?: {
    name: string;
    iconName: string;
  }[];
}

const ThumbnailCard = ({
  image,
  title,
  description,
  techStack,
}: ThumbnailCardProps) => {
  return (
    <motion.div className={styles.thumbnailCard}>
      <motion.div
        className={styles.wrapper}
        whileHover={["techOnHover", "onHover"]}
        initial={["initial", "techInitial"]}
      >
        <Image isZoomed src={image.src} alt={title} className="-z-0" />
        <div className={styles.decorative}>
          <svg viewBox="0 0 640 360">
            <path d="M640,0L0,360h640v-360" />
            <path d="M-1.000249,180l320,180L0,360L-1.000249,180Z" />
          </svg>
        </div>
        {techStack && (
          <motion.div className={styles.techStack}>
            {techStack.map((item, index) => (
              <motion.div
                variants={techStackVariant}
                custom={index}
                key={item.name}
              >
                <Tooltip title={item.name}>
                  <Image
                    src={`https://svgl.app/library/${item.iconName}`}
                    alt={item.name}
                  />
                </Tooltip>
              </motion.div>
            ))}
          </motion.div>
        )}
        <motion.article variants={thumbnailVariant} className={styles.content}>
          <motion.header>
            <h2>{title}</h2>
          </motion.header>
          <motion.p>{description}</motion.p>
        </motion.article>
      </motion.div>
    </motion.div>
  );
};

export default ThumbnailCard;
