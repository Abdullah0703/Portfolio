import React from 'react';
import { motion } from 'framer-motion';
import { FaJava, FaReact, FaNodeJs, FaDatabase, FaGithub } from 'react-icons/fa';
import { SiC, SiJavascript, SiChakraui, SiExpress, SiHtml5, SiSequelize, SiBootstrap } from 'react-icons/si';
import Resume from "../public/Abdullah_Resume_latest.pdf";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 py-8 px-5 font-mono overflow-y-auto">
      <motion.div
        className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* About Section Card */}
        <div className="bg-gray-800 text-gray-200 p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-extrabold mb-4">About Abdullah Imtiaz</h1>
          <p className="text-lg mb-6">
            Innovative Software Engineering Student with a proven ability to design and deliver full-stack solutions that blend
            technical precision with user-centric creativity. Proficient in leveraging cutting-edge technologies, including Java,
            JavaScript, React JS, Node.js, Express.js, MongoDB, PostgreSQL, and more to build scalable, high-performance applications.
            Passionate about solving complex problems, driving innovation, and delivering impactful software solutions that exceed
            expectations.
          </p>
          {/* Centered Resume Button */}
          <div className="flex justify-center mt-6">
            <a
              href={Resume}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-teal-500 text-gray-200 py-2 px-6 rounded-full hover:bg-teal-400 transition duration-300"
            >
              Download/View Resume
            </a>
          </div>
        </div>

        {/* Technical Skills Card */}
        <div className="bg-gray-800 text-gray-200 p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-extrabold mb-4">Technical Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <motion.div
              className="text-center"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <FaJava size={50} className="mx-auto mb-2" />
              <p>Java</p>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <SiC size={50} className="mx-auto mb-2" />
              <p>C</p>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <SiHtml5 size={50} className="mx-auto mb-2" />
              <p>HTML5</p>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <SiJavascript size={50} className="mx-auto mb-2" />
              <p>JavaScript</p>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.6 }}
            >
              <FaReact size={50} className="mx-auto mb-2" />
              <p>React JS</p>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.6 }}
            >
              <FaNodeJs size={50} className="mx-auto mb-2" />
              <p>Node.js</p>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.6 }}
            >
              <SiExpress size={50} className="mx-auto mb-2" />
              <p>Express.js</p>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.7, duration: 0.6 }}
            >
              <SiSequelize size={50} className="mx-auto mb-2" />
              <p>Sequelize ORM</p>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.9, duration: 0.6 }}
            >
              <FaDatabase size={50} className="mx-auto mb-2" />
              <p>MongoDB / PostgreSQL</p>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 2.1, duration: 0.6 }}
            >
              <SiBootstrap size={50} className="mx-auto mb-2" />
              <p>Bootstrap</p>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 2.3, duration: 0.6 }}
            >
              <FaGithub size={50} className="mx-auto mb-2" />
              <p>Git / GitHub</p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;