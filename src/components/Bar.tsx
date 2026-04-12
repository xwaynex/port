import { iSkill } from "@/type";
import { motion } from "framer-motion";

const Bar: React.FC<{ data: iSkill }> = ({ data: { Icon, level, name } }) => {
  const variants = {
    initial: { width: 0 },
    animate: {
      width: level,
      transition: { duration: 0.6, type: "spring", damping: 15, stiffness: 80 },
    },
  };

  return (
    <div className="my-3">
      <div className="flex justify-between items-center mb-1.5">
        <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
          <Icon className="text-base shrink-0 text-green dark:text-gray-400" />
          <span className="text-sm font-medium">{name}</span>
        </div>
        <span className="text-xs text-gray-400 dark:text-gray-500 ml-2 shrink-0">
          {level}
        </span>
      </div>
      <div className="h-1.5 bg-gray-200 dark:bg-dark-500 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-green to-end"
          variants={variants}
          initial="initial"
          animate="animate"
        />
      </div>
    </div>
  );
};

export default Bar;
