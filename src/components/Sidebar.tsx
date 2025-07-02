"use client";

import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { GiTie } from "react-icons/gi";
import { FaLinkedin } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEngineering } from "react-icons/md";
import { RiExternalLinkLine } from "react-icons/ri";
import { useTheme } from "next-themes";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="p-4 rounded-lg shadow-md">
      <Image
        src="https://steamuserimages-a.akamaihd.net/ugc/964223216245331957/CCE288F8EB44CFBE319011C6C4433290FD13925C/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"
        alt="Mangekyo"
        width={150} // Adjust width
        height={150} // Adjust height
        className="w-32 h-32 mx-auto rounded-full"
        unoptimized //The image fails with a 500 when optimized
        priority // Prioritize for improved LCP
      />
      {/* <h3 className="my-4 text-3xl  font-medium tracking-wider font-title">
        <span className="text-green">Sekai </span>
        itami yo
        
        &nbsp; //insert space
      </h3> */}

      <p className="flex items-center justify-center px-14 py-1 my-3 bg-gray-200 dark:bg-dark-200 rounded-full">
      <MdOutlineEngineering className="h-6 w-6 mr-auto" /> Software Engineer
      </p>
      <a
        href="https://docs.google.com/document/d/1x08uYyvXvnb7nP6n9FNTWLKNfgMbZ_epqkBjwzK39Zg/edit?usp=sharing"
        className="flex items-center justify-center px-14 py-1 my-3 bg-gray-200 dark:bg-dark-200 rounded-full"
        target="_blank" rel="noopener noreferrer"
      >
        <GiTie className="h-6 w-6 mr-auto"/> View Resume <RiExternalLinkLine className="h-6 w-6" />
      </a>

      {/* social Icon */}
      <div className="flex justify-around my-5 text-green md:w-full mx-auro">
        <a href="https://github.com/xwaynex" target="_blank">
          <FaGithub className="h-8 w-8 cursor-pointer" />
        </a>
        <a href="https://www.linkedin.com/in/victor-ogunbiyi1/" target="_blank">
          <FaLinkedin className="h-8 w-8 cursor-pointer" />
        </a>
      </div>

      {/* address */}
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200 overflow-hidden"
        style={{ marginLeft: "-2rem", marginRight: "-2rem" }}
      >
        <div className="flex item-center justify-center space-x-2">
          <CiLocationOn />
          <span>Earth</span>
        </div>
        {/* <p className="my-2">victorogunbiyi69@gmail.com</p> */}
        <p className="my-2">+234-8161789508</p>
      </div>
      <button
        className="bg-gradient-to-r from-green to-end my-1 w-8/12 rounded-full py-2 px-5 text-white"
        onClick={() => window.open("mailTo: victorogunbiyi69@gmail.com")}
      >
        Email Me
      </button>
      <button
        onClick={changeTheme}
        className="bg-gradient-to-r from-green to-end my-1 w-8/12 rounded-full py-2 px-5 text-white"
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default Sidebar;
