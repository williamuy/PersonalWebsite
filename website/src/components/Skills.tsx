import React from 'react';
import './Skills.css'; // Ensure you have this CSS file for any additional styles
import { FaCode, FaDatabase, FaServer, FaChartBar, FaPython, FaBookOpen } from 'react-icons/fa';

/**
 * SkillsPage component for the website.
 * It displays a list of skills.
 * 
 * @returns JSX.Element The SkillsPage component as a JSX Element.
 */
const SkillsPage = () => {
  return (
    <div className="bg-gray-100 py-8">
      <main id="skills" className="mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <p className="text-lg text-gray-600">Explore My</p>
          <h1 className="text-5xl text-gray-800 font-bold">Skill Set</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Skill Card for Coding */}
          <div className="skills-card bg-white p-6 rounded-xl shadow-xl text-center transform transition duration-500 hover:scale-105">
            <span className="text-indigo-600">
              <FaCode size={50} />
            </span>
            <h2 className="text-xl font-semibold mt-4">Frontend Development</h2>
            <p className="text-md">React, Tailwind CSS, Node, Firebase, Blazor</p>
          </div>
          {/* Skill Card for Databases */}
          <div className="skills-card bg-white p-6 rounded-xl shadow-xl text-center transform transition duration-500 hover:scale-105">
            <span className="text-green-600">
              <FaDatabase size={50} />
            </span>
            <h2 className="text-xl font-semibold mt-4">Databases</h2>
            <p className="text-md">MySQL</p>
          </div>
          {/* Skill Card for Backend */}
          <div className="skills-card bg-white p-6 rounded-xl shadow-xl text-center transform transition duration-500 hover:scale-105">
            <span className="text-red-600">
              <FaServer size={50} />
            </span>
            <h2 className="text-xl font-semibold mt-4">Backend Development</h2>
            <p className="text-md">FastAPI, AWS Route 53</p>
          </div>
          {/* Data Science Card */}
          <div className="skills-card bg-white p-6 rounded-xl shadow-xl text-center transform transition duration-500 hover:scale-105">
            <span className="text-blue-600">
              <FaChartBar size={50} />
            </span>
            <h2 className="text-xl font-semibold mt-4">Data Science</h2>
            <p className="text-md">Pandas, Numpy, Matplotlib, Seaborn </p>
          </div>
          {/* Programming Languages Card */}
          <div className="skills-card bg-white p-6 rounded-xl shadow-xl text-center transform transition duration-500 hover:scale-105">
            <span className="text-yellow-600">
              <FaPython size={50} />
            </span>
            <h2 className="text-xl font-semibold mt-4">Programming Languages</h2>
            <p className="text-md">Python, TypeScript, Java, SQL</p>
          </div>
          {/* Current Learning Card */}
          <div className="skills-card bg-white p-6 rounded-xl shadow-xl text-center transform transition duration-500 hover:scale-105">
            <span className="text-purple-600">
              <FaBookOpen size={50} />
            </span>
            <h2 className="text-xl font-semibold mt-4">Current Learning</h2>
            <p className="text-md">Neural Networks, MongoDB, AWS</p>
          </div>
        </div>
      </main>
    </div>
  );
};

// Export the SkillsPage component as the default export
export default SkillsPage;