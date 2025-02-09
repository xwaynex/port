import { iProject } from "@/type";
import Image from "next/image";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import { fadeIngUP, stagger } from "@/animations";

const ProjectCard: React.FC<{
  project: iProject;
  showDetails: null | number;
  setShowDetails: (id: null | number) => void;
}> = ({
  project: {
    name,
    description,
    // categoty,
    deployed_url,
    github_url,
    image_path,
    key_tech,
    id,
  },
  showDetails,
  setShowDetails,
}) => {
  return (
    <div>
      <Image
        src={image_path}
        alt={name}
        className="cursor-pointer"
        height={150}
        onClick={() => setShowDetails(id)}
        width={300} // Adjust width
      />
      <p className="my-2 text-center">{name}</p>

      {showDetails === id && (
        <div className="absolute top-0 left-0 z-10 grid w-full h-auto md:grid-cols-2 gap-x-12 text-black bg-gray-100 dark:text-white dark:bg-dark-100 p-2 md:p-10 rounded-lg">
          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.div
              variants={fadeIngUP}
              className="border-4 border-end"
            >
              <Image src={image_path} alt={name} width={300} height={150} />
            </motion.div>

            <motion.div
              variants={fadeIngUP}
              className="flex justify-center my-4 space-x-3"
            >
              <a
                href={github_url}
                target="_blank"
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
              >
                <AiFillGithub /> <span>Github</span>
              </a>
              <a
                href={deployed_url}
                target="_blank"
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
              >
                <AiFillProject /> <span>Project</span>
              </a>
            </motion.div>
          </motion.div>

          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.h2
              variants={fadeIngUP}
              className="mb-3 rexr-xl font-medium md:text-2xl"
            >
              {name}
            </motion.h2>
            <motion.h3 variants={fadeIngUP} className="mb-3 font-medium">
              {description}
            </motion.h3>

            <motion.div
              variants={fadeIngUP}
              className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider"
            >
              {key_tech.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 my-1 bg-gray-200 dark:bg-dark-200 rounded-sm"
                >
                  {" "}
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>
          <button
            onClick={() => setShowDetails(null)}
            className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200"
          >
            <MdClose size={30} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
