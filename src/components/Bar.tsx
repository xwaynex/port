import { iSkill } from "@/type";
import { motion } from "framer-motion";

const Bar: React.FC<{ data: iSkill }> = ({ data: { Icon, level, name } }) => {
  const variants = {
    initial: {
      width: 0
    },
    animate: {
      width: level,
      transition:{
        durationn: 0.4,
        type: "spring",
        damping: "10",
        stiffness: "100"
      }

    }
  }
  return (
    <div className="my-2 text-white bg-gray-300 dark:bg-dark-200 rounded-full">
      <motion.div
        className="px-4 py-1 flex items-center rounded-full bg-gradient-to-r from-green to-end"
        style={{ width: level }}
        variants={variants}
        initial="initial"
        animate="animate"
      >
        <Icon className="mr-3" />
        {name}
      </motion.div>
    </div>
  );
};
export default Bar;
