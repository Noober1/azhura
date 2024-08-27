import styles from "./SubtitleText.module.css";
import { easeInOut, motion, Variants } from "framer-motion";
import { ReactHTML, ReactNode, createElement } from "react";
import { twMerge } from "tailwind-merge";

interface SubtitleTextProps {
  children: string;
  className?: string;
  as?: keyof ReactHTML;
}

const variants: Variants = {
  initial: {
    width: "100%",
  },
  reveal: {
    width: 0,
    transition: {
      duration: 0.25,
      easings: true,
      ease: "linear",
    },
  },
};

const textVariants: Variants = {
  initial: {
    translateY: "10em",
  },
  reveal: {
    translateY: 0,
    transition: {
      delay: 0.25,
      duration: 0.25,
    },
  },
};

const SubtitleText = ({
  className,
  children,
  as = "h3",
  ...props
}: SubtitleTextProps) => {
  const TextRender = () => (
    <>
      {children}
      <span className="text-primary">.</span>
    </>
  );

  const Text = createElement(
    as,
    {
      className: "text-center mb-0 text-xl md:text-3xl font-inpin",
      ...props,
    },
    TextRender()
  );

  return (
    <motion.div
      initial="initial"
      whileInView="reveal"
      viewport={{
        margin: "0% 0% -25% 0%",
        once: true,
      }}
      className={twMerge(styles.main, className)}
      {...props}
    >
      <motion.div variants={textVariants}>{Text}</motion.div>
      <motion.span variants={variants} />
    </motion.div>
  );
};

export default SubtitleText;
