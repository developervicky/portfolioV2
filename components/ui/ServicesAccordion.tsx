import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ServicesData } from "@/constants/data";



const ServicesAccordion = () => {
  return (
    <Accordion
      type="single"
      collapsible
      className="pointer-events-auto mt-8 w-full max-w-[30rem] pr-8 sm:pr-0 sm:max-w-none"
    >
      {ServicesData.map((service) => (
        <div key={service.id}>
          <AccordionItem value={service.item} className="mb-4 flex flex-col ">
            <AccordionTrigger className="text-xl sm:text-3xl ">
              <div className="flex items-end gap-3 sm:gap-5">
                <span className="text-2xl text-slate-400 sm:text-5xl">
                  {service.id}.
                </span>{" "}
                {service.heading}
              </div>
            </AccordionTrigger>
            <AccordionContent className="mt-2 text-justify text-base sm:text-lg md:text-xl">
              {service.description}
            </AccordionContent>
          </AccordionItem>
        </div>
      ))}
    </Accordion>
  );
};

export default ServicesAccordion;
