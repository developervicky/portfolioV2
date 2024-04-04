"use client";
import useSectionInView from "@/hooks/useSectionInView";
import React from "react";
import SectionWrapper from "./ui/SectionWrapper";
import Heading from "./ui/Heading";
import ProjectTabs from "./ui/ProjectTabs";

const Projects = () => {
  const { ref } = useSectionInView("Projects", 0.2);

  return (
    <SectionWrapper id="projects" ref={ref} className="!scroll-mt-[4rem]">
      <Heading>Projects</Heading>
      <ProjectTabs />
    </SectionWrapper>
  );
};

export default Projects;
