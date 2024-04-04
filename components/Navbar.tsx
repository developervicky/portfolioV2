import Dot from "@/public/images/dot.svg";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className=" fixed top-0 z-[9999] w-full bg-transparent  backdrop-blur-[8px] ">
      <div className="flex justify-between px-7 py-5 sm:px-12">
        <Link href={"/"}>
          <p className="text-xl sm:text-2xl xl:pl-10 ">{"<vignesh />"}</p>
        </Link>
        <div className="flex w-fit items-center justify-between gap-4 rounded-full border-[1px] border-slate-500 px-2 text-slate-500 sm:px-5">
          <span className="relative flex h-4 w-4">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex h-4 w-4 rounded-full bg-green-500"></span>
          </span>
          <p className="text-xs text-slate-700  sm:text-[15px] ">
            Available for Freelance Work
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
