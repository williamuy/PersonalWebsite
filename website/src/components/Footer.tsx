import React from 'react';
import './Footer.css'; // Ensure this file contains the necessary styles to match your site

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t-2 border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="text-center">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} William Uyeta. All rights reserved.
          </p>
          <div className="mt-4">
            <a href="https://www.linkedin.com/in/william-uyeta-/" className="text-gray-600 hover:text-gray-800 mx-2">
              {/* Replace with actual icons from whatever icon library you're using */}
              <i className="fab fa-linkedin"></i>
            </a>
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
