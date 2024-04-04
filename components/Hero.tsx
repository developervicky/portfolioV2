"use client";
import useSectionInView from "@/hooks/useSectionInView";
import React from "react";
import SectionWrapper from "./ui/SectionWrapper";

const Hero = () => {
  const { ref } = useSectionInView("Home");
  return (
    <SectionWrapper ref={ref} id="home" className="">
      <h1 className="text-left text-[70px] sm:text-[90px]">Hey,</h1>
      <h2 className="text-[28px] sm:text-[30px] md:text-[44px] lg:text-[60px] xl:text-[70px]">
        I&apos;m Vignesh Kathiresan.
      </h2>
      <p className="mt-10 w-full max-w-[50rem] text-[28px] sm:text-[30px] md:text-[40px] lg:text-[45px] xl:text-[50px]">
        I&apos;m a Software Full Stack Developer working remotely from India.
      </p>
    </SectionWrapper>
  );
};

export default Hero;
