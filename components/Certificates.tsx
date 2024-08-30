"use client";
import useSectionInView from "@/hooks/useSectionInView";
import React from "react";
import SectionWrapper from "./ui/SectionWrapper";
import Heading from "./ui/Heading";
import CertificatesAccordion from "./ui/CertificatesAccordion";

const Certificates = () => {
  const { ref } = useSectionInView("Certifications", 0.2);
  return (
    <SectionWrapper ref={ref} id="certifications">
      <Heading>Certifications</Heading>
      <CertificatesAccordion />
    </SectionWrapper>
  );
};

export default Certificates;
