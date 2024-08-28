import "@/app/main.css";
import { ReactLenis } from "@/lib/lenis-scroll";
import TrackScroll from "@/components/sections/TrackScroll";
import Hero from "@/components/sections/Hero";
import LoadingScreen from "@/components/layouts/LoadingScreen";
import { Project } from "@/components/sections/Project";
import PageFooter from "@/components/ui/layout/PageFooter";
import { ViewportStatistic } from "@/components/tools/devtools";
import ContactSection from "@/components/ui/layout/Contact";
import { ThemeSwitcher } from "@/components/buttons/ThemeSwitcher";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cucu Ruhiyatna | Personal homepage",
  description:
    "Hello, my name is Cucu Ruhiyatna, a full-stack developer. Welcome to my personal website.",
};

const RootPage = () => {
  return (
    <ReactLenis root options={{ lerp: 0.05, duration: 1 }}>
      <div className="max-w-[1920px] mx-auto">
        <main id="home-content" className="w-full relative">
          <Hero />
          <TrackScroll />
          <Project />
          <ContactSection />
          <PageFooter />
        </main>
      </div>
      {process.env.NODE_ENV === "development" && (
        <div className="fixed top-0 left-0 right-0">
          <ViewportStatistic />
          <ThemeSwitcher />
        </div>
      )}

      <LoadingScreen />
    </ReactLenis>
  );
};

export default RootPage;
