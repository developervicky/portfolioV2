"use client";
import useSectionInView from "@/hooks/useSectionInView";
import Heading from "./ui/Heading";
import SectionWrapper from "./ui/SectionWrapper";

const About = () => {
  const { ref } = useSectionInView("About", 0.2);
  // console.log(ref.toString());
  return (
    <SectionWrapper ref={ref} id="about">
      <Heading>About</Heading>
      <div className="prose mt-[2rem] w-full max-w-6xl pr-8 text-justify text-lg sm:pr-0 sm:text-xl">
        <p className="">
          Hello, I&apos;m Vignesh Kathiresan. At my high school days, when
          I&apos;ve thought of my career options. I had a conviction that I
          should have to pick career where people rely on lot. That got me to
          thinking on how much I&apos;ve been fascinated by web and data, how it
          can play a vital role in everyone&apos;s daily life that thought led
          me to give a chance to explore the web development and data science.
        </p>
        <p>
          From my Junior year, I have been developing full-stack applications on
          my own projects. My core stack is NextJS, Typescript, ReactJS, NodeJS,
          MongoDB and Figma. I am dedicated to creating user-friendly and
          visually appealing web experiences. These experiences allowed me to
          enhance my skills and stay up-to-data with the latest technologies and
          trends. Meanwhile, I have also invested my time to improve my skills
          on Data Science, started learning python and its libraries,
          participated in workshops and enrolled Data Science course program in
          MIT Institute for Data, Systems, and Society (IDSS) which led to
          assist me in tackling real world problems by analysing over eighteen
          case studies.
        </p>
        <p>
          Feel free to explore my portfolio to see through my works. If you
          would like to connect with me, the contact bar is right down, please
          don&apos;t hesitate to reach out.
        </p>
      </div>
    </SectionWrapper>
  );
};

export default About;
