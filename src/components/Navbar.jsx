import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import '../CSS/NavbarNew.css';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('bem_vindo');

  const toggleLanguage = () => {
    const newLang = i18n.language === 'pt' ? 'en' : 'pt';
    i18n.changeLanguage(newLang);
  };

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
    const sections = ['bem_vindo', 'sobre_mim', 'projetos', 'curriculo', 'reconhecimentos'];

    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
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
    { id: 'bem_vindo', label: t('navbar.home'), number: '01' },
    { id: 'sobre_mim', label: t('navbar.about'), number: '02' },
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
        {/* Fundo com desfoque ultra-minimalista */}
        <div className="navbar-backdrop" />

        <div className="navbar-container">
          <div className="navbar-content">
            {/* Logo/Ponto minimalista */}
            <motion.button
              onClick={() => scrollToSection('bem_vindo')}
              className="navbar-logo-btn group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div
                className="logo-dot"
                style={{ opacity: 1 }}
              />
              <div
                className="logo-dot-fade-1"
                style={{
                  opacity: scrollProgress > 33 ? 1 : 0.4,
                  backgroundColor: scrollProgress > 33 ? 'white' : 'rgba(255, 255, 255, 0.4)'
                }}
              />
              <div
                className="logo-dot-fade-2"
                style={{
                  opacity: scrollProgress > 66 ? 1 : 0.2,
                  backgroundColor: scrollProgress > 66 ? 'white' : 'rgba(255, 255, 255, 0.2)'
                }}
              />
            </motion.button>

            {/* Navegação Desktop - Centralizada */}
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

            {/* Lado direito - CTA de Contato e Alternância de Idioma */}
            <div className="navbar-actions">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="navbar-cta"
                onClick={() => window.open('https://www.linkedin.com/in/gabriel-deoliveira-araujo/', '_blank')}
              >
                {t('navbar.contact')}
              </motion.button>

              <motion.button
                onClick={toggleLanguage}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="navbar-lang-btn"
                aria-label="Toggle language"
              >
                <Globe size={14} />
                <span className="lang-text">{i18n.language}</span>
              </motion.button>
            </div>

            {/* Lado direito Mobile - Alternância de Idioma + Menu */}
            <div className="mobile-actions">
              {/* Alternância de Idioma Mobile - Sempre Visível */}
              <motion.button
                onClick={toggleLanguage}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mobile-lang-btn"
                aria-label="Toggle language"
              >
                <Globe size={16} />
                <span className="lang-text" style={{ fontSize: '0.75rem' }}>{i18n.language}</span>
              </motion.button>

              {/* Botão do Menu Mobile */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="mobile-menu-btn"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Navegação Mobile */}
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

      {/* Barra de Progresso de Rolagem */}
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
