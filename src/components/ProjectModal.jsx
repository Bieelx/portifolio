import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { ImageWithFallback } from './ImageWithFallback';
import '../CSS/ProjectsNew.css';

export const ProjectModal = ({ project, onClose }) => {
    const { t } = useTranslation();

    React.useEffect(() => {
        if (project) {
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [project]);

    if (!project) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="modal-overlay"
                onClick={onClose}
            >
                <motion.div
                    initial={{ y: '100%', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: '100%', opacity: 0 }}
                    transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                    className="modal-content"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Indicador de arrasto Mobile */}
                    <div className="modal-drag-indicator" />

                    {/* Cabeçalho com imagem */}
                    <div className="modal-header-image">
                        <ImageWithFallback
                            src={project.image}
                            alt={project.title}
                            className="modal-img"
                        />
                        <div className="modal-image-overlay" />

                        <button className="modal-close-btn" onClick={onClose}>
                            <X size={24} />
                        </button>
                    </div>

                    {/* Conteúdo Rolável */}
                    <div className="modal-scroll-content">
                        <div>
                            <h2 className="modal-title">{project.title}</h2>
                            <p className="modal-desc">
                                {project.fullDescription || project.description}
                            </p>
                        </div>

                        {/* Recursos */}
                        {project.features && project.features.length > 0 && (
                            <div>
                                <h3 className="modal-section-title">Recursos</h3>
                                <ul className="modal-list">
                                    {project.features.map((feature, index) => (
                                        <li key={index} className="modal-list-item">
                                            <span className="modal-bullet">•</span>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Tecnologias */}
                        {project.technologies && project.technologies.length > 0 && (
                            <div>
                                <h3 className="modal-section-title">Tecnologias</h3>
                                <div className="modal-tech-tags">
                                    {project.technologies.map((tech) => (
                                        <span key={tech} className="modal-tech-tag">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Tags */}
                        <div>
                            <div className="modal-tech-tags">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="modal-tech-tag">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Ações */}
                        <div className="modal-actions">
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="modal-btn modal-btn-github"
                            >
                                <Github size={20} />
                                <span>GitHub</span>
                            </a>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="modal-btn modal-btn-external"
                            >
                                <ExternalLink size={20} />
                                <span>{t('projects.view_project')}</span>
                            </a>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};
