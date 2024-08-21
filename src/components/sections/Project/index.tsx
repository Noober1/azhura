"use client";

import ScrollToSide, {
  HorizontalScrollItem,
} from "@/components/ui/layout/ScrollToSide";

import photo1 from "@/images/photo1.jpg";
import photo2 from "@/images/photo2.jpg";
import photo3 from "@/images/photo3.jpg";
import photo4 from "@/images/photo4.jpg";
import { IconName } from "@/lib/constants";

const horizontalScrollItem: HorizontalScrollItem[] = [
  {
    title: "PSB Bintar",
    description:
      "Portal page of Online student registration system SMK Bina Taruna Jalancagak",
    image: photo1,
    website: "https://psb.binataruna.sch.id",
    repoLink: "https://github.com/Noober1/new-psb",
    techStack: [
      { name: "Next.js", iconName: IconName.NextJS },
      { name: "React", iconName: IconName.ReactJS },
      { name: "Typescript", iconName: IconName.Typescript },
      { name: "Material UI", iconName: IconName.MaterialUI },
      { name: "React Query", iconName: IconName.ReactQuery },
      { name: "Redux", iconName: IconName.Redux },
    ],
  },
  {
    title: "bintar-ppdb",
    website: "https://ppdb.binataruna.sch.id",
    repoLink: "https://github.com/Noober1/bintar-ppdb",
    description:
      "Online management system for the New Student Admissions SMK Bina Taruna Jalancagak",
    image: photo2,
    techStack: [
      { name: "Next.js", iconName: IconName.NextJS },
      { name: "React", iconName: IconName.ReactJS },
      { name: "Prisma.js", iconName: IconName.PrismaJS },
      { name: "Typescript", iconName: IconName.Typescript },
      { name: "Material UI", iconName: IconName.MaterialUI },
      { name: "Redux", iconName: IconName.Redux },
      { name: "React Query", iconName: IconName.ReactQuery },
      { name: "Tailwind CSS", iconName: IconName.TailwindCSS },
    ],
  },
  {
    title: "Bintar Homepage",
    description: "Personal homepage of SMK Bina Taruna Jalancagak",
    image: photo3,
    website: "https://smk.binataruna.sch.id",
    repoLink: "https://github.com/Noober1/bintar-homepage",
    techStack: [
      { name: "React", iconName: IconName.ReactJS },
      { name: "Material UI", iconName: IconName.MaterialUI },
    ],
  },
  {
    title: "CeBeTeeS",

    description:
      "CBT is a software application designed for computer-based test. The integration of web socket technology enables real-time, interactive testing experiences.",
    image: photo4,
    techStack: [
      { name: "Node.js", iconName: IconName.NodeJS },
      { name: "Express.js", iconName: IconName.ExpressJS },
      { name: "MongoDB", iconName: IconName.MongoDB },
      { name: "Bootstrap", iconName: IconName.Bootstrap },
    ],
  },
];

export const Project = () => {
  return (
    <div className="mt-10 relative">
      <ScrollToSide
        title="Project"
        description="Some project that i made so far"
        items={horizontalScrollItem}
      />
    </div>
  );
};
