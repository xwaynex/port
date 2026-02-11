import { RiComputerLine } from "react-icons/ri";
import { iProject, iService, iSkill } from "./type";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { BsCCircleFill } from "react-icons/bs";

export const service: iService[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      " dynamic, responsive, and intuitive user interfaces using modern JavaScript frameworks.",
  },
  {
    Icon: FaServer,
    title: "Backend Development",
    about:
      "<b>Robust </b>, <b>scalable</b> backend systems that power high-performance applications and ensuring secure data management.",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "Design and develop secure, efficient, and <b>well-documented</b> APIs that enable seamless integration between various systems.",
  },
  {
    Icon: MdDeveloperMode,
    title: "Competitive Coding",
    about:
      "Thrive on the challenge of competitive coding—constantly refining my problem-solving skills, on <b>leetcode</b>, <b>hackerrank</b>...",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "Product Management",
    about:
      "Merging technical expertise with strategic vision, Guiding products from concept to launch. I ensure that every solution not only meets market demands.",
  },
];

export const languages: iSkill[] = [
  {
    Icon: BsCCircleFill,
    name: "Java Script",
    level: "90%",
  },
  {
    Icon: BsCCircleFill,
    name: "Type Script",
    level: "80%",
  },

  {
    Icon: BsCCircleFill,
    name: "Rust",
    level: "50%",
  },
  {
    Icon: BsCCircleFill,
    name: "Solidity",
    level: "50%",
  },
  {
    Icon: BsCCircleFill,
    name: "React",
    level: "80%",
  },
  {
    Icon: BsCCircleFill,
    name: "React Native",
    level: "70%",
  },

  {
    Icon: BsCCircleFill,
    name: "Next.Js",
    level: "70%",
  },
  {
    Icon: BsCCircleFill,
    name: "Express",
    level: "70%",
  },
  {
    Icon: BsCCircleFill,
    name: "Nestjs",
    level: "70%",
  },
];

export const tools: iSkill[] = [
  {
    Icon: BsCCircleFill,
    name: "Aws",
    level: "60%",
  },
  {
    Icon: BsCCircleFill,
    name: "Docker",
    level: "70%",
  },
  {
    Icon: BsCCircleFill,
    name: "Kubarneries",
    level: "70%",
  },
  {
    Icon: BsCCircleFill,
    name: "MongoDb",
    level: "80%",
  },
  {
    Icon: BsCCircleFill,
    name: "Mysql",
    level: "60%",
  },
  {
    Icon: BsCCircleFill,
    name: "Prisma",
    level: "70%",
  },
  {
    Icon: BsCCircleFill,
    name: "Supabase",
    level: "70%",
  },
  {
    Icon: BsCCircleFill,
    name: "Firebase",
    level: "80%",
  },
  {
    Icon: BsCCircleFill,
    name: "Sentry",
    level: "80%",
  },
];

export const projects: iProject[] = [
  {
    id: 7,
    name: "adept.ml",
    description:
    "Adept.ml automates your calls, WhatsApp messages, and quoting process, so you can focus on what you do best.",
    image_path: "/images/adeptML.png",
    deployed_url: "https://adept.ml/",
    github_url: "https://github.com/xwaynex",
    category: ["express", "mongo", "ai"],
    key_tech: ["mongodb", "gemeni", "multer"],
  },
  {
    id: 9,
    name: "Feelize",
    description: "AI-enhanced software building",
    image_path: "/images/Feelize.png",
    deployed_url: "https://feelize.com/",
    github_url: "https://github.com/xwaynex",
    category: ["react", "ai", "express"],
    key_tech: ["Firebase", "Tailwind", "React"],
  },
  {
   id: 8,
   name: "E learn",
   description:
     "AI tutor, personalize and learn using 1 on 1 free form AI audio conversation",
   image_path: "/images/e-learn.png",
   deployed_url: "https://e-learn-web.vercel.app/",
   github_url: "https://github.com/xwaynex/e-learn.git",
   category: [ "ai", "next.js", "typescript", "nestJs"],
   key_tech: ["NestJs", "Prisma", "Supabase", "Clerk", "Vapi"],
 },
  {
    id: 1,
    name: "Dhella",
    description: "A secondary health care management app",
    image_path: "/images/Dhella.png",
    deployed_url: "https://app.dhella.com/",
    github_url: "https://github.com/xwaynex",
    category: ["react"],
    key_tech: ["React", "Material UI", "Bootstrap", "Tailwind"],
  },
  {
    id: 2,
    name: "Portfolio",
    description: "An open source portfolio website",
    image_path: "/images/Portfolio.png",
    deployed_url: "https://portfolio-nine-beta-74.vercel.app/",
    github_url: "https://github.com/xwaynex/port.git",
    category: ["next.js", "typescript"],
    key_tech: ["React", "Tailwind", "Framer motion"],
  },
  {
    id: 3,
    name: "Crypto Exchange",
    description:
      "An inprogress Crypto exchange, auth: (usr: kami, pwd:As@12345)",
    image_path: "/images/Exchange.png",
    deployed_url: "https://osaka6.netlify.app/",
    github_url: "https://github.com/xwaynex",
    category: ["react", "mongo", "express"],
    key_tech: ["React", "Tailwind", "express", "mongo", "MUI"],
  },
  {
    id: 4,
    name: "3D AI",
    description: "A 3D landing page with interact 3D elements and contact form",
    image_path: "/images/Ai.png",
    deployed_url: "https://reliable-meerkat-afc827.netlify.app/",
    github_url: "https://github.com/xwaynex/businessWeb.git",
    category: ["react"],
    key_tech: [
      "React",
      "Tailwind",
      "Framer motion",
      " Three Fiber",
      "Three.js ",
    ],
  },
  {
    id: 5,
    name: "Expense Tracker",
    description:
      "A fully functional expense tracking tool, keep daily tabs on how much you spend",
    image_path: "/images/expense.png",
    deployed_url: "https://expense-tracker-ve1i.onrender.com/",
    github_url: "https://github.com/xwaynex/expense-tracker",
    category: ["react", "express", "mongo"],
    key_tech: [
      "React",
      "Graphql",
      "Tailwind",
      "Apollo Client",
      "Apollo Server",
    ],
  },
  {
    id: 6,
    name: "X Clone",
    description: "Playing around with the new X interface and features",
    image_path: "/images/x.png",
    deployed_url: "https://x-clone-three-tau.vercel.app/",
    github_url: "https://github.com/xwaynex/x-clone",
    category: ["typescript", "next.js"],
    key_tech: ["Tailwind", "Firebase", "Emoji-mart", "Cloudinary"],
  },
];
