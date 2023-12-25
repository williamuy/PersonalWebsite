// Navbar.tsx
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa'; // Icons for the button
import './Navbar.css';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <nav className="navbar">
      <div className="container mx-auto px-4 py-2 flex justify-end">
        <button onClick={toggleDropdown} className="menu-button">
          {isDropdownOpen ? <FaTimes /> : <FaBars />}
        </button>
        {isDropdownOpen && (
          <div className="dropdown">
            <Link to="home" smooth={true} duration={500} onClick={toggleDropdown}>Home</Link>
            <Link to="about" smooth={true} duration={500} onClick={toggleDropdown}>About</Link>
            <Link to="skills" smooth={true} duration={500} onClick={toggleDropdown}>Skills</Link>
            <Link to="projects" smooth={true} duration={500} onClick={toggleDropdown}>Projects</Link>
            <Link to="experience" smooth={true} duration={500} onClick={toggleDropdown}>Experience</Link>
            <Link to="contact" smooth={true} duration={500} onClick={toggleDropdown}>Contact</Link>

            {/* ... more links */}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

