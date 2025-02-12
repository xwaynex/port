import { service } from "@/data";
import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";
import { fadeIngUP, stagger } from "@/animations";

const About = () => {
  return (
    <div
      // variants={tabAnimation}
      // initial="initial"
      // animate="animate"
      // exit="exit"
      className="flex flex-col px-6 pt-1 flex-grow h-full"
    >
      <h5 className="my-3 font-medium">
      Results-oriented Full-Stack Developer and Product Manager with over four years of experience in enhancing software performance and delivering top-notch solutions. I specialize in crafting efficient, well-documented code architectures that significantly boost application speed, reliability, and scalability.
      </h5>
      <div
        className="p-4 mt-5 bg-gray-400 dark:bg-dark-100 flex-grow h-full"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h6 className="my-3 text-xl font-bold tracking-wide">What I Offer</h6>
        <motion.div
          className="grid gap-6 lg:grid-cols-2"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {service.map((service) => (
            <motion.div
              variants={fadeIngUP}
              key={service.title}
              className="bg-gray-200 dark:bg-dark-200 rounded-lg lg:col-span-1"
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default About;
