import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import '../CSS/NavbarNew.css';

const Navbar = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = ['home', 'sobre-mim', 'projetos', 'curriculo', 'reconhecimentos'];

    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: t('navbar.home'), number: '01' },
    { id: 'sobre-mim', label: t('navbar.about'), number: '02' },
    { id: 'projetos', label: t('navbar.projects'), number: '03' },
    { id: 'curriculo', label: t('navbar.resume'), number: '04' },
    { id: 'reconhecimentos', label: t('navbar.awards'), number: '05' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="navbar-fixed"
      >
        {/* Ultra-minimal blur background */}
        <div className="navbar-backdrop" />

        <div className="navbar-container">
          <div className="navbar-content">
            {/* Minimal logo/dot */}
            <motion.button
              onClick={() => scrollToSection('home')}
              className="navbar-logo-btn group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="logo-dot" />
              <div className="logo-dot-fade-1" />
              <div className="logo-dot-fade-2" />
            </motion.button>

            {/* Desktop Navigation - Centered */}
            <ul className="navbar-desktop-menu">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`nav-item-btn group ${activeSection === item.id ? 'active' : ''}`}
                  >
                    <span className="nav-number">
                      {item.number}
                    </span>
                    <span className="nav-label">
                      {item.label}
                    </span>
                    {activeSection === item.id && (
                      <motion.div
                        layoutId="navIndicator"
                        className="nav-indicator"
                        transition={{
                          type: 'spring',
                          stiffness: 380,
                          damping: 30
                        }}
                      />
                    )}
                  </button>
                </li>
              ))}
            </ul>

            {/* Contact CTA */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="navbar-cta"
              onClick={() => window.open('https://www.linkedin.com/in/gabriel-deoliveira-araujo/', '_blank')}
            >
              {t('navbar.contact')}
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="mobile-menu-btn"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <motion.div
            initial={false}
            animate={{
              height: isMenuOpen ? 'auto' : 0,
              opacity: isMenuOpen ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="mobile-nav-container"
          >
            <ul className="mobile-nav-list">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`mobile-nav-btn ${activeSection === item.id ? 'active' : ''}`}
                  >
                    <span className="text-[10px] font-mono text-gray-600">
                      {item.number}
                    </span>
                    {item.label}
                  </button>
                </li>
              ))}
              <li style={{ paddingTop: '0.5rem' }}>
                <button
                  className="mobile-nav-btn"
                  onClick={() => window.open('https://www.linkedin.com/in/gabriel-deoliveira-araujo/', '_blank')}
                >
                  {t('navbar.contact')}
                </button>
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.nav>

      {/* Scroll Progress Bar */}
      <div className="scroll-progress-container">
        <motion.div
          className="scroll-progress-bar"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </>
  );
};

export default Navbar;
