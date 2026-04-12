import { service } from "@/data";
import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";
import { fadeIngUP, stagger } from "@/animations";

const About = () => {
  return (
    <div className="flex flex-col px-6 pt-1 flex-grow h-full">
      <h5 className="my-3 font-medium">
        I&apos;ve always seen software as more than lines of code  it&apos;s a system of thought, a
        reflection of how we reason, create, and solve. As a Full-Stack Developer and emerging Tech
        Leader with 4+ years of experience, I build and architect systems that not only perform, but
        think. My passion lies in designing frameworks that scale effortlessly, writing clean,
        purposeful code, and exploring how AI can reshape the way we develop. Guided by curiosity in
        philosophy moral, ethical, and ontological I bring reflection into engineering: every
        decision in design and architecture is intentional, every solution tied to meaning.
      </h5>

      <div
        className="mt-4 py-5 bg-gray-100 dark:bg-dark-100 flex-grow"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem", paddingLeft: "1.5rem", paddingRight: "1.5rem" }}
      >
        <h6 className="mb-4 text-xl font-bold tracking-wide">What I Offer</h6>
        <motion.div
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {service.map((svc) => (
            <motion.div
              variants={fadeIngUP}
              key={svc.title}
              className="flex"
            >
              <ServiceCard service={svc} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default About;
