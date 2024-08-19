"use client";

import ScrollToSide, {
  HorizontalScrollItem,
} from "@/components/ui/layout/ScrollToSide";

import photo1 from "@/images/photo1.jpg";
import photo2 from "@/images/photo2.jpg";
import photo3 from "@/images/photo3.jpg";
import photo4 from "@/images/photo4.jpg";

const horizontalScrollItem: HorizontalScrollItem[] = [
  {
    title: "bintar-psb",
    description:
      "Aplikasi Penerimaan Siswa Baru(PSB) SMK Bina Taruna Jalancagak",
    image: photo1,
    techStack: [
      { name: "Next.js", iconName: "nextjs_icon_dark.svg" },
      { name: "React", iconName: "react.svg" },
      { name: "Typescript", iconName: "typescript.svg" },
      { name: "Material UI", iconName: "materialui.svg" },
      { name: "React Query", iconName: "reactquery.svg" },
      { name: "Redux", iconName: "redux.svg" },
    ],
  },
  {
    title: "bintar-ppdb",
    description:
      "Aplikasi management Penerimaan Siswa Baru(PSB) SMK Bina Taruna Jalancagak",
    image: photo2,
    techStack: [
      { name: "Next.js", iconName: "nextjs_icon_dark.svg" },
      { name: "React", iconName: "react.svg" },
      { name: "Typescript", iconName: "typescript.svg" },
      { name: "Material UI", iconName: "materialui.svg" },
      { name: "Redux", iconName: "redux.svg" },
      { name: "React Query", iconName: "reactquery.svg" },
      { name: "Tailwind CSS", iconName: "tailwindcss.svg" },
    ],
  },
  {
    title: "bintar-homepage",
    description: "Situs web resmi SMK Bina Taruna Jalancagak",
    image: photo3,
    techStack: [
      { name: "React", iconName: "react.svg" },
      { name: "Material UI", iconName: "materialui.svg" },
    ],
  },
  {
    title: "Photo4",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti, magni?",
    image: photo4,
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
