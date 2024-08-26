import IconMarquee, {
  IconMarqueeItems,
} from "@/components/ui/layout/IconMarquee";
import { TechIconsDark } from "@/lib/constants";
import React from "react";

const items: IconMarqueeItems = [
  {
    name: "a",
    icon: TechIconsDark.NodeJS,
  },
  {
    name: "b",
    icon: TechIconsDark.ReactJS,
  },
  {
    name: "c",
    icon: TechIconsDark.ExpressJS,
  },
  {
    name: "d",
    icon: TechIconsDark.MongoDB,
  },
  {
    name: "e",
    icon: TechIconsDark.Bootstrap,
  },
  {
    name: "f",
    icon: TechIconsDark.MaterialUI,
  },
  {
    name: "f",
    icon: TechIconsDark.TailwindCSS,
  },
  {
    name: "f",
    icon: TechIconsDark.ReactQuery,
  },
  {
    name: "f",
    icon: TechIconsDark.Redux,
  },
  {
    name: "f",
    icon: TechIconsDark.Typescript,
  },
];

const page = () => {
  return <IconMarquee items={items} />;
};

export default page;
