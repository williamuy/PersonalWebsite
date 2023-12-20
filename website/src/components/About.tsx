import React from 'react';
import './animations.css'; // Importing the animations styles

const About = () => {
  return (
    <div id="about" className="bg-white py-12 px-4">
      <div className="container mx-auto">
        <div className="text-left slide-in-left">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <p className="text-gray-700 mb-4">
            I'm currently a student at the University of Washington, where I specialize in Data Science
            and Software Development.
          </p>
          {/* Add more content about yourself here */}
        </div>
      </div>
    </div>
  );
};

export default About;
