import { Tooltip } from "@/components/ui/Tooltip";
import { socialMedia } from "@/lib/constants";
import { Button, Link } from "@nextui-org/react";
import { motion, Variants } from "framer-motion";
import React from "react";

const variants: Variants = {
  initial: {
    opacity: 0,
    translateY: 30,
  },
  onView: (index) => ({
    opacity: 1,
    translateY: 0,
    transition: {
      delay: index * 0.1,
    },
  }),
  onHover: {
    translateY: [0, -5, 0],
    transition: {
      duration: 0.25,
    },
  },
};

interface SocialMediaIconsProps {
  tooltipPlacement?: "top" | "bottom";
  withoutTooltip?: boolean;
}

const SocialMediaIcons = ({
  tooltipPlacement = "bottom",
  withoutTooltip,
}: SocialMediaIconsProps) => {
  return (
    <div className="flex gap-2">
      {socialMedia.map((item, index) => {
        const icon = (
          <motion.div
            variants={variants}
            custom={index}
            key={index}
            initial="initial"
            whileInView="onView"
            whileHover="onHover"
          >
            <Button
              as={Link}
              target="_blank"
              href={item.link}
              key={index}
              isIconOnly
              variant="light"
              size="lg"
              aria-label={item.label}
            >
              {item.icon({ size: 30 })}
            </Button>
          </motion.div>
        );

        return withoutTooltip ? (
          icon
        ) : (
          <Tooltip
            as={motion.div}
            key={index}
            title={item.label}
            body={item.desc}
            placement={tooltipPlacement}
          >
            {icon}
          </Tooltip>
        );
      })}
    </div>
  );
};

export default SocialMediaIcons;
