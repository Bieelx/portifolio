import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { ImageWithFallback } from './ImageWithFallback';
import '../CSS/ProjectsNew.css';

export const ProjectModal = ({ project, onClose }) => {
    const { t } = useTranslation();

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
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    className="modal-content"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Image Section */}
                    <div className="modal-header-image">
                        <ImageWithFallback
                            src={project.image}
                            alt={project.title}
                            className="modal-img"
                        />
                        <div className="project-overlay" />

                        <button className="modal-close-btn" onClick={onClose}>
                            <X size={24} />
                        </button>
                    </div>

                    <div className="modal-body">

                        {/* Content Section */}
                        <div className="modal-info">
                            <h2 className="modal-title">{project.title}</h2>

                            <div className="modal-tech-tags" style={{ marginBottom: '1.5rem' }}>
                                {project.tags.map((tag) => (
                                    <span key={tag} className="project-tag">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <p className="modal-desc">
                                {project.fullDescription || project.description}
                            </p>

                            {/* Features */}
                            {project.features && (
                                <div style={{ marginBottom: '1.5rem' }}>
                                    <h3 className="modal-section-title">Key Features</h3>
                                    <ul className="modal-list">
                                        {project.features.map((feature, index) => (
                                            <li key={index} className="modal-list-item">
                                                <CheckCircle2 size={16} className="modal-bullet" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Technologies */}
                            {project.technologies && (
                                <div style={{ marginBottom: '1.5rem' }}>
                                    <h3 className="modal-section-title">Technologies</h3>
                                    <div className="modal-tech-tags">
                                        {project.technologies.map((tech) => (
                                            <span key={tech} className="modal-tech-tag">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Actions */}
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
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};
