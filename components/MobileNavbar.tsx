"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ArrowUpRight, CodeXml } from "lucide-react";
import { navLinks as links } from "@/constants/data";
import Link from "next/link";
import { useActiveSec } from "@/hooks/useActiveSec";
import { cn } from "@/lib/utils";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const MobileNavbar = () => {
  const { activeSec, setActiveSec, timeOfLastClick, setTimeOfLastClick } =
    useActiveSec();

  return (
    <Sheet>
      <SheetTrigger className="fixed bottom-4 left-4 z-[200] block sm:hidden">
        <div className="rounded-full bg-slate-900 p-4 text-white transition-transform hover:scale-105 hover:bg-slate-900/90 focus:scale-105 focus:bg-slate-900/90 active:scale-105 active:bg-slate-900/90">
          <ArrowUpRight size={15} />
        </div>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="z-[200] block w-full bg-ownbg sm:hidden"
      >
        <SheetHeader>
          <SheetTitle className="ml-2 mt-2">
            <Link href={"/"}>
              <SheetClose className="flex items-start font-gt text-2xl font-normal ">
                {"<vignesh />"}
              </SheetClose>
            </Link>
          </SheetTitle>
          <div className=" ml-8 flex h-[36rem] flex-col items-start justify-around border-l-[2px] border-slate-400 pl-8 text-3xl">
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
                <span
                  className={cn(
                    "absolute left-[2.4rem] mt-[0.5] rounded-full bg-ownbg p-1",
                    activeSec === link.name ? "block" : "hidden",
                  )}
                >
                  <CodeXml size={28} />
                </span>
                <SheetClose>{link.name}</SheetClose>
              </Link>
            ))}
          </div>
          <div className="flex justify-end gap-4 text-slate-500">
            <Link
              target="_blank"
              href={"https://www.linkedin.com/in/vignesh-kathiresan-kv"}
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
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
