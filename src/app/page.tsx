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
import Storm from "@/components/Storm";
import Sharingan from "@/components/Sharingan";

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>("About");

  return (
    <main className="relative min-h-screen w-full">
      {/* ── BACKGROUND LAYER ── */}
      <div className="fixed inset-0 z-0">
        <Sharingan />
      </div>
      <Storm />

      {/* ── FOREGROUND CONTENT LAYER ── */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <div className="grid grid-cols-12 gap-6 my-14 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 overflow-x-hidden">
          {/* SIDEBAR CARD: Added /85 opacity to backgrounds and a backdrop-blur */}
          <div className="col-span-12 bg-white/15 dark:bg-dark-500/15 backdrop-blur-md lg:col-span-4 rounded-2xl p-4 text-center shadow-custom-light dark:shadow-custom-dark">
            <Sidebar />
          </div>

          <div className="flex flex-col col-span-12 bg-white/15 dark:bg-dark-500/15 backdrop-blur-md lg:col-span-8 rounded-2xl shadow-custom-light dark:shadow-custom-dark overflow-hidden">
            <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

            {/* Render components based on the active tab */}
            <div className="relative flex-grow h-full">
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

        {/* Footer pushed to the bottom of the foreground layer */}
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </main>
  );
}
