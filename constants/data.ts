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
import WbcImg from "@/public/images/wbc.jpg";

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
    name: "Certifications",
    hash: "#certifications",
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
    name: "Git",
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
  {
    id: "15",
    name: "Numpy",
  },
  {
    id: "16",
    name: "Pandas",
  },
  {
    id: "17",
    name: "Matplotlib",
  },
  {
    id: "18",
    name: "Seaborn",
  },
] as const;

export const CertificatesData = [
  {
    id: "01",
    item: "item-1",
    heading:
      "Data Science and Machine Learning: Making Data-Driven Decisions program",
    description:
      "Under the direction of MIT professors and industry specialists, I examined about eighteen case studies, gained expertise by resolving every issue following IT methodology, and learned everything from the basics to complex ideas.",
    issuer: "MIT Institute for Data, Systems, and Society (IDSS)",
  },
  {
    id: "02",
    item: "item-2",
    heading: "Work on Data Analytics and Machine Learning",
    description:
      "Examined and analyzed the provided random data API using a variety of data visualization techniques.",
    issuer: "SRM MTS Student Chapter, SRM Kattankulathur",
  },
  {
    id: "03",
    item: "item-3",
    heading: "High Tech Advance Workshop on Data Science",
    description:
      "Google Trends data has been categorized according to a number of criteria and presented in an understandable graph.",
    issuer: "Top Engineers - Anna University Alumni Startup ",
  },
  {
    id: "04",
    item: "item-4",
    heading: "IBM Full Stack Software Developer Specialization",
    description:
      "Python frameworks and modules including Flask, Pandas, NumPy, and BeautifulSoup were used in the development of the Translator app to carry out operations like data collection and web scraping using APIs.",
    issuer: "IBM | Coursera",
  },
  {
    id: "05",
    item: "item-5",
    heading: "Google UX Design Specialization",
    description:
      "Developed a case study for the project, which comprised identifying the user's pain issue and developing a persona and user journey map jointly. Designed low-fidelity and high-fidelity prototypes, mock-ups, and paper and digital wireframes for the project.   ",
    issuer: "Google | Coursera",
  },
] as const;

export const ProjectsData = [
  {
    title: "WBC Classification using Deep Learning",
    description:
      "Presenting a lightweight model with CNN and U-Net-based architectures that can improve and expedite WBC analysis, helping to improve the effectiveness of illness diagnosis and treatment planning.",
    tags: [
      "Python",
      "TensorFlow",
      "Numpy",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "CV2",
    ],
    imageUrl: WbcImg,
    links: [
      {
        name: "website",
        link: "https://drive.google.com/file/d/1K71gRAhhK70ebWDUuJbqk_YG38LDN8Ck/view?usp=sharing",
        icon: React.createElement(ExternalLink),
      },
    ],
  },
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
