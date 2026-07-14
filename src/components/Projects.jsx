import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MdArrowOutward, MdEmojiEvents, MdAutorenew } from 'react-icons/md';
import { C, MONO, SORA, Reveal, SectionHeader } from './ui';
import { ProjectModal } from './ProjectModal';

// Non-translated project metadata (order = display order before premiado sort).
const META = [
  { id: 'blacktrunk', image: require('../img/BlackTrunkV1.png'), link: 'https://www.blacktrunk.com.br/', github: '#', technologies: ['JavaScript', 'Velo', 'Wix', 'CSS', 'Node.js'] },
  { id: 'blacktrunk-v2', image: require('../img/BlackTrunkV2.png'), wip: true, link: '#', github: '#', technologies: ['Shopify Hydrogen', 'Remix', 'Supabase', 'React'] },
  { id: 'spotlite', image: require('../img/Spotlite.png'), link: '#', github: '#', technologies: ['Swift', 'SwiftUI', 'Rust', 'librespot', 'OAuth 2.0'] },
  { id: 'monitor-lojas', image: require('../img/MonitorLojas.png'), premiado: true, featured: true, link: '#', github: '#', technologies: ['Python'] },
  { id: 'nexus', image: require('../img/nexus.jpg'), premiado: true, link: '#', github: 'https://github.com/Bieelx/MentalAid-FIAP', technologies: ['AI', 'ChatBot'] },
  { id: 'mentalbalance', image: require('../img/NeuroBalance.png'), premiado: true, link: '#', github: 'https://github.com/Bieelx/MentalAid-FIAP', technologies: ['Firebase'] },
  { id: 'oceansense', image: require('../img/oceasense.png'), premiado: true, link: 'https://github.com/Bieelx/oceansense', github: '#', technologies: ['TypeScript', 'Node.js', 'PostgreSQL'] },
  { id: 'innovateit', image: require('../img/gtx.jpg'), premiado: true, link: '#', github: 'https://github.com/Mikael139/sistema_de_gestao', technologies: ['MySQL', 'Chart.js'] },
  { id: 'furiabot', image: require('../img/FuriaBot.png'), link: 'https://bieelxfuria.netlify.app/', github: '#', technologies: ['Tailwind', 'ShadCN'] },
  { id: 'mentalaid', image: require('../img/Felipao.png'), link: '#', github: 'https://github.com/Bieelx/MentalAid-FIAP', technologies: ['CSS', 'JavaScript'] },
];

const Projects = () => {
  const { t } = useTranslation();
  const [selected, setSelected] = useState(null);
  const premiadoLabel = t('premiadoLabel');
  const wipLabel = t('wipLabel');

  const projects = META.map((p) => {
    const tx = t(`projects.${p.id}`, { returnObjects: true });
    const tags = tx.tags || [];
    return {
      ...p,
      title: tx.title,
      description: tx.description,
      fullDescription: tx.fullDescription || tx.description,
      features: tx.features || [],
      tags,
      allTags: tags.concat(p.technologies.filter((x) => tags.indexOf(x) === -1)),
      hasLink: p.link && p.link !== '#',
      hasGithub: p.github && p.github !== '#',
    };
  }).sort((a, b) => (b.premiado === a.premiado ? 0 : b.premiado ? 1 : -1));

  return (
    <section id="projetos" style={{ padding: '110px 24px', scrollMarginTop: 90 }}>
      <div style={{ maxWidth: 1140, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 56 }}>
        <SectionHeader num="02" title={t('projectsTitle')} />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))', gap: 24 }}>
          {projects.map((p) => (
            <Reveal
              key={p.id}
              onClick={() => setSelected(p)}
              className="hov-card"
              style={{
                gridColumn: p.featured ? '1 / -1' : 'auto', cursor: 'pointer',
                border: '1px solid rgba(251,247,245,0.09)', background: C.card, borderRadius: 20,
                overflow: 'hidden', display: 'flex', flexDirection: 'column',
              }}
            >
              <div style={{ position: 'relative', height: p.featured ? 380 : 220, overflow: 'hidden' }}>
                <img src={p.image} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(15,15,16,0) 55%, rgba(15,15,16,0.65) 100%)' }} />
                {p.premiado && <Badge accent icon={<MdEmojiEvents size={13} />} label={premiadoLabel} />}
                {p.wip && <Badge icon={<MdAutorenew size={13} />} label={wipLabel} />}
              </div>
              <div style={{ padding: '24px 26px 26px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
                  <h3 style={{ margin: 0, fontFamily: SORA, fontWeight: 600, fontSize: 19 }}>{p.title}</h3>
                  <MdArrowOutward size={17} style={{ color: 'rgba(251,247,245,0.35)', flexShrink: 0 }} />
                </div>
                <p style={{ margin: 0, fontSize: 13.5, fontWeight: 300, lineHeight: 1.65, color: 'rgba(251,247,245,0.62)', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{p.description}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 4 }}>
                  {p.tags.map((tag) => (
                    <span key={tag} style={{ fontFamily: MONO, fontSize: 10.5, color: 'rgba(251,247,245,0.5)', border: '1px solid rgba(251,247,245,0.1)', borderRadius: 99, padding: '4px 11px' }}>{tag}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} premiadoLabel={premiadoLabel} wipLabel={wipLabel} />}
    </section>
  );
};

const Badge = ({ accent, icon, label }) => (
  <div style={{
    position: 'absolute', top: 16, left: 16, display: 'flex', alignItems: 'center', gap: 7,
    fontFamily: MONO, fontSize: 11, letterSpacing: '0.08em',
    color: accent ? C.accent : C.text,
    background: accent ? 'rgba(18,16,36,0.75)' : 'rgba(22,22,26,0.75)',
    border: accent ? '1px solid rgba(140,124,250,0.45)' : '1px solid rgba(251,247,245,0.28)',
    borderRadius: 99, padding: '6px 13px', backdropFilter: 'blur(6px)',
  }}>
    {icon}<span>{label}</span>
  </div>
);

export default Projects;
