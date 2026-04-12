"use client";

import { projects as projectsData } from "@/data";
import ProjectCard from "./ProjectCard";
import ProjectNavbar from "./ProjectNavbar";
import { useState } from "react";
import { Category } from "@/type";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIngUP, stagger } from "@/animations";
import Image from "next/image";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";

const Projects = () => {
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState("all");
  const [showDetails, setShowDetails] = useState<number | null>(null);

  const selectedProject = projectsData.find((p) => p.id === showDetails) ?? null;

  const handleFilterCategory = (category: Category | "all") => {
    if (category === "all") {
      setProjects(projectsData);
      setActive(category);
      return;
    }
    setProjects(projectsData.filter((p) => p.category.includes(category)));
    setActive(category);
  };

  return (
    <>
      {/* Scrollable project grid */}
      <div className="px-5 py-2 overflow-y-auto" style={{ height: "65vh" }}>
        <ProjectNavbar
          handleFilterCategory={handleFilterCategory}
          active={active}
        />
        <motion.div
          className="grid grid-cols-12 gap-4 my-3"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {projects.map((project) => (
            <motion.div
              variants={fadeIngUP}
              className="col-span-12 sm:col-span-6 lg:col-span-4 bg-gray-200 dark:bg-dark-200 rounded-lg p-2"
              key={project.name}
            >
              <ProjectCard project={project} setShowDetails={setShowDetails} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal — fixed to viewport, outside scroll container */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-6 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowDetails(null)}
          >
            <motion.div
              className="relative w-full sm:max-w-lg max-h-[90vh] overflow-y-auto rounded-t-2xl sm:rounded-2xl bg-white dark:bg-dark-100 shadow-2xl"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image header with gradient overlay */}
              <div className="relative w-full h-52 shrink-0">
                <Image
                  src={selectedProject.image_path}
                  alt={selectedProject.name}
                  fill
                  className="object-cover rounded-t-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-t-2xl" />
                <h2 className="absolute bottom-4 left-5 text-xl font-bold text-white drop-shadow">
                  {selectedProject.name}
                </h2>
              </div>

              {/* Body */}
              <div className="p-5 flex flex-col gap-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {selectedProject.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {selectedProject.key_tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2.5 py-1 rounded-full bg-gray-100 dark:bg-dark-200 border border-gray-200 dark:border-dark-500 text-gray-500 dark:text-gray-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-1">
                  <a
                    href={selectedProject.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-full bg-gray-100 dark:bg-dark-200 border border-gray-200 dark:border-dark-500 text-sm font-medium hover:border-green dark:hover:border-green transition-colors"
                  >
                    <AiFillGithub className="text-green text-base" />
                    GitHub
                  </a>
                  <a
                    href={selectedProject.deployed_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-full bg-gradient-to-r from-green to-end text-white text-sm font-semibold hover:opacity-90 transition-opacity"
                  >
                    <AiFillProject className="text-base" />
                    Live Demo
                  </a>
                </div>
              </div>

              {/* Close button */}
              <button
                onClick={() => setShowDetails(null)}
                aria-label="Close"
                className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
              >
                <MdClose size={18} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;
