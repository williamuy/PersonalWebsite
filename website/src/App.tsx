import React from 'react';
import HomePage from './components/HomePage';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Experience from './components/Experience';
import Footer from './components/Footer';
import './App.css'

const App = () => {
  return (
    <div className="font-sans text-gray-900">
      <Navbar />
      <HomePage />
      <About />
      <Skills />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
