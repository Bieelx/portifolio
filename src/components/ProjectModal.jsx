import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { MdArrowOutward, MdEmojiEvents, MdAutorenew, MdChevronRight, MdClose } from 'react-icons/md';
import { C, MONO, SORA } from './ui';

export const ProjectModal = ({ project, onClose, premiadoLabel, wipLabel }) => {
  const { t } = useTranslation();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  if (!project) return null;
  const m = project;

  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 3000, background: 'rgba(8,8,9,0.78)', backdropFilter: 'blur(10px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 28 }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.97, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        style={{ position: 'relative', maxWidth: 840, width: '100%', maxHeight: '88vh', overflowY: 'auto', background: C.card, border: '1px solid rgba(251,247,245,0.12)', borderRadius: 22 }}
      >
        <button onClick={onClose} aria-label={t('closeLabel')} className="hov-close" style={{ position: 'absolute', top: 18, right: 18, zIndex: 5, width: 38, height: 38, borderRadius: '50%', border: '1px solid rgba(251,247,245,0.2)', background: 'rgba(15,15,16,0.7)', color: C.text, cursor: 'pointer', backdropFilter: 'blur(6px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><MdClose size={18} /></button>

        <div style={{ position: 'relative', height: 300, overflow: 'hidden' }}>
          <img src={m.image} alt={m.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(22,22,24,0) 40%, rgba(22,22,24,0.92) 100%)' }} />
          <div style={{ position: 'absolute', bottom: 22, left: 30, right: 30, display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
            <h3 style={{ margin: 0, fontFamily: SORA, fontWeight: 700, fontSize: 27 }}>{m.title}</h3>
            {m.premiado && <TagBadge accent icon={<MdEmojiEvents size={13} />} label={premiadoLabel} />}
            {m.wip && <TagBadge icon={<MdAutorenew size={13} />} label={wipLabel} />}
          </div>
        </div>

        <div style={{ padding: '30px 32px 34px', display: 'flex', flexDirection: 'column', gap: 26 }}>
          <p style={{ margin: 0, fontSize: 14.5, fontWeight: 300, lineHeight: 1.75, color: 'rgba(251,247,245,0.72)', whiteSpace: 'pre-line' }}>{m.fullDescription}</p>

          {m.features.length > 0 && (
            <div>
              <span style={{ display: 'block', fontFamily: MONO, fontSize: 11.5, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(251,247,245,0.4)', marginBottom: 14 }}>{t('featuresLabel')}</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {m.features.map((f, i) => (
                  <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <MdChevronRight size={18} style={{ color: C.accent, flexShrink: 0, marginTop: 1 }} />
                    <span style={{ fontSize: 13.5, fontWeight: 300, lineHeight: 1.6, color: 'rgba(251,247,245,0.7)' }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div>
            <span style={{ display: 'block', fontFamily: MONO, fontSize: 11.5, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(251,247,245,0.4)', marginBottom: 14 }}>Stack</span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {m.allTags.map((tag) => (
                <span key={tag} style={{ fontFamily: MONO, fontSize: 11, color: 'rgba(251,247,245,0.6)', border: '1px solid rgba(251,247,245,0.12)', borderRadius: 99, padding: '5px 13px' }}>{tag}</span>
              ))}
            </div>
          </div>

          {(m.hasLink || m.hasGithub) && (
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', borderTop: '1px solid rgba(251,247,245,0.08)', paddingTop: 24 }}>
              {m.hasLink && (
                <a href={m.link} target="_blank" rel="noopener noreferrer" className="hov-btn-light" style={{ display: 'inline-flex', alignItems: 'center', gap: 9, background: C.text, color: C.bg, fontWeight: 600, fontSize: 13.5, textDecoration: 'none', borderRadius: 99, padding: '12px 24px' }}>
                  <span>{t('viewProjectLabel')}</span><MdArrowOutward size={16} />
                </a>
              )}
              {m.hasGithub && (
                <a href={m.github} target="_blank" rel="noopener noreferrer" className="hov-btn-ghost" style={{ display: 'inline-flex', alignItems: 'center', gap: 9, color: C.text, fontWeight: 500, fontSize: 13.5, textDecoration: 'none', border: '1px solid rgba(251,247,245,0.2)', borderRadius: 99, padding: '12px 24px' }}>
                  <span>GitHub</span><MdArrowOutward size={16} style={{ color: 'rgba(251,247,245,0.5)' }} />
                </a>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

const TagBadge = ({ accent, icon, label }) => (
  <span style={{
    display: 'flex', alignItems: 'center', gap: 7, fontFamily: MONO, fontSize: 11,
    color: accent ? C.accent : C.text,
    background: accent ? 'rgba(18,16,36,0.75)' : 'rgba(22,22,26,0.75)',
    border: accent ? '1px solid rgba(140,124,250,0.45)' : '1px solid rgba(251,247,245,0.28)',
    borderRadius: 99, padding: '6px 13px',
  }}>
    {icon}<span>{label}</span>
  </span>
);
