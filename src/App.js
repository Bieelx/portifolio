import React from 'react';
import './CSS/App.css';


import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Awards from './components/Awards';
import MouseLight from './components/MouseLight';

function App() {
  return (
    <div className="App">
      <MouseLight />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Resume />
      <Awards />
    </div>
  );
}

export default App;


