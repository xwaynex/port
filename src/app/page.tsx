"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import Resume from "@/components/Resume";
import Projects from "@/components/Projects";
import About from "@/components/About";
import { AnimatePresence, motion } from "framer-motion";
import { tabAnimation } from "@/animations";
import Footer from "@/components/Footer";

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>("About");

  return (
    <>
      <div className="grid grid-cols-12 gap-6 my-14 px-5 lg:px-48 sm:px:20 md:px-32 ">
        <div className="col-span-12 bg-white dark:bg-dark-500 lg:col-span-4 rounded-2xl p-4 text-center shadow-custom-light dark:shadow-custom-dark">
          <Sidebar />
        </div>
        <div className="flex flex-col col-span-12 bg-white dark:bg-dark-500  lg:col-span-8 rounded-2xl shadow-custom-light dark:shadow-custom-dark overflow-hidden">
          {" "}
          <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
          {/* Render components based on the active tab */}
          <div className="relative flex-grrow h-full">
            <AnimatePresence mode="wait">
              <motion.div
                className="flex-grow h-full"
                key={activeTab}
                variants={tabAnimation}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                {activeTab === "About" && <About />}
                {activeTab === "Projects" && <Projects />}
                {activeTab === "Resume" && <Resume />}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
