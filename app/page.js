"use client";

import { motion } from "framer-motion";

import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MyServices from "./components/MyServices";
import Navbar from "./components/Navbar";
import Socials from "./components/Socials";
import Work from "./components/Work";
import Experience from "./components/Experience";

/* Container Animation */
const containerVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Delay between sections
      delayChildren: 0.3,
    },
  },
};

/* Section Animation */
const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function Home() {
  return (
    <>
      {/* Navbar (Animate on Load) */}
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <Navbar />
      </motion.div>

      {/* Main Page Container */}
      <motion.main
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="overflow-hidden"
      >
        {/* Hero */}
        <motion.div variants={sectionVariants}>
          <Header />
        </motion.div>

        {/* About */}
        <motion.div variants={sectionVariants}>
          <About />
        </motion.div>

        {/* Experience */}
        <motion.div variants={sectionVariants}>
              <Experience/>
        </motion.div>

        {/* Services */}
        <motion.div variants={sectionVariants}>
          <MyServices />
        </motion.div>

        {/* Work */}
        <motion.div variants={sectionVariants}>
          <Work />
        </motion.div>

        {/* Socials */}
        <motion.div variants={sectionVariants}>
          <Socials />
        </motion.div>

        {/* Contact */}
        <motion.div variants={sectionVariants}>
          <Contact />
        </motion.div>

        {/* Footer */}
        <motion.div variants={sectionVariants}>
          <Footer />
        </motion.div>
      </motion.main>
    </>
  );
}
