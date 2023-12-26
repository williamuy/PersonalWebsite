// Navbar.tsx
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa'; // Icons for the button
import './Navbar.css';

/**
 * Navbar component for the website.
 * It contains a dropdown menu that can be toggled open and closed.
 * The menu contains links that scroll to different sections of the page.
 * 
 * @returns JSX.Element The Navbar component as a JSX Element.
 */
const Navbar = () => {
  // State for whether the dropdown menu is open
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to toggle the dropdown menu open and closed
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <nav className="navbar">
      <div className="container mx-auto px-4 py-2 flex justify-end">
        {/* Button to toggle the dropdown menu. Shows a close icon when the menu is open, and a bars icon when it is closed. */}
        <button onClick={toggleDropdown} className="menu-button">
          {isDropdownOpen ? <FaTimes /> : <FaBars />}
        </button>
        {/* If the dropdown menu is open, show the links. */}
        {isDropdownOpen && (
          <div className="dropdown">
            {/* Each link scrolls to a different section of the page when clicked, and closes the dropdown menu. */}
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

// Export the Navbar component as the default export
export default Navbar;