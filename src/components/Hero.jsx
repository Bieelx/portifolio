import React from 'react';
import { useTranslation } from 'react-i18next';
import { MdArrowOutward, MdKeyboardArrowDown } from 'react-icons/md';
import Typewriter from './Typewriter';
import { C, MONO, SORA } from './ui';

const TECH = ['Python', 'SQL', 'React', 'JavaScript', 'BigQuery', 'GA4', 'AWS'];
const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/Bieelx' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/gabriel-deoliveira-araujo/' },
  { label: 'Instagram', href: 'https://www.instagram.com/ibieelx/' },
];

const Hero = () => {
  const { t } = useTranslation();
  const roles = t('heroRoles', { returnObjects: true });

  return (
    <section id="home" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', padding: '140px 24px 80px', scrollMarginTop: 90 }}>
      {/* ambient decor */}
      {/* ponytail: mix-blend-mode dropped — it forced a full recomposite on every scroll repaint. Direct low opacity looks the same, composites cheaply. */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.18, pointerEvents: 'none', transform: 'translateZ(0)', backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E\")" }} />
      <div style={{ position: 'absolute', top: -260, left: '30%', width: 820, height: 820, borderRadius: '50%', background: 'radial-gradient(circle, rgba(140,124,250,0.17) 0%, rgba(140,124,250,0) 68%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: 130, right: '7%', width: 300, height: 300, border: '1px solid rgba(140,124,250,0.16)', borderRadius: '50%', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '40%', left: '4%', width: 2, height: 180, background: 'linear-gradient(180deg, rgba(140,124,250,0), rgba(140,124,250,0.35), rgba(140,124,250,0))', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 200, background: 'linear-gradient(180deg, rgba(14,13,19,0) 0%, #0E0D13 100%)', pointerEvents: 'none' }} />

      <div style={{ position: 'relative', zIndex: 10, maxWidth: 980, width: '100%', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 34 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontFamily: MONO, fontSize: 12, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(251,247,245,0.45)' }}>
          <span style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: C.accent, animation: 'pulse 2.4s ease-in-out infinite' }} />
          <span>{t('heroWelcome')}</span>
        </div>

        <h1 style={{ margin: 0, fontFamily: SORA, fontWeight: 800, fontSize: 'clamp(2.4rem, 10vw, 5.6rem)', lineHeight: 1.04, letterSpacing: '-0.03em', color: C.text }}>
          <Typewriter text="Gabriel Araujo" speed={95} />
        </h1>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: '10px 18px', fontSize: 16, fontWeight: 300, color: 'rgba(251,247,245,0.7)' }}>
          {roles.map((r, i) => (
            <span key={r} style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
              <span>{r}</span>
              {i < roles.length - 1 && <span style={{ color: 'rgba(251,247,245,0.22)', fontWeight: 400 }}>/</span>}
            </span>
          ))}
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 10, maxWidth: 640 }}>
          {TECH.map((tech) => (
            <span key={tech} className="hov-tag" style={{ fontFamily: MONO, fontSize: 11.5, color: 'rgba(251,247,245,0.5)', border: '1px solid rgba(251,247,245,0.1)', borderRadius: 99, padding: '6px 13px' }}>{tech}</span>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginTop: 6 }}>
          {SOCIALS.map((soc) => (
            <a key={soc.label} href={soc.href} target="_blank" rel="noopener noreferrer" className="hov-social" style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13.5, fontWeight: 500, color: C.text, textDecoration: 'none', background: 'rgba(251,247,245,0.06)', border: '1px solid rgba(251,247,245,0.12)', borderRadius: 99, padding: '10px 20px', backdropFilter: 'blur(4px)' }}>
              <span>{soc.label}</span>
              <MdArrowOutward size={14} style={{ color: 'rgba(251,247,245,0.5)' }} />
            </a>
          ))}
        </div>

        <a href="#sobre" className="hov-link" style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 6, marginTop: 18, color: 'rgba(251,247,245,0.45)', textDecoration: 'none', fontSize: 13 }}>
          <span>{t('heroExplore')}</span>
          <MdKeyboardArrowDown size={20} style={{ display: 'inline-block', animation: 'floaty 2s ease-in-out infinite' }} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
