import React from "react";
import { format } from "date-fns";
import { AtSign } from "lucide-react";

const Footer = () => {
  return (
    <footer className="pointer-events-none mx-auto flex h-[5rem] w-full max-w-md items-center justify-center border-t-[2px] border-slate-400/30 ">
      <small className="flex items-center gap-1 ">
        <AtSign size={15} /> {format(new Date(), "y")} Vignesh Kathiresan, All
        rights reserved.
      </small>
    </footer>
  );
};

export default Footer;
