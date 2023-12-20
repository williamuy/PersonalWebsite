// Navbar.tsx
import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto px-4 py-2 flex justify-end">
        <Link className="cursor-pointer text-gray-800 hover:text-blue-700 px-3 py-2 transition-colors duration-300" to="home" smooth={true} duration={500} spy={true}>Home</Link>
        <Link className="cursor-pointer text-gray-800 hover:text-blue-700 px-3 py-2 transition-colors duration-300" to="about" smooth={true} duration={500} spy={true}>About</Link>
        <Link className="cursor-pointer text-gray-800 hover:text-blue-700 px-3 py-2 transition-colors duration-300" to="skills" smooth={true} duration={500} spy={true}>Skills</Link>
        <Link className="cursor-pointer text-gray-800 hover:text-blue-700 px-3 py-2 transition-colors duration-300" to="portfolio" smooth={true} duration={500} spy={true}>Portfolio</Link>
        <Link className="cursor-pointer text-gray-800 hover:text-blue-700 px-3 py-2 transition-colors duration-300" to="contact" smooth={true} duration={500} spy={true}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
