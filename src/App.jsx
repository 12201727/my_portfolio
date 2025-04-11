import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import DarkModeToggle from './components/DarkModeToggle';


function App() {
  return (
    <>
      <DarkModeToggle />
      <Navbar />
      <Banner />
      <About />
      <Skills />
      <Education />
      <Certifications />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
