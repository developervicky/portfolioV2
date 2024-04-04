import { cn } from "@/lib/utils";
import { FC, LegacyRef, ReactNode, forwardRef } from "react";

interface SectionWrapperProp {
  children: ReactNode;
  className?: string;
  ref: LegacyRef<HTMLElement>;
  id: string;
}

const SectionWrapper: FC<SectionWrapperProp> = forwardRef(
  function SectionWrapper({ children, className, id }, ref) {
    return (
      <section
        id={id}
        ref={ref}
        className={cn(
          "pointer-events-none mb-[18rem] flex min-h-[calc(100vh-26rem)] w-full max-w-6xl scroll-mt-[8rem] flex-col items-start lg:pl-10",
          className,
        )}
      >
        {children}
      </section>
    );
  },
);

export default SectionWrapper;
