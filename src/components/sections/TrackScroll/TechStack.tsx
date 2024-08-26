import SubtitleText from "@/components/ui/text/SubtitleText";
import styled from "./TechStack.module.css";
import IconMarquee, {
  IconMarqueeItems,
} from "@/components/ui/layout/IconMarquee";
import { TechIconsDark, TechIconsLight } from "@/lib/constants";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import React from "react";

const darkIcons = Object.entries(TechIconsDark);
const lightIcon = Object.entries(TechIconsLight);

const TechStack = () => {
  const { theme } = useTheme();
  const items: IconMarqueeItems = [
    ...(theme === "dark" ? darkIcons : lightIcon),
  ].map(([item, value]) => ({
    icon: value,
    name: item,
  }));

  return (
    <div className={styled.main}>
      <SubtitleText as="h3" className="mb-5">
        The tech stack I typically use in development
      </SubtitleText>
      <IconMarquee items={items} />
    </div>
  );
};

export default dynamic(() => Promise.resolve(TechStack), {
  ssr: false,
});
