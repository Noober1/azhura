"use client";

import ScrollToSide, {
  HorizontalScrollItem,
} from "@/components/ui/layout/ScrollToSide";

import photo1 from "@/images/photo1.jpg";
import photo2 from "@/images/photo2.jpg";
import photo3 from "@/images/photo3.jpg";
import photo4 from "@/images/photo4.jpg";
import photo5 from "@/images/photo5.jpg";
import { TechIconsDark } from "@/lib/constants";

const horizontalScrollItem: HorizontalScrollItem[] = [
  {
    title: "PSB Bintar",
    description:
      "Portal page of Online student registration system SMK Bina Taruna Jalancagak",
    image: photo1,
    website: "https://psb.binataruna.sch.id",
    repoLink: "https://github.com/Noober1/new-psb",
    techStack: [
      { name: "Next.js", iconName: TechIconsDark.NextJS },
      { name: "React", iconName: TechIconsDark.ReactJS },
      { name: "Typescript", iconName: TechIconsDark.Typescript },
      { name: "Material UI", iconName: TechIconsDark.MaterialUI },
      { name: "React Query", iconName: TechIconsDark.ReactQuery },
      { name: "Redux", iconName: TechIconsDark.Redux },
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
      { name: "Next.js", iconName: TechIconsDark.NextJS },
      { name: "React", iconName: TechIconsDark.ReactJS },
      { name: "Prisma.js", iconName: TechIconsDark.PrismaJS },
      { name: "Typescript", iconName: TechIconsDark.Typescript },
      { name: "Material UI", iconName: TechIconsDark.MaterialUI },
      { name: "Redux", iconName: TechIconsDark.Redux },
      { name: "React Query", iconName: TechIconsDark.ReactQuery },
      { name: "Tailwind CSS", iconName: TechIconsDark.TailwindCSS },
    ],
  },
  {
    title: "Bintar Homepage",
    description: "Personal homepage of SMK Bina Taruna Jalancagak",
    image: photo3,
    website: "https://smk.binataruna.sch.id",
    repoLink: "https://github.com/Noober1/bintar-homepage",
    techStack: [
      { name: "React", iconName: TechIconsDark.ReactJS },
      { name: "Material UI", iconName: TechIconsDark.MaterialUI },
    ],
  },
  {
    title: "CeBeTeeS",
    description:
      "CBT is a software application designed for computer-based test. The integration of web socket technology enables real-time, interactive testing experiences.",
    image: photo4,
    techStack: [
      { name: "Node.js", iconName: TechIconsDark.NodeJS },
      { name: "Express.js", iconName: TechIconsDark.ExpressJS },
      { name: "MongoDB", iconName: TechIconsDark.MongoDB },
      { name: "Bootstrap", iconName: TechIconsDark.Bootstrap },
    ],
  },
  {
    title: "Azhura",
    description: "My personal website (2024 version)",
    image: photo5,
    techStack: [
      { name: "Node.js", iconName: TechIconsDark.NodeJS },
      { name: "MySql", iconName: TechIconsDark.MySql },
      { name: "React.JS", iconName: TechIconsDark.ReactJS },
      { name: "Next.JS", iconName: TechIconsDark.NextJS },
      { name: "Prisma ORM", iconName: TechIconsDark.PrismaJS },
      { name: "Tailwind CSS", iconName: TechIconsDark.TailwindCSS },
      { name: "PostCSS", iconName: TechIconsDark.PostCSS },
      { name: "Framer Motion", iconName: TechIconsDark.FramerMotion },
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
