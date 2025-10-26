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
      I’ve always seen software as more than lines of code — it’s a system of thought, a reflection of how we reason, create, and solve. As a Full-Stack Developer and emerging Tech Leader with 4+ years of experience, I build and architect systems that not only perform, but think. My passion lies in designing frameworks that scale effortlessly, writing clean, purposeful code, and exploring how AI can reshape the way we develop. Guided by curiosity in philosophy — moral, ethical, and ontological — I bring reflection into engineering: every decision in design and architecture is intentional, every solution tied to meaning. I believe true leadership means staying hands-on — leading through clarity, craftsmanship, and the quiet precision of well-written code.
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
