"use client";

import styles from "@/components/ui/button/AzhuraButton.module.css";
import { forwardRef, ReactNode, Ref } from "react";
import { Ripple, Spinner } from "@nextui-org/react";
import { ButtonProps, useButton } from "@nextui-org/button";
import { twMerge } from "tailwind-merge";
import { HTMLMotionProps, motion } from "framer-motion";
import Magnetic from "../Magnetic";

interface AzhuraButtonProps extends ButtonProps {
  children: ReactNode;
  className?: string;
}

const AzhuraButton = forwardRef(
  ({ className, ...props }: AzhuraButtonProps, ref: Ref<HTMLButtonElement>) => {
    const {
      domRef,
      children,
      spinnerSize,
      spinner = <Spinner color="current" size={spinnerSize} />,
      spinnerPlacement,
      startContent,
      endContent,
      isLoading,
      disableRipple,
      getButtonProps,
      getRippleProps,
    } = useButton({
      ref,
      ...props,
    });

    const { ripples, onClear } = getRippleProps();

    const {
      color,
      onAnimationStart,
      onDragStart,
      onDragEnd,
      onDrag,
      ...newProps
    } = getButtonProps();

    return (
      <Magnetic>
        <motion.button
          ref={domRef}
          {...newProps}
          className={twMerge(styles.button, className)}
        >
          {startContent}
          {isLoading && spinnerPlacement === "start" && spinner}
          {children}
          {isLoading && spinnerPlacement === "end" && spinner}
          {endContent}
          {!disableRipple && (
            <div className={styles.rippleWrapper}>
              <Ripple ripples={ripples} onClear={onClear} />
            </div>
          )}
        </motion.button>
      </Magnetic>
    );
  }
);

AzhuraButton.displayName = "Azhura Button";

export default AzhuraButton;
