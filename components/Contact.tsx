"use client";
import useSectionInView from "@/hooks/useSectionInView";
import Heading from "./ui/Heading";
import SectionWrapper from "./ui/SectionWrapper";
import ContactForm from "./ui/ContactForm";

const Contact = () => {
  const { ref } = useSectionInView("Contact", 0.2);
  return (
    <SectionWrapper
      ref={ref}
      id="contact"
      className="!scroll-mt-[5rem] pr-4 sm:pr-0"
    >
      <Heading>Mail me</Heading>
      <ContactForm />
    </SectionWrapper>
  );
};

export default Contact;
