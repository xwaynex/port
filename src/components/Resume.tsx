import { languages, tools } from "@/data";
import Bar from "./Bar";
import { motion } from "framer-motion";
import { fadeIngUP} from "@/animations";

const Resume = () => {
  return (
    <div
      // variants={tabAnimation}
      // initial="initial"
      // animate="animate"
      // exit="exit"
      className="px-6 py-2"
    >
      {/* education & expirences */}
      <motion.div
        className="grid gap-6 md:grid-cols-2"
        variants={fadeIngUP}
        initial="initial"
        animate="animate"
      >
        <div>
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">Sociology</h5>
            <p className="font-semibold">University of Ibadan(2018-2023)</p>
            <p className="my-3"> 知る心は自由な心である </p>
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">FullStack Engineer</h5>
            <p className="font-semibold">Feelize(2025 - Present)</p>
            <p className="my-3">Currently developing the business and AI client softwares</p>
          </div>
        </div>
      </motion.div>

      {/* languages & tools */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Languages & Framework</h5>
          <div className="my-2">
            {languages.map((language) => (
              <Bar data={language} key={language.name} />
            ))}
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
          <div className="my-2">
            {tools.map((tool) => (
              <Bar data={tool} key={tool.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
