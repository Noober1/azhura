import { IconType } from "react-icons/lib";
import {
  FaFacebook,
  FaTwitter,
  FaGithub,
  FaSteam,
  FaLinkedin,
  FaRedditAlien,
  FaInstagram,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export enum TechIconsLight {
  NodeJS = "nodejs.svg",
  MySql = "mysql.svg",
  PostgreSQL = "postgresql.svg",
  MongoDB = "mongodb.svg",
  ReactJS = "react.svg",
  ExpressJS = "expressjs.svg",
  NestJS = "nestjs.svg",
  Bootstrap = "bootstrap.svg",
  MaterialUI = "materialui.svg",
  TailwindCSS = "tailwindcss.svg",
  ReactQuery = "reactquery.svg",
  Redux = "redux.svg",
  Typescript = "typescript.svg",
  PrismaJS = "prisma.svg",
  NextJS = "nextjs_icon_dark.svg",
  ChakraUI = "chakra-ui.svg",
  FramerMotion = "framer.svg",
}

export enum TechIconsDark {
  NodeJS = "nodejs.svg",
  MySql = "mysql.svg",
  PostgreSQL = "postgresql.svg",
  MongoDB = "mongodb.svg",
  ReactJS = "react.svg",
  ExpressJS = "expressjs_dark.svg",
  NestJS = "nestjs.svg",
  Bootstrap = "bootstrap.svg",
  MaterialUI = "materialui.svg",
  TailwindCSS = "tailwindcss.svg",
  ReactQuery = "reactquery.svg",
  Redux = "redux.svg",
  Typescript = "typescript.svg",
  PrismaJS = "prisma_dark.svg",
  NextJS = "nextjs_icon_dark.svg",
  ChakraUI = "chakra-ui.svg",
  FramerMotion = "framer_dark.svg",
  PostCSS = "postcss.svg",
}

export const stripPattern = (color: string) =>
  `data:image/svg+xml,%3Csvg version='1.0' xmlns='http://www.w3.org/2000/svg' width='250.000000pt' height='250.000000pt' viewBox='0 0 250.000000 250.000000' preserveAspectRatio='xMidYMid meet'%0A%3E%3Cg transform='translate(0.000000,250.000000) scale(0.100000,-0.100000)' fill='%23${color}' stroke='none' %3E%3Cpath d='M1290 1295 l1205 -1205 3 312 2 313 -892 892 -893 893 -315 0 -315 0%0A1205 -1205z' /%3E%3Cpath d='M1910 1915 l585 -585 3 312 2 313 -272 272 -273 273 -315 0 -315 0%0A585 -585z' /%3E%3Cpath d='M0 1640 l0 -315 663 -663 662 -662 313 2 312 3 -975 975 -975 975 0%0A-315z' /%3E%3Cpath d='M0 400 l0 -316 43 -42 43 -42 312 2 312 3 -355 355 -355 355 0 -315z' /%3E%3C/g%3E%3C/svg%3E%0A`;

export interface Contact {
  label: string;
  desc: string;
  icon: IconType;
  link: string;
}

export type ContactList = Contact[];

export const socialMedia: ContactList = [
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

export const contactList: ContactList = [
  ...socialMedia,
  {
    label: "Steam",
    icon: FaSteam,
    link: "https://steamcommunity.com/id/lordazhura/",
    desc: "Wanna play together? Add me on Steam >_<",
  },
  {
    label: "Reddit",
    icon: FaRedditAlien,
    link: "https://www.reddit.com/user/lordazhura/",
    desc: "You can follow me on Reddit",
  },
  {
    label: "Instagram",
    icon: FaInstagram,
    link: "https://www.instagram.com/vulnerablev1/",
    desc: "You can follow me on Instagram",
  },
];

interface MenuList {
  label: string;
  link: string;
}

export const mainMenuList: MenuList[] = [
  { label: "Home", link: "/" },
  { label: "About", link: "/about" },
  { label: "Project", link: "project" },
  { label: "Blog", link: "/blog" },
  { label: "Contact", link: "/contact" },
];
