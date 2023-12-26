import React from 'react';
import './Footer.css'; // Ensure this file contains the necessary styles to match your site

/**
 * Footer component for the website.
 * It contains copyright information and social media links.
 * 
 * @returns JSX.Element The Footer component as a JSX Element.
 */
const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t-2 border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="text-center">
          <p className="text-gray-600 text-sm">
            {/* Display the current year and copyright information */}
            &copy; {new Date().getFullYear()} William Uyeta. All rights reserved.
          </p>
          <div className="mt-4">
            {/* LinkedIn link */}
            <a href="https://www.linkedin.com/in/william-uyeta-/" className="text-gray-600 hover:text-gray-800 mx-2">
              <i className="fab fa-linkedin"></i>
            </a>
            {/* GitHub link */}
            <a href="https://github.com/williamuy" className="text-gray-600 hover:text-gray-800 mx-2">
              <i className="fab fa-github"></i>
            </a>
            {/* Add any other social media or contact links here */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;