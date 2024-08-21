import styled from "./TechStack.module.css";
import IconMarquee, {
  IconMarqueeItems,
} from "@/components/ui/layout/IconMarquee";
import { IconName } from "@/lib/constants";
import React from "react";

const items: IconMarqueeItems = Object.entries(IconName).map(
  ([item, value]) => ({
    icon: value,
    name: item,
  })
);

const TechStack = () => {
  return (
    <div className={styled.main}>
      <p>The tech stack I typically use in development</p>
      <IconMarquee items={items} />
    </div>
  );
};

export default TechStack;
