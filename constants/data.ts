import React from "react";

import { ExternalLink, Github, Figma } from "lucide-react";

import studentSpaceImg from "@/public/images/studentSpace.jpg";
import tripRoverImg from "@/public/images/tripRover.jpg";
import shareThoughtsImg from "@/public/images/shareThoughts.jpg";
import bookEventImg from "@/public/images/bookEvent.jpg";
import foodieImg from "@/public/images/foodie.jpg";
import docAIImg from "@/public/images/docAI.jpg";
import DMMEImg from "@/public/images/DMME.jpg";
import EcomImg from "@/public/images/ecom.png";

export const navLinks = [
  {
    id: "01",
    name: "Home",
    hash: "#home",
  },
  {
    id: "02",
    name: "About",
    hash: "#about",
  },
  {
    id: "03",
    name: "Skills",
    hash: "#skills",
  },
  {
    id: "04",
    name: "Services",
    hash: "#services",
  },
  {
    id: "05",
    name: "Projects",
    hash: "#projects",
  },
  {
    id: "06",
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const skillsData = [
  {
    id: "01",
    name: "Next.js",
  },
  {
    id: "02",
    name: "React.js",
  },
  {
    id: "03",
    name: "Typescript",
  },
  {
    id: "04",
    name: "Javascript",
  },
  {
    id: "05",
    name: "Node.js",
  },
  {
    id: "06",
    name: "Express.js",
  },
  {
    id: "07",
    name: "MongoDB",
  },
  {
    id: "08",
    name: "PostgreSQL",
  },
  {
    id: "09",
    name: "Prisma",
  },
  {
    id: "10",
    name: "Github",
  },
  {
    id: "11",
    name: "TailwindCSS",
  },
  {
    id: "12",
    name: "Framer Motion",
  },
  {
    id: "13",
    name: "Figma",
  },
  {
    id: "14",
    name: "Python",
  },
] as const;

export const ServicesData = [
  {
    id: "01",
    item: "item-1",
    heading: "Full Stack Development",
    description:
      "Building Applications with dynamic components for optimization and user friendliness.",
  },
  {
    id: "02",
    item: "item-2",
    heading: "User Interface Design",
    description:
      "Creating wireframes and discussing with clients are best way to understand, emapthize and providing solutions to the client as per their needs are the best principles of Precoding phase.",
  },
  {
    id: "03",
    item: "item-3",
    heading: "Lifetime Support",
    description:
      "The Client can approach whenever the app needs debugging or refactoring the current version of code. New features upgrading, Changing UI/UX and related works are exceptional. 🙏",
  },
  {
    id: "04",
    item: "item-4",
    heading: "Tailored Solutions",
    description:
      "Reusable UI/UX components, Quick API responses, Server side rendering (less data load on client side), SEO Optimization are some of the few solutions and considerations to build the app to excellence. Many little coding practices combining all together make a huge difference in the result.",
  },
] as const;

export const ProjectsData = [
  {
    title: "Ecom Admin & Store",
    description:
      "E-commerce Application have facilities for both buyers and sellers to sell and buy products. Check out the Admin dashboard at my Github.",
    tags: [
      "NextJS",
      "TypeScript",
      "PostgreSQL",
      "Tailwind",
      "Shadcn",
      "Prisma",
      "zustand",
      "zod",
      "React-Hook Form",
      "Stripe",
      "Cloudinary",
    ],
    imageUrl: EcomImg,
    website: "https://ecom--store.vercel.app/",
    links: [
      {
        name: "website",
        link: "https://ecom--store.vercel.app/",
        icon: React.createElement(ExternalLink),
      },
      {
        name: "github",
        link: "https://github.com/developervicky/Ecom-store",
        icon: React.createElement(Github),
      },
    ],
  },
  {
    title: "doc.AI",
    description:
      "A web application for chatting with your PDF documents integrated with openAI. Free and Pro plans were available and provided limited application features based on the plan.",
    tags: [
      "NextJS",
      "TypeScript",
      "NeonTech",
      "Tailwind",
      "Shadcn",
      "Prisma",
      "openAI",
      "tRPC",
      "zod",
      "Stripe",
      "UploadThing",
    ],
    imageUrl: docAIImg,
    website: "https://doc--ai.vercel.app/",
    links: [
      {
        name: "website",
        link: "https://doc--ai.vercel.app/",
        icon: React.createElement(ExternalLink),
      },
      {
        name: "github",
        link: "https://github.com/developervicky/docai",
        icon: React.createElement(Github),
      },
    ],
  },
  {
    title: "bookEvent",
    description:
      "A CRUD application for booking events. The user friendly place to book your events at few steps.",
    tags: [
      "NextJS",
      "TypeScript",
      "NodeJS",
      "MongoDB",
      "Tailwind",
      "Shadcn",
      "zod",
      "React-Hook Form",
      "Kinde",
      "Stripe",
      "UploadThing",
    ],
    imageUrl: bookEventImg,
    website: "https://event-book.vercel.app/",
    links: [
      {
        name: "website",
        link: "https://event-book.vercel.app/",
        icon: React.createElement(ExternalLink),
      },
      {
        name: "github",
        link: "https://github.com/developervicky/bookEvent",
        icon: React.createElement(Github),
      },
    ],
  },
  {
    title: "DMME",
    description:
      "A real-time chat application with 100% data privacy. The user friendly interface to chat with your fellas and also have group chat feature.",
    tags: [
      "NextJS",
      "TypeScript",
      "NodeJS",
      "MongoDB",
      "Prisma",
      "Tailwind",
      "Next-Auth",
      "React-Hook Form",
      "Pusher",
      "Cloudinary",
    ],
    imageUrl: DMMEImg,
    website: "https://dmme-chat.vercel.app/",
    links: [
      {
        name: "website",
        link: "https://dmme-chat.vercel.app/",
        icon: React.createElement(ExternalLink),
      },
      {
        name: "github",
        link: "https://github.com/developervicky/dmme",
        icon: React.createElement(Github),
      },
    ],
  },
  {
    title: "tripRover",
    description:
      "A CRUD application for booking accommodations that are responsive and gives accommodation owners andbookers access to their own dashboards for managing their reservations",
    tags: ["React", "Node", "Express", "MongoDB", "Tailwind"],
    imageUrl: tripRoverImg,
    website: "https://triprover.vercel.app/",
    links: [
      {
        name: "website",
        link: "https://triprover.vercel.app/",
        icon: React.createElement(ExternalLink),
      },
      {
        name: "github",
        link: "https://github.com/developervicky/tripRover",
        icon: React.createElement(Github),
      },
    ],
  },

  {
    title: "shareThoughts",
    description:
      "A CRUD application for sharing your thought without getting back any judgemental notes at this modern world.",
    tags: [
      "NextJS",
      "React",
      "MongoDB",
      "NextAuth",
      "Tailwind",
      "Framer-Motion",
    ],
    imageUrl: shareThoughtsImg,
    website: "https://sharethoughts.vercel.app/",
    links: [
      {
        name: "website",
        link: "https://sharethoughts.vercel.app/",
        icon: React.createElement(ExternalLink),
      },
      {
        name: "github",
        link: "https://github.com/developervicky/shareThoughts",
        icon: React.createElement(Github),
      },
    ],
  },
  {
    title: "studentSpace",
    description:
      "A social media platform for college campuses, facilitating seamless collaboration andknowledge exchange among students, faculty, staff, and community members",
    tags: ["React", "Node", "Express", "MongoDB", "Tailwind"],
    imageUrl: studentSpaceImg,
    website: "https://studentspaces.vercel.app/",
    links: [
      {
        name: "website",
        link: "https://studentspaces.vercel.app/",
        icon: React.createElement(ExternalLink),
      },
      {
        name: "github",
        link: "https://github.com/developervicky/studentSpace",
        icon: React.createElement(Github),
      },
    ],
  },
  {
    title: "Foodie",
    description:
      "Designed a food delivery application’s user interface using Figma. The design is smartphone-based.",
    tags: ["Figma"],
    imageUrl: foodieImg,
    website:
      "https://www.figma.com/proto/QencsTZr5puXlHeUQaCK2Y/Foodie---Mockup?type=design&node-id=1-2&t=DeTZu3xCn3EMbC0U-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2&mode=design",
    links: [
      {
        name: "doc",
        link: "https://docs.google.com/presentation/d/1SH5z5Gbje7qCqds2oh9GgbD8eygX65V3LzewpkX7pA4/edit?usp=sharing",
        icon: React.createElement(ExternalLink),
      },
      {
        name: "figma",
        link: "https://www.figma.com/proto/QencsTZr5puXlHeUQaCK2Y/Foodie---Mockup?type=design&node-id=1-2&t=DeTZu3xCn3EMbC0U-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2&mode=design",
        icon: React.createElement(Figma),
      },
    ],
  },
] as const;
