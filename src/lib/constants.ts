export enum IconName {
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

interface EducationList {
  startDate: string;
  endDate: string;
  title: string;
  description: string;
}

const educationList: EducationList[] = [
  {
    startDate: "March 2017",
    endDate: "April 2018",
    title: "Entah bootcamp",
    description: "Manakutau",
  },
  {
    startDate: "May 2018",
    endDate: "July 2018",
    title: "Coba coba",
    description: "Ya iya",
  },
  {
    startDate: "December 2018",
    endDate: "October 2019",
    title: "Coba coba",
    description: "Ya iya",
  },
];
