import React from 'react';
import { useTranslation } from 'react-i18next';
import { C, MONO, SORA, Reveal, SectionHeader } from './ui';

const ColTitle = ({ children }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
    <h3 style={{ margin: 0, fontFamily: SORA, fontWeight: 600, fontSize: 20 }}>{children}</h3>
    <span style={{ flex: 1, height: 1, background: 'rgba(251,247,245,0.08)' }} />
  </div>
);

const Resume = () => {
  const { t, i18n } = useTranslation();
  const r = t('resume', { returnObjects: true });
  const lang = i18n.language && i18n.language.startsWith('en') ? 'en' : 'pt';
  const currentLabel = lang === 'pt' ? 'Atual' : 'Current';

  const hardskills = r.hardskills.map((hs) => {
    const idx = hs.indexOf(':');
    return idx === -1 ? { label: '', value: hs } : { label: hs.slice(0, idx), value: hs.slice(idx + 1).trim() };
  });

  return (
    <section id="curriculo" style={{ padding: '110px 24px', scrollMarginTop: 90 }}>
      <div style={{ maxWidth: 1140, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 56 }}>
        <SectionHeader num="03" title={t('resumeTitle')} />

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 64 }}>
          {/* Left column */}
          <div style={{ flex: '1.2 1 480px', display: 'flex', flexDirection: 'column', gap: 48, minWidth: 0 }}>
            <Reveal>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
                <h3 style={{ margin: 0, fontFamily: SORA, fontWeight: 600, fontSize: 20 }}>{r.experience_title}</h3>
                <span style={{ flex: 1, height: 1, background: 'rgba(251,247,245,0.08)' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {r.experiences.map((exp, i) => {
                  const current = i === 0;
                  return (
                    <div key={i} style={{ position: 'relative', padding: '0 0 40px 32px', borderLeft: '1px solid rgba(251,247,245,0.1)' }}>
                      <span style={{ position: 'absolute', left: -5.5, top: 6, width: 10, height: 10, borderRadius: '50%', background: current ? C.accent : C.bg, border: current ? 'none' : '2px solid rgba(251,247,245,0.35)', boxShadow: current ? '0 0 0 5px rgba(140,124,250,0.15)' : 'none', boxSizing: 'border-box' }} />
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', marginBottom: 10 }}>
                        <span style={{ fontFamily: MONO, fontSize: 11, letterSpacing: '0.06em', color: 'rgba(251,247,245,0.5)', border: '1px solid rgba(251,247,245,0.12)', borderRadius: 99, padding: '4px 11px' }}>{exp.period}</span>
                        {current && (
                          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: MONO, fontSize: 10.5, letterSpacing: '0.08em', color: C.accent, background: 'rgba(140,124,250,0.1)', border: '1px solid rgba(140,124,250,0.35)', borderRadius: 99, padding: '4px 11px' }}>
                            <span style={{ display: 'inline-block', width: 5, height: 5, borderRadius: '50%', background: C.accent, animation: 'pulse 2.4s ease-in-out infinite' }} />
                            <span>{currentLabel}</span>
                          </span>
                        )}
                      </div>
                      <h4 style={{ margin: '0 0 3px', fontFamily: SORA, fontWeight: 600, fontSize: 17 }}>{exp.role}</h4>
                      <span style={{ fontFamily: MONO, fontSize: 12, color: C.accent }}>{exp.company}</span>
                      <p style={{ margin: '12px 0 0', fontSize: 13.5, fontWeight: 300, lineHeight: 1.7, color: 'rgba(251,247,245,0.6)' }}>{exp.description}</p>
                    </div>
                  );
                })}
              </div>
            </Reveal>

            <Reveal>
              <ColTitle>{r.education_title}</ColTitle>
              {r.education.map((edu, i) => (
                <div key={i} style={{ border: '1px solid rgba(140,124,250,0.22)', background: 'linear-gradient(135deg, rgba(140,124,250,0.07), rgba(22,22,24,1) 55%)', borderRadius: 18, padding: '26px 28px', display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
                    <h4 style={{ margin: 0, fontFamily: SORA, fontWeight: 600, fontSize: 17 }}>{edu.degree}</h4>
                    <span style={{ fontFamily: MONO, fontSize: 11, color: C.accent, background: 'rgba(140,124,250,0.1)', border: '1px solid rgba(140,124,250,0.35)', borderRadius: 99, padding: '4px 11px' }}>{edu.period}</span>
                  </div>
                  <span style={{ fontFamily: MONO, fontSize: 12, color: 'rgba(251,247,245,0.55)' }}>{edu.institution}</span>
                  <p style={{ margin: '8px 0 0', fontSize: 13.5, fontWeight: 300, lineHeight: 1.6, color: 'rgba(251,247,245,0.55)' }}>{edu.description}</p>
                </div>
              ))}
            </Reveal>

            <Reveal>
              <ColTitle>{r.languages_title}</ColTitle>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {r.languages.map((lg) => (
                  <span key={lg} style={{ fontSize: 13, fontWeight: 400, color: 'rgba(251,247,245,0.7)', border: '1px solid rgba(251,247,245,0.12)', borderRadius: 99, padding: '8px 16px' }}>{lg}</span>
                ))}
              </div>
            </Reveal>

            <Reveal>
              <ColTitle>{r.softskills_title}</ColTitle>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {r.softskills.map((ss) => (
                  <span key={ss} style={{ fontSize: 12.5, fontWeight: 300, color: 'rgba(251,247,245,0.6)', background: 'rgba(251,247,245,0.05)', borderRadius: 99, padding: '7px 14px' }}>{ss}</span>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right column */}
          <div style={{ flex: '1 1 400px', display: 'flex', flexDirection: 'column', gap: 48, minWidth: 0 }}>
            <Reveal>
              <ColTitle>{r.hardskills_title}</ColTitle>
              <div style={{ border: '1px solid rgba(251,247,245,0.09)', background: C.card, borderRadius: 18, overflow: 'hidden' }}>
                {hardskills.map((hs, i) => (
                  <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 4, padding: '16px 22px', borderBottom: '1px solid rgba(251,247,245,0.06)' }}>
                    <span style={{ fontFamily: MONO, fontSize: 10.5, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.accent }}>{hs.label}</span>
                    <span style={{ fontSize: 13.5, fontWeight: 300, lineHeight: 1.55, color: 'rgba(251,247,245,0.75)' }}>{hs.value}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal>
              <ColTitle>{r.courses_title}</ColTitle>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {r.courses.map((course, i) => (
                  <div key={i} className="hov-course" style={{ display: 'flex', gap: 16, alignItems: 'baseline', border: '1px solid rgba(251,247,245,0.09)', background: C.card, borderRadius: 14, padding: '15px 20px' }}>
                    <span style={{ fontFamily: MONO, fontSize: 11, color: 'rgba(251,247,245,0.3)', flexShrink: 0 }}>{(i + 1 < 10 ? '0' : '') + (i + 1)}</span>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 3, minWidth: 0 }}>
                      <span style={{ fontSize: 13.5, fontWeight: 600 }}>{course.title}</span>
                      <span style={{ fontSize: 12, fontWeight: 300, color: 'rgba(251,247,245,0.5)', lineHeight: 1.5 }}>{course.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
