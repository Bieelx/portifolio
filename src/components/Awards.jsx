import React from 'react';
import { useTranslation } from 'react-i18next';
import { MdArrowOutward, MdEmojiEvents } from 'react-icons/md';
import { C, MONO, SORA, Reveal, SectionHeader } from './ui';

const CTA_HREF = 'https://www.linkedin.com/in/gabriel-deoliveira-araujo/';

const Awards = () => {
  const { t } = useTranslation();
  const a = t('awards', { returnObjects: true });

  return (
    <section id="reconhecimentos" style={{ padding: '110px 24px', background: '#131315', borderTop: '1px solid rgba(251,247,245,0.06)', borderBottom: '1px solid rgba(251,247,245,0.06)', scrollMarginTop: 90 }}>
      <div style={{ maxWidth: 1140, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 18 }}>
        <SectionHeader num="04" title={t('awardsTitle')} />
        <Reveal>
          <p style={{ margin: '0 0 38px', fontSize: 15, fontWeight: 300, color: 'rgba(251,247,245,0.55)', maxWidth: 560 }}>{a.subtitle}</p>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))', gap: 24 }}>
          {a.items.map((aw) => (
            <Reveal key={aw.num} className="hov-award" style={{ border: '1px solid rgba(251,247,245,0.09)', background: C.card, borderRadius: 20, padding: 30, display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontFamily: MONO, fontSize: 12, color: 'rgba(251,247,245,0.35)' }}>{aw.num}</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 7, fontFamily: MONO, fontSize: 11, letterSpacing: '0.08em', color: C.accent, background: 'rgba(140,124,250,0.1)', border: '1px solid rgba(140,124,250,0.35)', borderRadius: 99, padding: '6px 13px' }}>
                  <MdEmojiEvents size={13} /><span>{aw.highlight}</span>
                </span>
              </div>
              <h3 style={{ margin: 0, fontFamily: SORA, fontWeight: 600, fontSize: 19 }}>{aw.title}</h3>
              <p style={{ margin: 0, fontSize: 13.5, fontWeight: 300, lineHeight: 1.7, color: 'rgba(251,247,245,0.6)' }}>{aw.description}</p>
            </Reveal>
          ))}
        </div>

        <Reveal id="contato" style={{ marginTop: 70, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24, scrollMarginTop: 120 }}>
          <p style={{ margin: 0, fontFamily: SORA, fontWeight: 700, fontSize: 'clamp(1.5rem, 3.4vw, 2.2rem)', letterSpacing: '-0.02em' }}>{a.footer_text}</p>
          <a href={CTA_HREF} target="_blank" rel="noopener noreferrer" className="hov-cta" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: C.text, color: C.bg, fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 14.5, textDecoration: 'none', borderRadius: 99, padding: '15px 32px' }}>
            <span>{a.cta_btn}</span><MdArrowOutward size={17} />
          </a>
        </Reveal>
      </div>
    </section>
  );
};

export default Awards;
