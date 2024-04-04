"use client";
import useSectionInView from "@/hooks/useSectionInView";
import Heading from "./ui/Heading";
import SectionWrapper from "./ui/SectionWrapper";

const Contact = () => {
  const { ref } = useSectionInView("Contact", 0.2);
  return (
    <SectionWrapper ref={ref} id="contact">
      <Heading>Mail me</Heading>
    </SectionWrapper>
  );
};

export default Contact;
