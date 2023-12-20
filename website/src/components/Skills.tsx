import React from 'react';
import './animations.css'; // Importing the animations styles

const Skills = () => {
  return (
    <div id="skills" className="bg-gray-50 py-12 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 slide-in-left">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Replace with actual skills and use inline styles to set the `--skill-level` custom property */}
          <div className="skill-bar bg-gray-300 rounded-full overflow-hidden">
            <div className="skill-bar-fill bg-blue-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none" style={{ width: '90%' }}>Data Science 90%</div>
          </div>
          {/* Repeat for other skills */}
        </div>
      </div>
    </div>
  );
};

export default Skills;
