import { StaticImageData } from "next/image";
import { Image } from "@nextui-org/react";
import React from "react";
import styles from "./ThumbnailCard.module.css";
import { motion, Variants } from "framer-motion";
import { Tooltip } from "../Tooltip";
import { FaGitAlt } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import Link from "next/link";

const thumbnailVariant: Variants = {
  initial: {
    height: 0,
    opacity: 0,
  },
  onHover: {
    height: "fit-content",
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

const linkVariant: Variants = {
  initial: {
    translateX: 50,
    opacity: 0,
  },
  onHover: (delay) => ({
    translateX: 0,
    opacity: 1,
    transition: {
      delay: delay * 0.05,
      bounce: false,
    },
  }),
};

interface ThumbnailCardProps {
  image: StaticImageData;
  title: string;
  website?: string;
  repoLink?: string;
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
  repoLink,
  website,
  techStack,
}: ThumbnailCardProps) => {
  return (
    <motion.div className={styles.thumbnailCard}>
      <motion.div
        className={styles.wrapper}
        whileHover={["techOnHover", "onHover"]}
        initial={["initial", "techInitial"]}
      >
        <div className={styles.imageWrapper}>
          <Image isZoomed src={image.src} alt={title} className="z-0" />
        </div>
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
        <motion.div className={styles.thumbnailLink}>
          {repoLink && (
            <motion.span variants={linkVariant}>
              <Link target="_blank" href={repoLink}>
                <FaGitAlt className={styles.linkButton} size="100%" />
                <span className="w-14">REPO</span>
              </Link>
            </motion.span>
          )}
          {website && (
            <motion.span custom={2} variants={linkVariant}>
              <Link target="_blank" href={website}>
                <FaLink className={styles.linkButton} size="100%" />
                <span className="w-14">SITE</span>
              </Link>
            </motion.span>
          )}
        </motion.div>
        <motion.article className={styles.content}>
          <motion.header>
            <h2>{title}</h2>
          </motion.header>
          <motion.p variants={thumbnailVariant}>{description}</motion.p>
        </motion.article>
      </motion.div>
    </motion.div>
  );
};

export default ThumbnailCard;
