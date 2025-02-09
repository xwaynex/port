import { projects as projectsData } from "@/data";
import ProjectCard from "./ProjectCard";
import ProjectNavbar from "./ProjectNavbar";
import { useState } from "react";
import { Category } from "@/type";
import { motion } from "framer-motion";
import { fadeIngUP, stagger } from "@/animations";

const Projects = () => {
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState("all");

  const [showDetails, setShowDetails] = useState<number | null>(null);

  const handleFilterCategory = (category: Category | "all") => {
    if (category === "all") {
      setProjects(projectsData);
      setActive(category);
      return;
    }
    const newArray = projectsData.filter((projects) =>
      projects.categoty.includes(category)
    );
    setProjects(newArray);
    setActive(category);
  };
  return (
    <div
      // variants={tabAnimation}
      // initial="initial"
      // animate="animate"
      // exit="exit"
      className="px-5 py-2 overflow-y-scroll"
      style={{ height: "65vh" }}
    >
      <ProjectNavbar
        handleFilterCategory={handleFilterCategory}
        active={active}
      />

      <motion.div
        className="grid grid-cols-12 gap-4 my-3 relative"
        variants={stagger}
        initial="initial"
        animate="animate"
      >
        {projects.map((project) => (
          <motion.div
            variants={fadeIngUP}
            className="col-span-12 p-2 sm:col-span-6 lg:col-span-4 bg-gray-200 dark:bg-dark-200 rounded-lg"
            key={project.name}
          >
            <ProjectCard
              project={project}
              showDetails={showDetails}
              setShowDetails={setShowDetails}
            />{" "}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
