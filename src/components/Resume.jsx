import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, BookOpen, Briefcase } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import '../CSS/ResumeNew.css';

const Resume = () => {
    const { t } = useTranslation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const education = t('resume.education', { returnObjects: true });
    const experiences = t('resume.experiences', { returnObjects: true });
    const courses = t('resume.courses', { returnObjects: true });

    return (
        <section id="curriculo" className="resume-section">
            <div className="resume-bg" />

            <div className="resume-container">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="resume-title">
                        {t('sections.resume')}
                    </h2>

                    <div className="resume-content">
                        {/* Educação */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="resume-section-header">
                                <div className="resume-icon-wrapper">
                                    <GraduationCap className="resume-icon" />
                                </div>
                                <h3 className="resume-section-title">{t('resume.education_title')}</h3>
                            </div>

                            <div className="resume-list">
                                {education.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={inView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ delay: 0.3 + index * 0.1 }}
                                        className="resume-card"
                                    >
                                        <div className="resume-card-header">
                                            <div>
                                                <h4 className="resume-card-title">{item.degree}</h4>
                                                <p className="resume-card-subtitle">{item.institution}</p>
                                            </div>
                                            <span className="resume-badge">
                                                {item.period}
                                            </span>
                                        </div>
                                        <p className="resume-card-desc">{item.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Experiências */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="resume-section-header">
                                <div className="resume-icon-wrapper">
                                    <Briefcase className="resume-icon" />
                                </div>
                                <h3 className="resume-section-title">{t('resume.experience_title')}</h3>
                            </div>

                            <div className="resume-list">
                                {experiences.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={inView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ delay: 0.3 + index * 0.1 }}
                                        className="resume-card"
                                    >
                                        <div className="resume-card-header">
                                            <div>
                                                <h4 className="resume-card-title">{item.role}</h4>
                                                <p className="resume-card-subtitle">{item.company}</p>
                                            </div>
                                            <span className="resume-badge">
                                                {item.period}
                                            </span>
                                        </div>
                                        <p className="resume-card-desc">{item.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Cursos */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.4 }}
                        >
                            <div className="resume-section-header">
                                <div className="resume-icon-wrapper">
                                    <BookOpen className="resume-icon" />
                                </div>
                                <h3 className="resume-section-title">{t('resume.courses_title')}</h3>
                            </div>

                            <div className="courses-grid">
                                {courses.map((course, index) => (
                                    <motion.div
                                        key={course.title}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                                        transition={{ delay: 0.5 + index * 0.05 }}
                                        whileHover={{ scale: 1.02 }}
                                        className="course-card"
                                    >
                                        <h4 className="course-title">{course.title}</h4>
                                        <p className="course-desc">{course.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Resume;
