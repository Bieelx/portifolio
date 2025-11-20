import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import '../CSS/AwardsNew.css';

const Awards = () => {
    const { t } = useTranslation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const recognitions = [
        {
            icon: Trophy,
            title: t('awards.3.title', 'Nexus Project'),
            description: t('awards.3.description', 'Top 3 do FIAP Next 2025'),
            highlight: t('awards.3.highlight', 'Top 3'),
        },
        {
            icon: Trophy,
            title: t("awards.1.title", "OceanSense"),
            description: t("awards.1.description", "Plataforma de monitoramento oceânico"),
            highlight: t("awards.1.highlight", 'Vencedor'),
        },
        {
            icon: Trophy,
            title: t("awards.2.title", "GTX"),
            description: t("awards.2.description", "Sistema de gestão sustentável"),
            highlight: t("awards.2.highlight", 'Top 1'),
        },
    ];

    return (
        <section id="reconhecimentos" className="awards-section">
            <div className="awards-bg" />

            <div className="awards-container">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="awards-title">
                        {t('sections.awards', 'Reconhecimentos')}
                    </h2>

                    <p className="awards-subtitle">
                        {t('awards.subtitle')}
                    </p>

                    <div className="awards-grid">
                        {recognitions.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: index * 0.2 }}
                                whileHover={{ y: -10 }}
                                className="award-card-wrapper"
                            >
                                <div className="award-card">
                                    {/* Ícone */}
                                    <div className="award-icon-wrapper">
                                        <item.icon className="award-icon" />
                                    </div>

                                    {/* Distintivo de Destaque */}
                                    <span className="award-highlight">
                                        {item.highlight}
                                    </span>

                                    {/* Conteúdo */}
                                    <h3 className="award-title">{item.title}</h3>
                                    <p className="award-desc">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA do Rodapé */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.8 }}
                        className="awards-footer"
                    >
                        <p className="awards-footer-text">
                            {t('awards.footer_text')}
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="awards-cta-btn"
                            onClick={() => window.open('https://www.linkedin.com/in/gabriel-deoliveira-araujo/', '_blank')}
                        >
                            {t('awards.cta_btn')}
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Awards;
