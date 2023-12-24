import React from 'react';
import './HomePage.css';
import WindCharacter from './WindCharacter.png';
import Button from './Button';
import LinkedInIcon from './LinkedInIcon.svg';
import GitHubIcon from './GitHubIcon.svg';
import './animations.css';
import { MdLocationOn } from 'react-icons/md'; // Import location icon

const Home = () => {
  return (
    <div id="home" className="hero-container">
      <img src={WindCharacter} alt="Wind Character" className="wind-character fade-in" style={{ animationDelay: '1.8s' }} />
      <div className="hero-content">
        <h1 className="hero-heading fade-in" style={{ animationDelay: '0.6s' }}>Hi, I'm William.</h1>
        <p className="hero-location fade-in" style={{ animationDelay: '0.9s' }}><MdLocationOn /> Seattle, WA</p>
        <p className="hero-subheading fade-in" style={{ animationDelay: '1.2s' }}>
          I'm currently a student at the University of Washington, where I specialize in Data Science and Software Development 🚀
        </p>
        <div className="button-group fade-in" style={{ animationDelay: '1.5s' }}>
          <Button color="black">Download CV</Button>
          <Button color="white">Contact Info</Button>
        </div>
        <div className="social-buttons fade-in" style={{ animationDelay: '1.8s' }}>
          <a href="https://www.linkedin.com/in/william-uyeta-/" target="_blank" rel="noopener noreferrer" className="social-button">
            <img src={LinkedInIcon} alt="LinkedIn" className="social-icon" /> LinkedIn
          </a>
          <a href="https://github.com/williamuy" target="_blank" rel="noopener noreferrer" className="social-button">
            <img src={GitHubIcon} alt="GitHub" className="social-icon" /> GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
