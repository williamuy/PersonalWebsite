import React from 'react';
import './HomePage.css';
import WindCharacter from './WindCharacter.png';
import LinkedInIcon from './LinkedInIcon.svg';
import GitHubIcon from './GitHubIcon.svg';
import { MdLocationOn } from 'react-icons/md';
import Typewriter from './Typewriter';
import './animations.css';

// Assuming you have a Button component defined, import it here.
// If you don't have one, you can create a simple one as shown after this component.

const technologies = ["TypeScript", "React", "Tailwind CSS", "DALL·E 3"];

const Home = () => {
  // Update the link to your actual CV
  const cvLink = 'William_Uyeta_CV.pdf';

  return (
    <div id="home" className="hero-container">
      <img src={WindCharacter} alt="Wind Character" className="wind-character fade-in" style={{ animationDelay: '1.8s' }} />
      <div className="hero-content mt-10">
        <h1 className="hero-heading fade-in" style={{ animationDelay: '0.6s' }}>Hi, I'm William.</h1>
        <p className="hero-location fade-in" style={{ animationDelay: '0.9s' }}><MdLocationOn /> Seattle, WA</p>
        <p className="hero-subheading fade-in" style={{ animationDelay: '1.2s' }}>
          I'm currently a student at the University of Washington, where I specialize in Data Science and Software Development 🚀
        </p>
        <div className="button-group fade-in" style={{ animationDelay: '1.5s' }}>
          <a href={cvLink} download className="button-black">Download CV</a>
          {/* For Contact Info, you can use window.scrollTo or react-scroll as per your page setup */}
          <button onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })} className="button-white">Contact Info</button>
        </div>
        <div className="social-buttons fade-in" style={{ animationDelay: '1.8s' }}>
          <a href="https://www.linkedin.com/in/william-uyeta-/" target="_blank" rel="noopener noreferrer" className="social-button">
            <img src={LinkedInIcon} alt="LinkedIn" className="social-icon" /> LinkedIn
          </a>
          <a href="https://github.com/williamuy" target="_blank" rel="noopener noreferrer" className="social-button">
            <img src={GitHubIcon} alt="GitHub" className="social-icon" /> GitHub
          </a>
        </div>
        <div className="typewriter-container fade-in mt-4" style={{ animationDelay: '2.1s' }}>
          <Typewriter words={technologies} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default Home;

