import React, { useEffect, useState } from 'react';

const Projects = () => {
    const [repos, setRepos] = useState([]);
    const [filteredRepos, setFilteredRepos] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [reposPerPage] = useState(6); // Number of repositories per page
    const [loading, setLoading] = useState(true);

    const GITHUB_USERNAME = 'Abdullah0703'; // Replace with your GitHub username
    const GITHUB_API_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos`;

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await fetch(GITHUB_API_URL);
                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }
                const data = await response.json();

                // Exclude specific repositories by name
                const excludedRepos = ['Abdullah0703', 'DS-Codes', 'DS-Project', 'DSB2017', 'SDA-PROJECT-WITHOUT-DB']; // Add the repo names to exclude
                const filtered = data.filter((repo) => !excludedRepos.includes(repo.name));

                setRepos(filtered);
                setFilteredRepos(filtered);
            } catch (error) {
                console.error('Failed to fetch repositories:', error);
            } finally {
                setLoading(false); // End loading after 2 seconds
            }
        };

        setTimeout(() => {
            fetchRepos();
        }, 500); // Simulating a 2-second delay before fetching data

    }, []);

    // Calculate current repositories for pagination
    const indexOfLastRepo = currentPage * reposPerPage;
    const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
    const currentRepos = filteredRepos.slice(indexOfFirstRepo, indexOfLastRepo);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    if (loading) {
        return (
            <div className="min-h-screen flex justify-center items-center bg-gray-900 text-gray-200">
                {/* Thematic Loading Spinner */}
                <div className="w-24 h-24 flex justify-center items-center">
                    <div className="animate-spin rounded-full border-t-4 border-[#43C6AC] border-dotted w-24 h-24 relative">
                        <div className="absolute inset-0 flex justify-center items-center text-xl font-mono text-[#43C6AC]">
                            <span className="animate-pulse">{"<>"}</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-900 text-gray-200 py-12 px-6">
            <h1 className="text-4xl sm:text-3xl text-center mb-10 font-extrabold">My Projects</h1>

            {/* Display Repositories */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-5">
                {currentRepos.map((repo) => (
                    <div
                        key={repo.id}
                        className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
                    >
                        <a
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xl font-semibold mb-2 text-[#43C6AC] hover:underline"
                        >
                            {repo.name}
                        </a>
                        <p className="text-sm sm:text-xs text-gray-400 mb-4 break-words">
                            {repo.description || 'No description provided'}
                        </p>
                    </div>
                ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center mt-10">
                {Array.from({ length: Math.ceil(filteredRepos.length / reposPerPage) }, (_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => paginate(index + 1)}
                        className={`mx-1 px-4 py-2 rounded-lg ${currentPage === index + 1
                            ? 'bg-[#43C6AC] text-gray-900'
                            : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                            } transition duration-300`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Projects;
