import './index.css';
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ProfilePic from '../public/7309681.jpg';
import axios from 'axios';  // Import Axios
import { FaLinkedin, FaGithub } from 'react-icons/fa';  // Import LinkedIn and GitHub icons
import Searchbar from './Searchbar';

const Navbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        from: '',
        message: ''
    });
    const [isSending, setIsSending] = useState(false);  // State for tracking sending process
    const [messageStatus, setMessageStatus] = useState(null);  // State for status message (success/error)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to handle dropdown visibility
    const dropdownRef = useRef(null); // To handle click outside the dropdown

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsSending(true);  // Set sending state to true
        setMessageStatus(null);  // Reset any previous message status

        try {
            // Sending the form data to the backend
            await axios.post('http://localhost:5000/send-email', formData);
            setIsModalOpen(false);  // Close modal after submission
            setMessageStatus('success');  // Set status as success
            alert('Email sent successfully!');
            setFormData({ from: '', message: '' });  // Clear the form fields

            // Reset messageStatus after 3 seconds
            setTimeout(() => setMessageStatus(null), 500);  // Reset status message after 0.5 seconds
        } catch (error) {
            console.error('Error sending email:', error);
            setMessageStatus('error');  // Set status as error
            alert('Error sending email');

            // Reset messageStatus after 3 seconds
            setTimeout(() => setMessageStatus(null), 3000);  // Reset status message after 3 seconds
        } finally {
            setIsSending(false);  // Reset sending state after completion
        }
    };

    // Close dropdown if click is outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    return (
        <nav className="flex items-center justify-between bg-gray-900 text-gray-200 shadow-lg font-mono">
            {/* Left Section: Logo or About */}
            <div className="flex items-center space-x-4 ml-4 mt-2.5">
                <Link to="/About" className="text-lg font-bold tracking-wide text-gray-200 hover:text-gray-400 transition-colors">
                    About
                </Link>
            </div>

            {/* Right Section: Links and Icons */}
            <div className="flex items-center space-x-6">
                <a
                    href="#"
                    className="text-lg font-bold tracking-wide text-gray-200 hover:text-gray-400 transition-colors mt-2.5"
                    onClick={() => setIsModalOpen(true)} // Open modal when Gmail is clicked
                >
                    Gmail
                </a>

                {/* 6x6 Grid Icon to Trigger Dropdown */}
                <div className="relative" ref={dropdownRef}>
                    <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="text-lg font-bold tracking-wide text-gray-200 hover:text-gray-400 transition-colors"
                    >
                        {/* Custom 6x6 Grid of Dots */}
                        <div className="grid grid-cols-3 gap-1">
                            {Array.from({ length: 9 }).map((_, index) => (
                                <div
                                    key={index}
                                    className="w-1 h-1 rounded-full bg-gray-200"
                                ></div>
                            ))}
                        </div>
                    </button>

                    {/* Dropdown Menu with Smooth Animation */}
                    <div
                        className={`absolute top-8 right-0 bg-gray-800 text-gray-200 p-6 w-72 rounded-lg shadow-lg flex flex-col space-y-4 transform ${isDropdownOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'} transition-transform transition-opacity duration-300`}
                        style={{ pointerEvents: isDropdownOpen ? 'auto' : 'none' }}
                    >
                        <a
                            href="https://www.linkedin.com/in/abdullah-imtiaz371/"
                            target="_blank"
                            className="flex items-center text-lg font-semibold tracking-wide text-gray-200 hover:text-gray-400 transition-colors"
                        >
                            <FaLinkedin className="inline mr-4 text-blue-500" /> LinkedIn
                        </a>
                        <a
                            href="https://github.com/Abdullah0703"
                            target="_blank"
                            className="flex items-center text-lg font-semibold tracking-wide text-gray-200 hover:text-gray-400 transition-colors"
                        >
                            <FaGithub className="inline mr-4 text-gray-900" /> GitHub
                        </a>
                    </div>
                </div>

                <Link to="/" className="w-11 h-11 rounded-full overflow-hidden ml-3 mt-2">
                    <img src={ProfilePic} alt="Profile" className="w-full h-full object-cover" />
                </Link>
            </div>

            {/* Modal for Email Form */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50">
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md mx-4 sm:mx-auto">
                        <h2 className="text-xl font-bold mb-4 text-gray-200">Send Message</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-sm font-semibold mb-2 text-gray-200">From</label>
                                <input
                                    type="email"
                                    name="from"
                                    value={formData.from}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-600 rounded-lg bg-gray-900 text-gray-200"
                                    placeholder="Your email address"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-semibold mb-2 text-gray-200">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-600 rounded-lg bg-gray-900 text-gray-200"
                                    placeholder="Your message"
                                    rows="4"
                                    required
                                />
                            </div>
                            <div className="flex justify-end space-x-4">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className={`px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 relative ${isSending ? 'cursor-wait' : ''}`}
                                >
                                    {isSending ? (
                                        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                                            <svg
                                                className="animate-spin h-6 w-6 text-white"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                            >
                                                <circle
                                                    className="opacity-25"
                                                    cx="12"
                                                    cy="12"
                                                    r="10"
                                                    stroke="currentColor"
                                                    strokeWidth="4"
                                                />
                                                <path
                                                    className="opacity-75"
                                                    fill="currentColor"
                                                    d="M4 12a8 8 0 0 1 16 0a8 8 0 0 1-16 0z"
                                                />
                                            </svg>
                                        </div>
                                    ) : (
                                        'Send'
                                    )}
                                </button>
                            </div>
                        </form>

                        {/* Display status message */}
                        {messageStatus === 'success' && (
                            <p className="text-green-500 mt-4">Email sent successfully!</p>
                        )}
                        {messageStatus === 'error' && (
                            <p className="text-red-500 mt-4">Error sending email, please try again.</p>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
