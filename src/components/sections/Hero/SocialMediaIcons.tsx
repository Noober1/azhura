import { Tooltip } from "@/components/ui/Tooltip";
import { Button, Link } from "@nextui-org/react";
import { motion, Variants } from "framer-motion";
import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaGithub,
  FaSteam,
  FaLinkedin,
} from "react-icons/fa6";
import { IconType } from "react-icons/lib";
import { MdEmail } from "react-icons/md";

interface Icons {
  label: string;
  desc: string;
  icon: IconType;
  link: string;
}

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

const socialMedia: Icons[] = [
  {
    label: "Facebook",
    icon: FaFacebook,
    link: "https://fb.me/ruhiyatna.cucu",
    desc: "Add me on Facebook",
  },
  {
    label: "Twitter",
    icon: FaTwitter,
    link: "https://x.com/cybersnatural",
    desc: "Follow me on Twitter",
  },
  {
    label: "GitHub",
    icon: FaGithub,
    link: "https://github.com/Noober1/",
    desc: "You can see my projects on my GitHub profile",
  },
  {
    label: "Email",
    icon: MdEmail,
    link: "mailto:cucu@ruhiyatna.id",
    desc: "You have something to discuss? Reach me by email",
  },
  {
    label: "LinkedIn",
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/cucu-ruhiyatna/",
    desc: "View my LinkedIn profile",
  },
];

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
