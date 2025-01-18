import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
    return (
        <footer className="bg-[#2d2d2d] text-white py-8">
            <div className="max-w-6xl mx-auto px-6">
                {/* Footer Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        <h3 className="text-2xl font-bold mb-4">Contact Info</h3>
                        <ul className="text-gray-400 space-y-3">
                            <li className="flex items-center">
                                <FaEnvelope className="text-[#43C6AC] mr-2" />{" "}
                                abdullahimtiaz371@gmail.com
                            </li>
                            <li className="flex items-center">
                                <FaGithub className="text-[#43C6AC] mr-2" />{" "}
                                <a
                                    href="https://github.com/Abdullah0703"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:underline"
                                >
                                    github.com/Abdullah0703
                                </a>
                            </li>
                            <li className="flex items-center">
                                <FaLinkedin className="text-[#43C6AC] mr-2" />{" "}
                                <a
                                    href="https://linkedin.com/in/abdullah-imtiaz371/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:underline"
                                >
                                    linkedin.com/in/abdullah-imtiaz371/
                                </a>
                            </li>
                        </ul>
                    </motion.div>
                </div>

                {/* Divider */}
                <div className="my-6 border-t border-gray-600"></div>

                {/* Footer Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} Abdullah Imtiaz. All rights reserved.
                    </p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a
                            href="https://github.com/Abdullah0703"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-[#43C6AC] transition duration-300"
                        >
                            <FaGithub size={20} />
                        </a>
                        <a
                            href="https://linkedin.com/in/abdullah-imtiaz371/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-[#43C6AC] transition duration-300"
                        >
                            <FaLinkedin size={20} />
                        </a>
                        <a
                            href="mailto:abdullahimtiaz371@gmail.com"
                            className="text-gray-400 hover:text-[#43C6AC] transition duration-300"
                        >
                            <FaEnvelope size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
