"use client";

import { useState } from "react";
import {
  frontendSkills,
  backendSkills,
  web3Skills,
  databaseSkills,
  cloudSkills,
  shopifySkills,
  aiWorkflowSkills,
  testingSkills,
} from "@/data";
import Bar from "./Bar";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIngUP } from "@/animations";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const skillSections = [
  { title: "Frontend", skills: frontendSkills },
  { title: "Backend", skills: backendSkills },
  { title: "Web3 & Blockchain", skills: web3Skills },
  { title: "Databases", skills: databaseSkills },
  { title: "Cloud & DevOps", skills: cloudSkills },
  { title: "Shopify & CMS", skills: shopifySkills },
  { title: "AI & Workflow Automation", skills: aiWorkflowSkills },
  { title: "Testing & Optimization", skills: testingSkills },
];

// Pair sections into slides: 2 per slide → 4 slides total
const slides = Array.from({ length: Math.ceil(skillSections.length / 2) }, (_, i) =>
  skillSections.slice(i * 2, i * 2 + 2)
);

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 280 : -280, opacity: 0 }),
  center: { x: 0, opacity: 1, transition: { duration: 0.35, ease: "easeOut" } },
  exit: (dir: number) => ({
    x: dir > 0 ? -280 : 280,
    opacity: 0,
    transition: { duration: 0.25, ease: "easeIn" },
  }),
};

const Resume = () => {
  const [slide, setSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = (idx: number) => {
    setDirection(idx > slide ? 1 : -1);
    setSlide(idx);
  };

  const prev = () => goTo((slide - 1 + slides.length) % slides.length);
  const next = () => goTo((slide + 1) % slides.length);

  return (
    <div className="px-6 py-2">
      {/* Education & Experience */}
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
            <p className="font-semibold">University of Ibadan (2018–2023)</p>
            <p className="my-3">知る心は自由な心である</p>
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">FullStack Engineer</h5>
            <p className="font-semibold">Feelize (2025 – Present)</p>
            <p className="my-3">Currently developing business and AI client software</p>
          </div>
        </div>
      </motion.div>

      {/* Technical Skills Carousel */}
      <motion.div variants={fadeIngUP} initial="initial" animate="animate">
        <div className="flex items-center justify-between mb-3 mt-4">
          <h5 className="text-2xl font-bold">Technical Skills</h5>
          <div className="flex items-center gap-1">
            <button
              onClick={prev}
              className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-dark-200 transition-colors"
              aria-label="Previous"
            >
              <MdChevronLeft className="text-2xl text-gray-600 dark:text-gray-400" />
            </button>
            <div className="flex gap-1.5 mx-1">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === slide
                      ? "w-5 bg-green"
                      : "w-1.5 bg-gray-300 dark:bg-dark-200"
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-dark-200 transition-colors"
              aria-label="Next"
            >
              <MdChevronRight className="text-2xl text-gray-600 dark:text-gray-400" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={slide}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="grid gap-5 md:grid-cols-2"
            >
              {slides[slide].map(({ title, skills }) => (
                <div
                  key={title}
                  className="bg-gray-100 dark:bg-dark-200 rounded-xl p-4 border border-gray-200 dark:border-dark-500"
                >
                  <h6 className="text-xs font-bold uppercase tracking-widest mb-3 pb-2 border-b border-gray-200 dark:border-dark-500 text-green dark:text-white">
                    {title}
                  </h6>
                  {skills.map((skill) => (
                    <Bar data={skill} key={skill.name} />
                  ))}
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default Resume;
