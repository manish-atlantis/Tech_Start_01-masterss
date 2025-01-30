import React from 'react';
import { motion } from 'framer-motion';

const Hero2 = () => {
  return (
    <section className="relative w-full bg-black py-20 px-6 sm:px-12 text-white font-sans" id='hero'>
      {/* Background Grid Effect */}
      <motion.div
        className="absolute inset-0 bg-gray-900 opacity-30"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="max-w-lg">
          <motion.h1
            className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-tight text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Trust. Technology. Together.
          </motion.h1>

          <motion.p
            className="mt-6 text-lg text-gray-300 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            At <span className="font-bold">Web Atlantis</span>, we turn your ideas into reality
            with cutting-edge <span className="font-bold">full-stack development</span>. From 
            concept to execution, we build scalable, high-performance web solutions 
            that drive success.
          </motion.p>
        </div>

        {/* Right Logo Section */}
        <motion.div
          className="flex-shrink-0 mt-12 lg:mt-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <img
            src="/images/logo.png"
            alt="Web Atlantis Logo"
            className="w-64 sm:w-80 mx-auto"
          />
        </motion.div>
      </div>

      {/* Roadmap Section */}
      <motion.div
        className="relative mt-16 max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <h2 className="text-3xl font-bold text-white">Our Process</h2>
        <div className="mt-6 space-y-6 border-l-2 border-gray-700 pl-6">
          {[
            { step: 'Step 1', title: 'Consultation', desc: 'Understanding your vision and goals.', color: 'bg-blue-500' },
            { step: 'Step 2', title: 'Planning', desc: 'Crafting a strategy for seamless execution.', color: 'bg-yellow-500' },
            { step: 'Step 3', title: 'Design & Development', desc: 'Building your dream web solution.', color: 'bg-green-500' },
            { step: 'Step 4', title: 'Launch & Support', desc: 'Ensuring success with ongoing support.', color: 'bg-purple-500' }
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              <span className={`w-4 h-4 rounded-full ${item.color}`}></span>
              <div>
                <p className="text-xl font-semibold text-white">{item.step} • {item.title}</p>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero2;
