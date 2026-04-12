"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { GiTie } from "react-icons/gi";
import { CiLocationOn, CiPhone } from "react-icons/ci";
import { MdOutlineEngineering, MdLightMode, MdDarkMode } from "react-icons/md";
import { RiExternalLinkLine } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 14 } },
};

const Sidebar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const changeTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-col items-center p-5 gap-4"
    >
      {/* Avatar with gradient ring */}
      <motion.div variants={item} className="relative">
        <div className="p-[3px] rounded-full bg-gradient-to-br from-green to-end">
          <div className="p-[3px] rounded-full bg-white dark:bg-dark-100">
            <Image
              src="https://steamuserimages-a.akamaihd.net/ugc/964223216245331957/CCE288F8EB44CFBE319011C6C4433290FD13925C/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"
              alt="Vee"
              width={120}
              height={120}
              className="w-28 h-28 rounded-full object-cover"
              unoptimized
              priority
            />
          </div>
        </div>
        {/* Available indicator */}
        <span className="absolute bottom-1.5 right-1.5 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-white dark:border-dark-100" />
      </motion.div>

      {/* Name & tagline */}
      <motion.div variants={item} className="text-center">
        <h3 className="text-lg font-bold tracking-wide">Vee</h3>
        <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5 tracking-widest uppercase">
          Full-Stack · Web3 · AI
        </p>
      </motion.div>

      {/* Role badge */}
      <motion.div
        variants={item}
        className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-100 dark:bg-dark-200 text-sm border border-gray-200 dark:border-dark-500"
      >
        <MdOutlineEngineering className="text-green text-base shrink-0" />
        <span className="font-medium">Software Engineer</span>
      </motion.div>

      {/* Social icons */}
      <motion.div variants={item} className="flex gap-3">
        {[
          { href: "https://github.com/xwaynex", Icon: FaGithub, label: "GitHub" },
          { href: "https://www.linkedin.com/in/victor-ogunbiyi1/", Icon: FaLinkedin, label: "LinkedIn" },
        ].map(({ href, Icon, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-dark-200 text-green border border-gray-200 dark:border-dark-500 hover:bg-gradient-to-r hover:from-green hover:to-end hover:text-white hover:border-transparent transition-all duration-300"
          >
            <Icon className="text-lg" />
          </a>
        ))}
      </motion.div>

      {/* Divider */}
      <motion.div variants={item} className="w-full h-px bg-gray-200 dark:bg-dark-200" />

      {/* Info strip */}
      <motion.div
        variants={item}
        className="w-full rounded-xl bg-gray-100 dark:bg-dark-200 border border-gray-200 dark:border-dark-500 overflow-hidden text-sm"
      >
        <div className="flex items-center gap-2.5 px-4 py-2.5">
          <CiLocationOn className="text-green text-base shrink-0" />
          <span className="text-gray-600 dark:text-gray-400">Earth</span>
        </div>
        <div className="h-px bg-gray-200 dark:bg-dark-500" />
        <div className="flex items-center gap-2.5 px-4 py-2.5">
          <CiPhone className="text-green text-base shrink-0" />
          <span className="text-gray-600 dark:text-gray-400">+234-816-178-9508</span>
        </div>
      </motion.div>

      {/* Action buttons */}
      <motion.div variants={item} className="flex flex-col gap-2.5 w-full">
        <a
          href="https://docs.google.com/document/d/1x08uYyvXvnb7nP6n9FNTWLKNfgMbZ_epqkBjwzK39Zg/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-2.5 rounded-full bg-gradient-to-r from-green to-end text-white text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          <GiTie className="text-base" />
          View Resume
          <RiExternalLinkLine className="text-xs opacity-80" />
        </a>

        <button
          onClick={() => window.open("mailto:victorogunbiyi69@gmail.com")}
          className="flex items-center justify-center gap-2 py-2.5 rounded-full bg-gray-100 dark:bg-dark-200 border border-gray-200 dark:border-dark-500 text-sm font-medium hover:border-green dark:hover:border-green transition-colors"
        >
          <AiOutlineMail className="text-green text-base" />
          Email Me
        </button>

        <button
          onClick={changeTheme}
          className="flex items-center justify-center gap-2 py-2.5 rounded-full bg-gray-100 dark:bg-dark-200 border border-gray-200 dark:border-dark-500 text-sm font-medium hover:border-green dark:hover:border-green transition-colors"
        >
          {mounted && theme === "dark" ? (
            <MdLightMode className="text-green text-base" />
          ) : (
            <MdDarkMode className="text-green text-base" />
          )}
          {mounted ? (theme === "dark" ? "Light Mode" : "Dark Mode") : "Toggle Theme"}
        </button>
      </motion.div>
    </motion.div>
  );
};

export default Sidebar;
