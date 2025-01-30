import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative h-screen bg-black overflow-hidden flex items-center justify-center ">
      {/* Background Scrolling Text - Row 1 */}
      <motion.div
        className="absolute top-0 w-full whitespace-nowrap flex overflow-hidden"
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{
          repeat: Infinity,
          duration: 15,
          ease: "linear",
        }}
      >
        <div className="flex gap-16 text-gray-800 text-[8rem] md:text-[10rem] font-extrabold uppercase tracking-wider">
          {[...Array(10)].map((_, index) => (
            <span key={index}>Trust. Technology. Together. </span>
          ))}
        </div>
      </motion.div>

      {/* Background Scrolling Text - Row 2 */}
      <motion.div
        className="absolute top-1/4 w-full whitespace-nowrap flex overflow-hidden"
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{
          repeat: Infinity,
          duration: 15,
          ease: "linear",
        }}
      >
        <div className="flex gap-16 text-gray-700 text-[8rem] md:text-[10rem] font-extrabold uppercase tracking-wider">
          {[...Array(10)].map((_, index) => (
            <span key={index}>Web Atlantis</span>
          ))}
        </div>
      </motion.div>

      {/* Background Scrolling Text - Row 3 */}
      <motion.div
        className="absolute top-1/2 w-full whitespace-nowrap flex overflow-hidden"
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{
          repeat: Infinity,
          duration: 15,
          ease: "linear",
        }}
      >
        <div className="flex gap-16 text-gray-800 text-[8rem] md:text-[10rem] font-extrabold uppercase tracking-wider">
          {[...Array(10)].map((_, index) => (
            <span key={index}>Trust. Technology. Together. </span>
          ))}
        </div>
      </motion.div>

      {/* Background Scrolling Text - Row 4 */}
      <motion.div
        className="absolute top-3/4 w-full whitespace-nowrap flex overflow-hidden"
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{
          repeat: Infinity,
          duration: 15,
          ease: "linear",
        }}
      >
        <div className="flex gap-16 text-gray-700 text-[8rem] md:text-[10rem] font-extrabold uppercase tracking-wider">
          {[...Array(10)].map((_, index) => (
            <span key={index}>Web Atlantis</span>
          ))}
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 text-center p-8">
        <motion.h1
          className="text-6xl md:text-8xl font-extrabold text-white uppercase tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Web <span className="text-blue-500">Atlantis</span>
        </motion.h1>
        <motion.p
          className="mt-6 text-xl md:text-2xl text-gray-400 font-light tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Your Partner in Digital Transformation. Uniting Trust, Technology, and
          Excellence.
        </motion.p>
        <motion.button
          className="mt-10 px-10 py-4 text-lg font-bold uppercase tracking-wider text-black bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-xl hover:scale-105 transition-transform"
          whileHover={{ scale: 1.1 }}
        >
          Get Started
        </motion.button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 w-full flex justify-center">
        <motion.div
          className="w-12 h-12 border-2 border-blue-500 rounded-full flex items-center justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span className="text-blue-500 text-3xl">&#8595;</span>
        </motion.div>
      </div>
    </div>
  );
}
