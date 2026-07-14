import React from 'react';
import { motion } from 'framer-motion';

export const C = { bg: '#0F0F10', text: '#FBF7F5', accent: '#8C7CFA', card: '#161618' };
export const MONO = "'JetBrains Mono', monospace";
export const SORA = 'Sora, sans-serif';

// Scroll-reveal wrapper (framer-motion whileInView, fires once).
export const Reveal = ({ children, style, delay = 0, ...rest }) => (
  <motion.div
    initial={{ opacity: 0, y: 26 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.8, delay, ease: [0.22, 0.61, 0.36, 1] }}
    style={style}
    {...rest}
  >
    {children}
  </motion.div>
);

// Numbered section header ("01 —— Title").
export const SectionHeader = ({ num, title }) => (
  <Reveal style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
    <span style={{ fontFamily: MONO, fontSize: 12, letterSpacing: '0.2em', color: 'rgba(251,247,245,0.4)' }}>{num}</span>
    <span style={{ width: 36, height: 1, background: 'rgba(251,247,245,0.2)' }} />
    <h2 style={{ margin: 0, fontFamily: SORA, fontWeight: 700, fontSize: 'clamp(1.9rem, 4vw, 2.7rem)', letterSpacing: '-0.02em' }}>{title}</h2>
  </Reveal>
);
