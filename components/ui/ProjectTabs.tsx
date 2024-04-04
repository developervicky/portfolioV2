"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProjectsData } from "@/constants/data";
import { cn } from "@/lib/utils";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MutableRefObject, useRef } from "react";

import { useDraggable } from "react-use-draggable-scroll";

const ProjectTabs = () => {
  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref);
  return (
    <Tabs
      defaultValue="Ecom Admin & Store"
      className="pointer-events-auto mt-8 w-full pr-4 sm:pr-0"
    >
      <TabsList
        {...events}
        ref={ref}
        className="custom-scrollbar w-full overflow-hidden overflow-x-auto "
      >
        {ProjectsData.map((project, index) => (
          <TabsTrigger key={index} value={project.title} className="flex-none">
            {project.title}
          </TabsTrigger>
        ))}
      </TabsList>
      {ProjectsData.map((project, index) => (
        <TabsContent
          key={index}
          value={project.title}
          className="rounded-md border-[1px] border-slate-400 "
        >
          <div className="flex flex-col lg:grid lg:grid-cols-12">
            <div className="relative h-[15rem] overflow-hidden rounded-t-md lg:col-span-5 lg:h-full lg:rounded-l-md lg:rounded-t-none">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover object-center"
                priority={true}
              />
              <div className="absolute bottom-4 left-4 flex cursor-pointer gap-3">
                {project.links.map((link, index) => (
                  <Link
                    key={index}
                    href={link.link}
                    target="_blank"
                    className={cn("rounded-full bg-ownbg p-2 text-2xl")}
                  >
                    {link.icon}
                  </Link>
                ))}
              </div>
            </div>
            <div className="m-5 flex flex-col justify-between lg:col-span-7">
              <div className="flex flex-col gap-5">
                <h1 className="text-4xl">{project.title}</h1>
                <p className="text-xl">{project.description}</p>
              </div>
              <div className=" mt-8 md:mt-10 ">
                <h2 className="text-2xl ">Stacks:</h2>
                <div className="mt-2 grid  grid-cols-2 gap-x-4 gap-y-2 lg:grid-cols-4 ">
                  {project.tags.map((tag, index) => (
                    <p key={index} className="w-fit text-lg">
                      {tag}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default ProjectTabs;
