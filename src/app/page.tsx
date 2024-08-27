import "@/app/main.css";
import { ReactLenis } from "@/lib/lenis-scroll";
import TrackScroll from "@/components/sections/TrackScroll";
import Hero from "@/components/sections/Hero";
import LoadingScreen from "@/components/layouts/LoadingScreen";
import { Project } from "@/components/sections/Project";
import PageFooter from "@/components/ui/layout/PageFooter";
import ViewportStatistic from "@/components/tools/ViewportStatistic";

const RootPage = () => {
  return (
    <ReactLenis root options={{ lerp: 0.05, duration: 1 }}>
      <div className="max-w-[1920px] mx-auto">
        <main id="home-content" className="w-full relative">
          <Hero />
          <TrackScroll />
          <Project />

          <PageFooter />
        </main>
      </div>
      {/* <div className="fixed top-0 left-0 z-20">
        <ThemeSwitcher />
      </div> */}
      <ViewportStatistic />

      <LoadingScreen />
    </ReactLenis>
  );
};

export default RootPage;
