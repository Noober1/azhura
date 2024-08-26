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
}

export const stripPattern = (color: string) =>
  `data:image/svg+xml,%3Csvg version='1.0' xmlns='http://www.w3.org/2000/svg' width='250.000000pt' height='250.000000pt' viewBox='0 0 250.000000 250.000000' preserveAspectRatio='xMidYMid meet'%0A%3E%3Cg transform='translate(0.000000,250.000000) scale(0.100000,-0.100000)' fill='%23${color}' stroke='none' %3E%3Cpath d='M1290 1295 l1205 -1205 3 312 2 313 -892 892 -893 893 -315 0 -315 0%0A1205 -1205z' /%3E%3Cpath d='M1910 1915 l585 -585 3 312 2 313 -272 272 -273 273 -315 0 -315 0%0A585 -585z' /%3E%3Cpath d='M0 1640 l0 -315 663 -663 662 -662 313 2 312 3 -975 975 -975 975 0%0A-315z' /%3E%3Cpath d='M0 400 l0 -316 43 -42 43 -42 312 2 312 3 -355 355 -355 355 0 -315z' /%3E%3C/g%3E%3C/svg%3E%0A`;
