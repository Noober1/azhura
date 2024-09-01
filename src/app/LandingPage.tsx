"use client";
import { ThemeSwitcher } from "@/components/buttons/ThemeSwitcher";
import LoadingScreen from "@/components/layouts/LoadingScreen";
import Hero from "@/components/sections/Hero";
import { Project } from "@/components/sections/Project";
import TrackScroll from "@/components/sections/TrackScroll";
import { ViewportStatistic } from "@/components/tools/devtools";
import ContactSection from "@/components/ui/layout/Contact";
import PageFooter from "@/components/ui/layout/PageFooter";
import MainMenu from "@/components/ui/menu/MainMenu";
import { ReactLenis } from "@/lib/lenis-scroll";
import { useMotionValueEvent, useScroll } from "framer-motion";
import React, { useRef, useState } from "react";

const LandingPage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [topMenuMode, settopMenuMode] = useState(true);
  const { scrollYProgress } = useScroll({
    target: heroRef,
  });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    settopMenuMode(value < 1);
  });

  return (
    <ReactLenis
      root
      options={{ lerp: 0.05, duration: 1, wheelMultiplier: 0.5 }}
    >
      <div className="max-w-[1920px] mx-auto">
        <main id="home-content" className="w-full relative">
          <div ref={heroRef}>
            <Hero />
          </div>
          <TrackScroll />
          <Project />
          <ContactSection />
          <PageFooter />
        </main>
      </div>
      {process.env.NODE_ENV === "development" && (
        <div className="fixed top-0 right-0">
          <ViewportStatistic />
          <ThemeSwitcher />
        </div>
      )}
      <MainMenu modeTop={topMenuMode} />
      <LoadingScreen />
    </ReactLenis>
  );
};

export default LandingPage;
