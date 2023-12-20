import React from 'react';
import './animations.css'; // Importing the animations styles

const Portfolio = () => {
  return (
    <div id="portfolio" className="bg-white py-12 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 slide-in-left">Portfolio</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Repeat this for each project */}
          <div className="project-card bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition-all">
            <h3 className="font-bold text-lg">Project Name</h3>
            <p className="text-gray-600">Short description of the project.</p>
            {/* Add more details and a link to the project */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
