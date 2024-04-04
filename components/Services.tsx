"use client";
import useSectionInView from "@/hooks/useSectionInView";
import React from "react";
import SectionWrapper from "./ui/SectionWrapper";
import Heading from "./ui/Heading";
import ServicesAccordion from "./ui/ServicesAccordion";

const Services = () => {
  const { ref } = useSectionInView("Services", 0.2);
  return (
    <SectionWrapper ref={ref} id="services">
      <Heading>Services</Heading>
      <ServicesAccordion />
    </SectionWrapper>
  );
};

export default Services;
