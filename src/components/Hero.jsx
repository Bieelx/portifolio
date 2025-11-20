import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, ArrowDown } from 'lucide-react';
import {
    SiReact,
    SiJavascript,
    SiPython,
    SiTailwindcss,
    SiSpringboot,
    SiMysql,
    SiUipath,
    SiAwslambda,
    SiGoogleanalytics,
} from 'react-icons/si';
import Typewriter from './Typewriter';
import '../CSS/HeroNew.css';

const Hero = () => {
    const { t } = useTranslation();

    const techIcons = [
        { Icon: SiReact, name: 'React' },
        { Icon: SiJavascript, name: 'JavaScript' },
        { Icon: SiTailwindcss, name: 'Tailwind' },
        { Icon: SiSpringboot, name: 'Spring Boot' },
        { Icon: SiMysql, name: 'SQL' },
        { Icon: SiPython, name: 'Python' },
        { Icon: SiUipath, name: 'UiPath' },
        { Icon: SiAwslambda, name: 'AWS Lambda' },
        { Icon: SiGoogleanalytics, name: 'Google Analytics' },
    ];

    const socialLinks = [
        { Icon: Github, href: 'https://github.com/Bieelx', label: 'GitHub' },
        { Icon: Linkedin, href: 'https://www.linkedin.com/in/gabriel-deoliveira-araujo/', label: 'LinkedIn' },
        { Icon: Instagram, href: 'https://www.instagram.com/ibieelx/', label: 'Instagram' },
    ];

    const scrollToNext = () => {
        document.getElementById('sobre_mim')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className='bem_vindo hero-section' id='bem_vindo'>
            <div className="hero-overlay" />

            <div className="hero-container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h1
                        className="hero-title"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <span className="hero-welcome">{t('home_title')}</span>
                        <br />
                        <span className="hero-name">
                            <Typewriter text="Gabriel Araujo " speed={100} />
                        </span>
                    </motion.h1>

                    <motion.h2
                        className="hero-subtitle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        {t('home_subtitle')}
                    </motion.h2>

                    {/* Pilha de Tecnologias */}
                    <motion.div
                        className="tech-stack"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        {techIcons.map(({ Icon, name }, index) => (
                            <motion.div
                                key={name}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.7 + index * 0.1 }}
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                className="tech-icon-wrapper"
                            >
                                <Icon className="tech-icon" />
                                <span className="tech-name">
                                    {name}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Links Sociais */}
                    <motion.div
                        className="social-links-hero"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                    >
                        {socialLinks.map(({ Icon, href, label }) => (
                            <motion.a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1, y: -5 }}
                                whileTap={{ scale: 0.95 }}
                                className="social-btn"
                                aria-label={label}
                            >
                                <Icon size={20} />
                            </motion.a>
                        ))}
                    </motion.div>

                    {/* Indicador de Rolagem */}
                    <motion.button
                        onClick={scrollToNext}
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="scroll-indicator"
                    >
                        <span style={{ fontSize: '0.875rem' }}>{t('hero.explore')}</span>
                        <ArrowDown size={20} />
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
