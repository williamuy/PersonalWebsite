import React from 'react';
import HomePage from './components/HomePage';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
const App = () => {
  return (
    <div className="font-sans text-gray-900">
      <Navbar />
      <HomePage />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default App;
