import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CertificatesData } from "@/constants/data";

const CertificatesAccordion = () => {
  return (
    <Accordion
      type="single"
      collapsible
      className="pointer-events-auto mt-8 w-full max-w-[30rem] pr-8 sm:max-w-none sm:pr-0"
    >
      {CertificatesData.map((service) => (
        <div key={service.id}>
          <AccordionItem value={service.item} className="mb-4 flex flex-col ">
            <AccordionTrigger className="text-xl sm:text-2xl ">
              <div className="flex items-center gap-2 sm:gap-5">
                <span className=" text-2xl text-slate-400 ">{service.id}.</span>{" "}
                {service.heading}
              </div>
            </AccordionTrigger>
            <AccordionContent className="mt-2 text-justify text-base sm:text-lg md:text-xl">
              {service.description}
              <div className="mt-2 font-mono">Issued by: {service.issuer}</div>
            </AccordionContent>
          </AccordionItem>
        </div>
      ))}
    </Accordion>
  );
};

export default CertificatesAccordion;
