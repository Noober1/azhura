import IconMarquee, {
  IconMarqueeItems,
} from "@/components/ui/layout/IconMarquee";
import { IconName } from "@/lib/constants";
import React from "react";

const items: IconMarqueeItems = [
  {
    name: "a",
    icon: IconName.NodeJS,
  },
  {
    name: "b",
    icon: IconName.ReactJS,
  },
  {
    name: "c",
    icon: IconName.ExpressJS,
  },
  {
    name: "d",
    icon: IconName.MongoDB,
  },
  {
    name: "e",
    icon: IconName.Bootstrap,
  },
  {
    name: "f",
    icon: IconName.MaterialUI,
  },
  {
    name: "f",
    icon: IconName.TailwindCSS,
  },
  {
    name: "f",
    icon: IconName.ReactQuery,
  },
  {
    name: "f",
    icon: IconName.Redux,
  },
  {
    name: "f",
    icon: IconName.Typescript,
  },
];

const page = () => {
  return <IconMarquee items={items} />;
};

export default page;
