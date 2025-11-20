import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { ImageWithFallback } from './ImageWithFallback';
import { ProjectModal } from './ProjectModal';
import '../CSS/ProjectsNew.css';

const Projects = () => {
    const { t } = useTranslation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            title: t('projects.5.title'),
            description: t('projects.5.description'),
            fullDescription: t('projects.5.fullDescription'),
            image: require('../img/nexus.jpg'),
            tags: ['Flutter', 'Firebase', 'Educação'],
            link: '#',
            github: 'https://github.com/Bieelx/MentalAid-FIAP',
            features: t('projects.5.features', { returnObjects: true }),
            technologies: ['Flutter', 'AI', 'ChatBot', 'Cursos', 'Firebase']
        },
        {
            title: t('projects.6.title'),
            description: t('projects.6.description'),
            fullDescription: t('projects.6.fullDescription'),
            image: require('../img/NeuroBalance.png'),
            tags: ['React Native', 'AI', 'Healthcare'],
            link: '#',
            github: 'https://github.com/Bieelx/MentalAid-FIAP',
            features: t('projects.6.features', { returnObjects: true }),
            technologies: ['React Native', 'AI', 'Firebase', 'Saúde mental']
        },
        {
            title: t('projects.1.title'),
            description: t('projects.1.description'),
            fullDescription: t('projects.1.description'),
            image: require('../img/FuriaBot.png'),
            tags: ['React', 'AI', 'ChatBot'],
            link: "https://bieelxfuria.netlify.app/",
            github: '#',
            features: t('projects.1.features', { returnObjects: true }),
            technologies: ['React', 'Tailwind', 'ShadCN']
        },
        {
            title: t('projects.2.title'),
            description: t('projects.2.description'),
            fullDescription: t('projects.2.description'),
            image: require('../img/oceasense.png'),
            tags: ['React', 'Data Analytics', 'IoT'],
            link: 'https://github.com/Bieelx/oceansense',
            github: '#',
            features: t('projects.2.features', { returnObjects: true }),
            technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL']
        },
        {
            title: t('projects.3.title'),
            description: t('projects.3.description'),
            fullDescription: t('projects.3.description'),
            image: require('../img/gtx.jpg'),
            tags: ['React', 'Node.js', 'Database'],
            link: '#',
            github: 'https://github.com/Mikael139/sistema_de_gestao',
            features: t('projects.3.features', { returnObjects: true }),
            technologies: ['React', 'Node.js', 'MySQL', 'Chart.js']
        },
        {
            title: t('projects.4.title'),
            description: t('projects.4.description'),
            fullDescription: t('projects.4.description'),
            image: require('../img/Felipao.png'),
            tags: ['HTML', 'UI/UX', 'Healthcare'],
            link: '#',
            github: 'https://github.com/Bieelx/MentalAid-FIAP',
            features: t('projects.4.features', { returnObjects: true }),
            technologies: ['HTML', 'CSS', 'JavaScript']
        },
    ];

    return (
        <section id="projetos" className="projects-section">
            <div className="projects-bg" />

            <div className="projects-container">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="projects-title">
                        {t('sections.projects')}
                    </h2>

                    <div className="projects-grid">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                onClick={() => setSelectedProject(project)}
                                className="project-card"
                            >
                                {/* Imagem do Projeto */}
                                <div className="project-image-container">
                                    <ImageWithFallback
                                        src={project.image}
                                        alt={project.title}
                                        className="project-img"
                                    />
                                    <div className="project-overlay" />

                                    {/* Sobreposição de Links */}
                                    <div className="project-links-overlay">
                                        <a
                                            href={project.github}
                                            onClick={(e) => e.stopPropagation()}
                                            className="project-link-icon"
                                            aria-label="GitHub"
                                        >
                                            <Github size={20} />
                                        </a>
                                        <a
                                            href={project.link}
                                            onClick={(e) => e.stopPropagation()}
                                            className="project-link-icon"
                                            aria-label="Ver projeto"
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                    </div>
                                </div>

                                {/* Informações do Projeto */}
                                <div className="project-info">
                                    <h3 className="project-card-title">{project.title}</h3>
                                    <p className="project-card-desc">{project.description}</p>

                                    {/* Tags */}
                                    <div className="project-tags">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="project-tag"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Modal do Projeto */}
            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </section>
    );
};

export default Projects;
