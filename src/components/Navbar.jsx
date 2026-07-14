import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { C, MONO } from './ui';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const lang = i18n.language && i18n.language.startsWith('en') ? 'en' : 'pt';
  const links = t('navLinks', { returnObjects: true });

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 40);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const setLang = (l) => i18n.changeLanguage(l);

  const langBtn = (active) => ({
    fontFamily: MONO, fontSize: 11, fontWeight: 600, border: 'none', borderRadius: 6,
    padding: '5px 9px', cursor: 'pointer',
    background: active ? C.text : 'transparent',
    color: active ? C.bg : 'rgba(251,247,245,0.5)',
    transition: 'background 0.25s ease, color 0.25s ease',
  });

  const logo = (
    <a href="#home" style={{ fontFamily: MONO, fontWeight: 600, fontSize: 15, color: C.text, textDecoration: 'none', letterSpacing: '0.02em' }}>
      bieelx<span style={{ color: C.accent }}>.</span>
    </a>
  );

  const langToggle = (
    <div style={{ display: 'flex', alignItems: 'center', gap: 2, border: '1px solid rgba(251,247,245,0.12)', borderRadius: 8, padding: 2, fontFamily: MONO, fontSize: 11 }}>
      <button onClick={() => setLang('pt')} style={langBtn(lang === 'pt')}>PT</button>
      <button onClick={() => setLang('en')} style={langBtn(lang === 'en')}>EN</button>
    </div>
  );

  return (
    <>
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, display: 'flex', justifyContent: 'center', padding: '18px 24px', pointerEvents: 'none' }}>
        <nav style={{
          display: 'flex', alignItems: 'center', gap: 26, flexWrap: 'wrap', justifyContent: 'center',
          padding: '11px 20px', borderRadius: 14, border: '1px solid rgba(251,247,245,0.1)',
          background: scrolled ? 'rgba(15,15,16,0.88)' : 'rgba(15,15,16,0.55)',
          backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', pointerEvents: 'auto',
          boxShadow: scrolled ? '0 10px 36px rgba(0,0,0,0.5)' : 'none',
          transition: 'background 0.3s ease, box-shadow 0.3s ease',
        }}>
          {logo}

          <div className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: 22 }}>
            {links.map((nl) => (
              <a key={nl.href} href={nl.href} className="hov-link" style={{ fontSize: 13.5, fontWeight: 500, color: 'rgba(251,247,245,0.62)', textDecoration: 'none' }}>{nl.label}</a>
            ))}
          </div>

          {langToggle}

          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Menu"
            style={{ display: 'none', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 5, width: 34, height: 34, border: 'none', background: 'transparent', cursor: 'pointer', flexShrink: 0 }}
          >
            <span style={hamLine(menuOpen, 45, 3)} />
            <span style={hamLine(menuOpen, -45, -3)} />
          </button>
        </nav>
      </div>

      {menuOpen && (
        <div onClick={() => setMenuOpen(false)} style={{ position: 'fixed', inset: 0, zIndex: 998, background: 'rgba(9,8,13,0.72)', backdropFilter: 'blur(4px)' }}>
          <div onClick={(e) => e.stopPropagation()} style={{ position: 'absolute', top: 76, left: 16, right: 16, background: '#16151C', border: '1px solid rgba(251,247,245,0.12)', borderRadius: 18, padding: 12, display: 'flex', flexDirection: 'column', gap: 2, boxShadow: '0 24px 48px rgba(0,0,0,0.5)' }}>
            {links.map((nl) => (
              <a key={nl.href} href={nl.href} onClick={() => setMenuOpen(false)} className="hov-chip" style={{ padding: '15px 14px', fontSize: 15.5, fontWeight: 500, color: C.text, textDecoration: 'none', borderRadius: 12 }}>{nl.label}</a>
            ))}
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 860px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
};

const hamLine = (open, rotate, ty) => ({
  display: 'block', width: 18, height: 1.5, background: '#FBF7F5', borderRadius: 2,
  transition: 'transform 0.25s ease, opacity 0.25s ease',
  transform: open ? `translateY(${ty}px) rotate(${rotate}deg)` : 'translateY(0) rotate(0deg)',
});

export default Navbar;
