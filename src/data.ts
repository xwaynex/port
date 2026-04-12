import { RiComputerLine } from "react-icons/ri";
import { iProject, iService, iSkill } from "./type";
import {FaCloud, FaNodeJs, FaAws } from "react-icons/fa";
import { AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { BsCCircleFill } from "react-icons/bs";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiNestjs,
  SiPython,
  SiRust,
  SiSolidity,
  SiEthereum,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiSupabase,
  SiFirebase,
  SiDocker,
  SiKubernetes,
  SiShopify,
  SiWordpress,
  SiGit,
  SiPrisma,
  SiGithub,
} from "react-icons/si";

export const service: iService[] = [
  {
    Icon: RiComputerLine,
    title: "Full-Stack Engineering",
    about:
      "End-to-end product development — from pixel-perfect UIs in <b>React</b> & <b>Next.js</b> to resilient <b>Node</b> backends, typed throughout with <b>TypeScript</b>.",
    tags: ["React", "Next.js", "TypeScript", "NestJS", "Express"],
  },
  {
    Icon: SiEthereum,
    title: "Web3 & Blockchain",
    about:
      "Smart contract development in <b>Solidity</b> & <b>Rust</b>, on-chain program design with <b>Anchor</b>, and dApp integration via <b>Ethers.js</b> and Hardhat/Foundry test suites.",
    tags: ["Solidity", "Rust", "Anchor", "Ethers.js", "Hardhat"],
  },
  {
    Icon: SiShopify,
    title: "Shopify & E-Commerce",
    about:
      "Custom <b>Liquid</b> theme architecture (Dawn/Slate), high-converting funnels with GemPages & PageFly, AOV optimisation, and private app development via the Shopify API.",
    tags: ["Liquid", "Dawn/Slate", "GemPages", "Shopify Flow", "PHP/WP"],
  },
  {
    Icon: MdDeveloperMode,
    title: "AI & Workflow Automation",
    about:
      "Agentic CLI workflows with <b>Claude Code</b> & <b>Gemini CLI</b>, shell-integrated code generation, automated documentation, and prompt-engineered unit test pipelines.",
    tags: ["Claude Code", "Gemini CLI", "Copilot CLI", "Prompt Eng."],
  },
  {
    Icon: FaCloud,
    title: "Cloud & DevOps",
    about:
      "Containerised deployments with <b>Docker</b> & <b>Kubernetes</b>, serverless functions on <b>AWS Lambda</b>, S3 asset pipelines, and EC2 infrastructure management.",
    tags: ["AWS", "Docker", "Kubernetes", "EC2", "S3 / Lambda"],
  },
  {
    Icon: AiOutlineApi,
    title: "API & System Design",
    about:
      "Design of <b>REST</b> and <b>GraphQL</b> APIs backed by PostgreSQL, MongoDB, or Supabase, with Prisma ORM, performance profiling, and Core Web Vitals optimisation.",
    tags: ["REST", "GraphQL", "Prisma", "Supabase", "PostgreSQL"],
  },
];

export const frontendSkills: iSkill[] = [
  { Icon: SiJavascript, name: "JavaScript", level: "90%" },
  { Icon: SiTypescript, name: "TypeScript", level: "85%" },
  { Icon: SiReact, name: "React.js", level: "90%" },
  { Icon: SiNextdotjs, name: "Next.js", level: "80%" },
  { Icon: SiReact, name: "React Native", level: "75%" },
  { Icon: SiTailwindcss, name: "Tailwind CSS", level: "90%" },
  { Icon: SiHtml5, name: "HTML / CSS", level: "95%" },
];

export const backendSkills: iSkill[] = [
  { Icon: FaNodeJs, name: "Express.js", level: "80%" },
  { Icon: SiNestjs, name: "NestJS", level: "75%" },
  { Icon: SiPython, name: "Python", level: "70%" },
];

export const web3Skills: iSkill[] = [
  { Icon: SiSolidity, name: "Solidity", level: "65%" },
  { Icon: SiRust, name: "Rust", level: "60%" },
  { Icon: SiRust, name: "Anchor / Cargo", level: "55%" },
  { Icon: SiEthereum, name: "Ethers.js", level: "65%" },
  { Icon: BsCCircleFill, name: "Hardhat / Foundry", level: "60%" },
  { Icon: BsCCircleFill, name: "Infura / Alchemy", level: "65%" },
];

export const databaseSkills: iSkill[] = [
  { Icon: SiMongodb, name: "MongoDB", level: "80%" },
  { Icon: SiMysql, name: "MySQL", level: "70%" },
  { Icon: SiPostgresql, name: "PostgreSQL", level: "70%" },
  { Icon: SiSupabase, name: "Supabase", level: "75%" },
  { Icon: SiFirebase, name: "Firebase", level: "80%" },
  { Icon: SiPrisma, name: "Prisma ORM", level: "75%" },
];

export const cloudSkills: iSkill[] = [
  { Icon: FaAws, name: "AWS (EC2, S3, Lambda)", level: "65%" },
  { Icon: SiDocker, name: "Docker", level: "75%" },
  { Icon: SiKubernetes, name: "Kubernetes", level: "65%" },
  { Icon: SiGit, name: "Git / GitHub", level: "90%" },
];

export const shopifySkills: iSkill[] = [
  { Icon: SiShopify, name: "Shopify Liquid", level: "85%" },
  { Icon: SiShopify, name: "Custom Theme Dev (Dawn/Slate)", level: "80%" },
  { Icon: SiShopify, name: "GemPages / PageFly", level: "80%" },
  { Icon: SiShopify, name: "Shopify Flow & App APIs", level: "75%" },
  { Icon: SiWordpress, name: "WordPress (PHP)", level: "75%" },
];

export const aiWorkflowSkills: iSkill[] = [
  { Icon: BsCCircleFill, name: "Claude Code (Agentic)", level: "90%" },
  { Icon: BsCCircleFill, name: "Gemini CLI", level: "80%" },
  { Icon: SiGithub, name: "GitHub Copilot CLI", level: "80%" },
  { Icon: BsCCircleFill, name: "Prompt Engineering", level: "85%" },
  { Icon: BsCCircleFill, name: "CLI Piping & Automation", level: "80%" },
];

export const testingSkills: iSkill[] = [
  { Icon: BsCCircleFill, name: "Mocha / Chai", level: "75%" },
  { Icon: BsCCircleFill, name: "Integration Testing", level: "70%" },
  { Icon: BsCCircleFill, name: "Google PageSpeed Insights", level: "80%" },
  { Icon: BsCCircleFill, name: "Core Web Vitals / SEO", level: "80%" },
];

// Legacy exports retained for compatibility
export const languages = frontendSkills;
export const tools = cloudSkills;

export const projects: iProject[] = [
  {
    id: 7,
    name: "Adept.ml",
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
   key_tech: ["NestJs", "Prisma", "Supabase", "Clerk", "Vapi", "Next.js"],
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
