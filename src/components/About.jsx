import React from 'react';
import { useTranslation } from 'react-i18next';
import { C, MONO, SORA, Reveal, SectionHeader } from './ui';
import eu from '../img/eu.jpg';

const About = () => {
  const { t } = useTranslation();
  const paras = t('aboutText').split('\n\n');
  const skills = t('aboutSkills', { returnObjects: true });

  return (
    <section id="sobre" style={{ padding: '110px 24px', scrollMarginTop: 90 }}>
      <div style={{ maxWidth: 1140, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 64 }}>
        <SectionHeader num="01" title={t('aboutTitle')} />

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 56, alignItems: 'flex-start' }}>
          <Reveal style={{ flex: '0 1 320px', minWidth: 260, position: 'relative' }}>
            <div style={{ position: 'absolute', top: 18, left: 18, right: -18, bottom: -18, border: '1px solid rgba(251,247,245,0.12)', borderRadius: 20 }} />
            <img src={eu} alt="Gabriel Araujo" className="about-photo" style={{ position: 'relative', width: '100%', display: 'block', borderRadius: 20 }} />
          </Reveal>
          <Reveal style={{ flex: '1 1 460px', display: 'flex', flexDirection: 'column', gap: 20 }}>
            {paras.map((p, i) => (
              <p key={i} style={{ margin: 0, fontSize: 15.5, fontWeight: 300, lineHeight: 1.75, color: 'rgba(251,247,245,0.72)' }}>{p}</p>
            ))}
          </Reveal>
        </div>

        <Reveal style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
          {skills.map((sk) => (
            <div key={sk.num} className="hov-skill" style={{ border: '1px solid rgba(251,247,245,0.09)', background: C.card, borderRadius: 18, padding: '28px 26px', display: 'flex', flexDirection: 'column', gap: 14 }}>
              <span style={{ fontFamily: MONO, fontSize: 12, color: 'rgba(251,247,245,0.35)' }}>{sk.num}</span>
              <h3 style={{ margin: 0, fontFamily: SORA, fontWeight: 600, fontSize: 17 }}>{sk.title}</h3>
              <p style={{ margin: 0, fontSize: 13.5, fontWeight: 300, lineHeight: 1.6, color: 'rgba(251,247,245,0.6)' }}>{sk.desc}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
};

export default About;
