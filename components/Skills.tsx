"use client";

import useSectionInView from "@/hooks/useSectionInView";
import Heading from "./ui/Heading";
import { skillsData } from "@/constants/data";
import SectionWrapper from "./ui/SectionWrapper";

const Skills = () => {
  const { ref } = useSectionInView("Skills", 0.2);
  return (
    <SectionWrapper ref={ref} id="skills">
      <div className="flex w-full  flex-col lg:flex-row lg:justify-between">
        <Heading>Skills</Heading>
        <p className="text-lg text-slate-500 lg:pt-16 lg:text-2xl">
          (Tools I use for my projects)
        </p>
      </div>
      <div className="mt-10 grid w-full max-w-6xl grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3 xl:grid-cols-5">
        {skillsData.map((skill) => (
          <p
            key={skill.id}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl"
          >
            {skill.name}
          </p>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;
