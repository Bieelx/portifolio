import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Palette, BarChart3 } from 'lucide-react';
import eu from '../img/eu.jpg';
import '../CSS/AboutNew.css';

const About = () => {
    const { t } = useTranslation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const skills = [
        {
            icon: Code2,
            title: t('about_skills.frontend.title', 'Desenvolvimento Front-End'),
            description: t('about_skills.frontend.desc', 'React, Python, JavaScript, SQL e automações com UiPath'),
        },
        {
            icon: Palette,
            title: t('about_skills.uiux.title', 'UI/UX Design'),
            description: t('about_skills.uiux.desc', 'Criação de interfaces intuitivas e experiências memoráveis'),
        },
        {
            icon: BarChart3,
            title: t('about_skills.data.title', 'Análise de Dados'),
            description: t('about_skills.data.desc', 'Automações inteligentes e análise de dados'),
        },
    ];

    return (
        <section id="sobre_mim" className="about-section">
            <div className="about-bg" />

            <div className="about-container">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="about-title">
                        {t('about_title')}
                    </h2>

                    <div className="about-content">
                        {/* Imagem de Perfil */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="profile-image-wrapper"
                        >
                            <div className="profile-image-container">
                                <div className="profile-image-bg">
                                    {eu ? (
                                        <img src={eu} alt="Gabriel Araujo" className="profile-img-real" />
                                    ) : (
                                        <div className="profile-placeholder" />
                                    )}
                                </div>
                            </div>
                        </motion.div>

                        {/* Texto Sobre Mim */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="about-text-container"
                        >
                            <div className="about-text">
                                {t('about_text').split('\n').map((paragraph, index) => (
                                    <p key={index} style={{ marginBottom: '1rem' }}>
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Cards de Habilidades */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="skills-grid"
                    >
                        {skills.map((skill, index) => (
                            <motion.div
                                key={skill.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.8 + index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="skill-card"
                            >
                                <skill.icon className="skill-icon" />
                                <h3 className="skill-title">{skill.title}</h3>
                                <p className="skill-desc">{skill.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
