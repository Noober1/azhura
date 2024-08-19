import TextSideScroll from "@/components/ui/text/TextSideScroll";
import TextSplitBouncing from "@/components/ui/text/TextSplitBouncing";
import React from "react";
import SocialMediaIcons from "@/components/sections/Hero/SocialMediaIcons";
import Image from "next/image";
import profilePicture from "@/images/profile-picture.png";

const AboutMe = () => {
  return (
    <>
      <div className="text-scroll-background">
        <TextSideScroll
          className="uppercase italic text-7xl tracking-wider text-foreground dark:text-gray-500"
          hoverEffect={false}
          enableScrollDirectionChange={false}
          baseVelocity={3}
        >
          CUCU RUHIYATNA
        </TextSideScroll>
        <TextSideScroll
          className="picture"
          hoverEffect={false}
          baseVelocity={-2}
        >
          <Image
            src={profilePicture}
            alt="Azhura"
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
            width={500}
            height={300}
          />
        </TextSideScroll>
        <TextSideScroll
          className="uppercase italic text-7xl tracking-wider opacity-50 text-primary"
          hoverEffect={false}
          baseVelocity={1.5}
        >
          PROFILE
        </TextSideScroll>
      </div>
      <div className="profile-wrapper">
        <div className="profile-picture" />
        <div className="profile-text">
          <h3>
            <TextSplitBouncing viewportMargin="-75% 0% 75% 0%">
              Hi there,
            </TextSplitBouncing>
          </h3>
          <p>
            I&apos;m Cucu Ruhiyatna. A{" "}
            <em className="text-primary">full-stack dev</em> and a{" "}
            <em className="text-danger">hardcore otaku</em> through and through,
            the digital realm is where I truly belong.
          </p>
          <p className="text-secondary">
            I&apos;ve probably spent more hours staring at a screen than I care
            to admit!
          </p>
          <p>
            My dream is to become a{" "}
            <em className="text-primary">pro game developer</em> and make{" "}
            <em className="text-primary">awesome games</em> that fellow otakus
            like myself would love.
          </p>
          <p>
            If you want to say &apos;hi&apos; or maybe treat me with a glass of
            coffee? You can come to my{" "}
            <em className="text-warning">social media</em>.
          </p>
          <div className="flex justify-center lg:justify-start mt-10">
            <SocialMediaIcons tooltipPlacement="top" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
