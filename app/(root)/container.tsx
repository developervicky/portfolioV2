"use client";
import { navLinks as links } from "@/constants/data";
import { useActiveSec } from "@/hooks/useActiveSec";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC, ReactNode } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

interface ContainerProps {
  children: ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
  const { activeSec, setActiveSec, timeOfLastClick, setTimeOfLastClick } =
    useActiveSec();
  // console.log(activeSec, timeOfLastClick);

  return (
    <div className="grid  w-full grid-cols-12 px-3 sm:px-6">
      <div className="hidden w-full sm:block md:col-span-1 ">
        <div className="sticky top-[7rem] mt-[7rem] h-[600px] w-full border-r-[1px] border-slate-500 px-2">
          <ul className="absolute -right-[14.2rem] top-[18rem] flex -rotate-90 flex-row-reverse gap-8 uppercase">
            {links.map((link) => (
              <Link
                href={`/${link.hash}`}
                key={link.id}
                onClick={() => {
                  setActiveSec(link.name);
                  setTimeOfLastClick(Date.now());
                }}
                className={cn(
                  "transition-all",
                  activeSec === link.name ? "text-slate-900" : "text-slate-400",
                )}
              >
                {link.name}
              </Link>
            ))}
          </ul>
        </div>
      </div>
      <div className="col-span-11 mt-[8rem]  pl-5 sm:col-span-10 sm:px-10 md:pl-12 md:pr-16">
        {children}
      </div>
      <div className="col-span-1 h-full w-full">
        <div className="fixed bottom-0  h-[200px] w-0  border-r-[1px] border-slate-500 px-2" />
        <div className="fixed  bottom-[13.6rem]">
          <div className="flex flex-col gap-4 text-slate-500">
            <Link
              target="_blank"
              href={"https://www.linkedin.com/in/vigneshk6"}
            >
              <FaLinkedin
                className="transition-colors hover:cursor-pointer hover:text-blue-600"
                size={30}
              />
            </Link>
            <Link target="_blank" href={"https://github.com/developervicky"}>
              <FaGithub
                className="transition-colors hover:cursor-pointer hover:text-black"
                size={30}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
