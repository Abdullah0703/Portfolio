import React, { useState } from 'react';
import { FaUserTie, FaProjectDiagram, FaMicrophone } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Searchbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showModal, setShowModal] = useState(false); // State for modal visibility
  const [modalMessage, setModalMessage] = useState(''); // State for modal message

  // Dropdown animation variants
  const dropdownVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2, ease: 'easeInOut' } },
  };

  // Handle microphone click
  const handleMicClick = () => {
    setModalMessage('Voice mode could not be activated... but hey, don’t worry! 🤖\nJust kidding, try again! 😄'); // Updated funny techy message
    setShowModal(true);

    // Hide the modal after 1 second
    setTimeout(() => {
      setShowModal(false);
    }, 1500);
  };

  return (
    <div
      id="search"
      className="flex items-center justify-center min-h-screen bg-gray-900 overflow-hidden font-mono px-4"
    >
      <div className="relative w-full max-w-xl text-center">
        {/* Title */}
        <motion.h1
          className="font-extrabold text-4xl sm:text-6xl text-gray-100 mb-6"
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Abdullah_Imtiaz
        </motion.h1>

        {/* Input Field and Microphone */}
        <div className="relative flex items-center">
          {/* Search Bar */}
          <motion.input
            type="text"
            placeholder="Search here..."
            className="border-2 border-gray-700 bg-gray-800 text-gray-100 rounded-lg px-4 pr-12 focus:outline-none focus:ring-4 focus:ring-blue-500 w-full h-12 shadow-md transition-all text-sm sm:text-base"
            onFocus={() => setShowDropdown(true)}
            onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          />

          {/* Animated Microphone Icon */}
          <motion.div
            className="absolute right-4 top-[29%] transform -translate-y-1/2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.5, // Delays the icon animation until after the search bar animation ends
              duration: 0.5,
              ease: 'easeInOut',
            }}
          >
            <FaMicrophone
              className="text-gray-400 cursor-pointer hover:text-red-500 transition-colors"
              size={18}
              onClick={handleMicClick} // Trigger modal on click
            />
          </motion.div>
        </div>

        {/* Dropdown Menu */}
        <AnimatePresence>
          {showDropdown && (
            <motion.div
              className="absolute top-full mt-2 left-0 w-full bg-gray-800 border border-gray-700 rounded-lg shadow-lg"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={dropdownVariants}
            >
              <ul className="text-gray-100">
                <li className="flex items-center px-4 py-2 hover:bg-gray-700 cursor-pointer transition-colors">
                  <Link to="/hire-me" className="flex items-center">
                    <FaUserTie className="mr-2 text-green-400" />
                    Why hire me
                  </Link>
                </li>
                <li className="flex items-center px-4 py-2 hover:bg-gray-700 cursor-pointer transition-colors">
                  <Link to="/projects" className="flex items-center">
                    <FaProjectDiagram className="mr-2 text-blue-400" />
                    Projects
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Modal for microphone failure message */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-72 text-center">
              <p className="text-gray-100 text-sm sm:text-base">{modalMessage}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Searchbar;
