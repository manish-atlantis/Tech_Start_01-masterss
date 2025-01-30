import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';

// Import Heroicons
import { BriefcaseIcon } from '@heroicons/react/24/outline'; // Work icon
import { AcademicCapIcon } from '@heroicons/react/24/outline'; // School icon
import { StarIcon } from '@heroicons/react/24/solid'; // Star icon

const Timeline = () => {
  return (
    <div className="bg-black text-white py-10" id='projects'>
      {/* Animated Heading */}
      <motion.h2
        className="text-center text-4xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Projects
      </motion.h2>

      <VerticalTimeline>
        {/* Timeline Elements */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: '#4C89F1', color: '#fff' }}
          icon={<BriefcaseIcon className="h-6 w-6" />}
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="vertical-timeline-element-title text-lg font-semibold text-gray-700">E-Commerce Website</h3>
            <p className="text-gray-600">Adrenix</p>
            <a href="https://www.adrenix.in/" target="_blank" rel="noopener noreferrer">
              <motion.img 
                src="/images/pic1.png" 
                alt="Art Director" 
                className="timeline-image rounded-lg shadow-lg"
                whileHover={{ scale: 1.1 }}
              />
            </a>
          </motion.div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: '#E74C3C', color: '#fff' }}
          icon={<BriefcaseIcon className="h-6 w-6" />}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="vertical-timeline-element-title text-lg font-semibold text-gray-700">International Patient Website</h3>
            <p className="text-gray-600">Health Bridge International</p>
            <a href="https://health-bridge01.vercel.app/" target="_blank" rel="noopener noreferrer">
              <motion.img 
                src="/images/pic2.png" 
                alt="Web Designer" 
                className="timeline-image rounded-lg shadow-lg"
                whileHover={{ scale: 1.1 }}
              />
            </a>
          </motion.div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: '#4C89F1', color: '#fff' }}
          icon={<BriefcaseIcon className="h-6 w-6" />}
        >
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="vertical-timeline-element-title text-lg font-semibold text-gray-700">Gym Portfolio Website</h3>
            <p className="text-gray-600">User Experience, Visual Design</p>
            <a href="https://vocal-horse-bd4d1d.netlify.app/" target="_blank" rel="noopener noreferrer">
              <motion.img 
                src="/images/pic3.png" 
                alt="Web Designer" 
                className="timeline-image rounded-lg shadow-lg"
                whileHover={{ scale: 1.1 }}
              />
            </a>
          </motion.div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: '#E74C3C', color: '#fff' }}
          icon={<BriefcaseIcon className="h-6 w-6" />}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="vertical-timeline-element-title text-lg font-semibold text-gray-700">Real Estate Portfolio Website</h3>
            <a href="https://static-web21.netlify.app/" target="_blank" rel="noopener noreferrer">
              <motion.img 
                src="/images/pic4.png" 
                alt="Content Marketing" 
                className="timeline-image rounded-lg shadow-lg"
                whileHover={{ scale: 1.1 }}
              />
            </a>
          </motion.div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: '#4C89F1', color: '#fff' }}
          icon={<BriefcaseIcon className="h-6 w-6" />}
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="vertical-timeline-element-title text-gray-700 text-lg font-semibold">Inventory Management Website</h3>
            <p className="text-gray-600">Elastomech India</p>
            <a href="https://elastomechinventory.in/" target="_blank" rel="noopener noreferrer">
              <motion.img 
                src="/images/pic5.png" 
                alt="Agile Development" 
                className="timeline-image rounded-lg shadow-lg"
                whileHover={{ scale: 1.1 }}
              />
            </a>
          </motion.div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
