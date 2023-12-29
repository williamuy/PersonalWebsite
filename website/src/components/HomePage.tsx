import './HomePage.css';
import WindCharacter from './Assets/WindCharacter.png';
import LinkedInIcon from './Assets/LinkedInIcon.svg';
import GitHubIcon from './Assets/GitHubIcon.svg';
import { MdLocationOn } from 'react-icons/md';
import Typewriter from './Typewriter';
import './animations.css';

// Array of technologies to be displayed in the typewriter effect
const technologies = ["TypeScript", "React", "Tailwind CSS", "Firebase", "Route 53", "DALL·E 3"];

/**
 * Home component for the website.
 * It contains a hero section with a typewriter effect, social media links, and a downloadable CV.
 * 
 * @returns JSX.Element The Home component as a JSX Element.
 */
const Home = () => {
  // Link to your downloadable CV
  const cvLink = 'William_Uyeta_CV.pdf';

  return (
    <div id="home" className="hero-container">
      {/* Character image with fade-in animation */}
      <img src={WindCharacter} alt="Wind Character" className="wind-character fade-in" style={{ animationDelay: '.7s' }} />

      {/* Main content area */}
      <div className="hero-content mt-10">
        {/* Heading with fade-in animation */}
        <h1 className="hero-heading fade-in" style={{ animationDelay: '0.3s' }}>Hi, I'm William.</h1>

        {/* Location with icon */}
        <p className="hero-location fade-in" style={{ animationDelay: '0.5s' }}><MdLocationOn /> Seattle, WA</p>

        {/* Subheading with fade-in animation */}
        <p className="hero-subheading fade-in" style={{ animationDelay: '.7s' }}>
          I'm currently a student at the University of Washington, where I specialize in Data Science and Software Development 🚀
        </p>

        {/* Buttons for CV download and contact */}
        <div className="button-group fade-in" style={{ animationDelay: '.7s' }}>
          <a href={cvLink} download className="button-black">Download CV</a>
          <button onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })} className="button-white">Contact Info</button>
        </div>

        {/* Social media links with fade-in animation */}
        <div className="social-buttons fade-in" style={{ animationDelay: '.7s' }}>
          <a href="https://www.linkedin.com/in/william-uyeta-/" target="_blank" rel="noopener noreferrer" className="social-button">
            <img src={LinkedInIcon} alt="LinkedIn" className="social-icon" /> LinkedIn
          </a>
          <a href="https://github.com/williamuy" target="_blank" rel="noopener noreferrer" className="social-button">
            <img src={GitHubIcon} alt="GitHub" className="social-icon" /> GitHub
          </a>
        </div>

        {/* Typewriter effect for technology display */}
        <div className="typewriter-container fade-in mt-4" style={{ animationDelay: '.7s' }}>
          <Typewriter words={technologies} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default Home;