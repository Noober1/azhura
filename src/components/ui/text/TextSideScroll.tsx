import {
  useMotionValue,
  useScroll,
  useVelocity,
  useSpring,
  useTransform,
  useAnimationFrame,
  motion,
  wrap,
} from "framer-motion";
import React, { ReactNode, useRef } from "react";
import { twMerge } from "tailwind-merge";
import styles from "./TextSideScroll.module.css";

interface ParallaxProps {
  children: string | ReactNode;
  baseVelocity: number;
  repeat?: number;
  className?: string;
  hoverEffect?: boolean;
  enableScrollDirectionChange?: boolean;
}

function TextSideScroll({
  children,
  baseVelocity = 100,
  repeat = 5,
  className,
  hoverEffect = true,
  enableScrollDirectionChange = true,
}: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, (v) => `${wrap(-20, 0, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (enableScrollDirectionChange) {
      if (velocityFactor.get() < 0) {
        directionFactor.current = -1;
      } else if (velocityFactor.get() > 0) {
        directionFactor.current = 1;
      }
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  /**
   * The number of times to repeat the child text should be dynamically calculated
   * based on the size of the text and viewport. Likewise, the x motion value is
   * currently wrapped between -20 and -45% - this 25% is derived from the fact
   * we have four children (100% / 4). This would also want deriving from the
   * dynamically generated number of children.
   */
  return (
    <div className={twMerge(styles.parallax, className)}>
      <motion.div
        className={styles.scroller}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        viewport={{
          once: true,
        }}
        style={{ x }}
      >
        {[...new Array(repeat)].map((v, i) => (
          <span key={i}>
            {hoverEffect
              ? typeof children === "string"
                ? children
                    .split(" ")
                    .map((item, index) => <div key={index}>{item}</div>)
                : children
              : children}
            <span> </span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default TextSideScroll;
