import React from 'react';
import './HomePage.css'; 
import './animations.css';
import WindCharacter from './WindCharacter.png';
import MainChraceter from './MainCharacter.png';

const Home = () => {
  return (
    <div id="home" className="min-h-screen bg-gray-100 flex flex-col justify-center items-center text-center px-4 relative">

      <div className="flex items-center justify-center space-x-4 fade-in" style={{ animationDelay: '0.3s' }}>

        <img src={WindCharacter} alt="Wind Character" className="wind-character" />

        <div>
          <h1 className="text-6xl font-bold text-gray-800">  
            Hi, I'm William.
          </h1>
          
          <p className="text-gray-500 mt-2">
            Seattle, WA
          </p>
        
          <p className="text-lg text-gray-700 mt-4">
          I'm currently a student at the University of Washington, where I specialize in Data Science and Software Development 🚀
          </p>
          
          
          <div style={{marginTop: '2rem'}}>

            <button
              style={{
                backgroundColor: 'black',
                color: 'white',
                padding: '12px 24px',
                borderRadius: '4px',
                border: 'none',
                fontSize: '16px'  
              }}  
            >
              Download CV
            </button>

            <button 
              style={{
                backgroundColor: 'white', 
                color: 'black',
                padding: '12px 24px',
                borderRadius: '4px',
                border: '2px solid black',
                fontSize: '16px', 
                marginLeft: '1rem'
              }}
            >
              Contact Info
            </button>

          </div>
          
        </div>
      </div>

    </div>
  );
};

export default Home;