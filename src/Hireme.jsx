import React from 'react';
import { motion } from 'framer-motion';

const HireMe = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-[#1f2937] relative overflow-hidden">
      {/* Animated Coding Elements */}
      <motion.div
        className="absolute top-10 left-10 text-4xl text-[#43C6AC] font-mono opacity-20"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 100, opacity: 0.8 }}
        transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}
      >
        {`<code>`}
      </motion.div>
      <motion.div
        className="absolute bottom-12 right-10 text-4xl text-[#43C6AC] font-mono opacity-20"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: -100, opacity: 0.8 }}
        transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}
      >
        {`</code>`}
      </motion.div>

      <motion.div
        className="w-full max-w-4xl p-8 text-center bg-[#2d3748] rounded-lg shadow-2xl"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {/* Heading */}
        <motion.h1
          className="text-5xl font-extrabold text-[#43C6AC] mb-6"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Why Hire Me?
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-2xl text-gray-300 mb-10"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          As a Software Engineering student, I possess a unique blend of creativity, technical expertise, and an unwavering commitment to excellence. My passion for problem-solving and creating innovative, efficient solutions drives me to continuously learn and push the boundaries of what's possible. With a keen eye for detail and a determination to make a meaningful impact, I am ready to contribute to cutting-edge projects and drive success in any team. Whether optimizing systems, building user-centric applications, or tackling complex challenges, I’m eager to bring my skills to the table and make a lasting difference.
        </motion.p>
      </motion.div>

      {/* Floating Binary Animation */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ repeat: Infinity, duration: 4 }}
      >
        <div className="flex justify-center items-center h-full">
          <span className="text-8xl font-bold text-[#43C6AC] opacity-10 animate-bounce"> {/* Adjusted to accent color */}
            1010
          </span>
          <span className="text-8xl font-bold text-[#43C6AC] opacity-10 animate-bounce delay-200"> {/* Adjusted to accent color */}
            0101
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default HireMe;
