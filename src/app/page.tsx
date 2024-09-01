import "@/app/main.css";
import { Metadata } from "next";
import LandingPage from "./LandingPage";

export const metadata: Metadata = {
  title: "Cucu Ruhiyatna | Personal homepage",
  description:
    "Hello, my name is Cucu Ruhiyatna, a full-stack developer. Welcome to my personal website.",
};

const RootPage = () => {
  return <LandingPage />;
};

export default RootPage;
