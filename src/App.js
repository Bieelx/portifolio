import React from 'react';
import './CSS/App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Awards from './components/Awards';
import MouseLight from './components/MouseLight';
import { C, MONO } from './components/ui';

const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/Bieelx' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/gabriel-deoliveira-araujo/' },
  { label: 'Instagram', href: 'https://www.instagram.com/ibieelx/' },
];

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

      <footer style={{ padding: '44px 24px' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 18 }}>
          <span style={{ fontFamily: MONO, fontSize: 13, color: C.text }}>bieelx<span style={{ color: C.accent }}>.</span></span>
          <div style={{ display: 'flex', gap: 22 }}>
            {SOCIALS.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="hov-link" style={{ fontSize: 12.5, color: 'rgba(251,247,245,0.5)', textDecoration: 'none' }}>{s.label}</a>
            ))}
          </div>
          <span style={{ fontFamily: MONO, fontSize: 11.5, color: 'rgba(251,247,245,0.35)' }}>© {new Date().getFullYear()} Gabriel Araujo</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
