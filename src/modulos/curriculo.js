import React from 'react';
import '../CSS/curriculo.css';
import { useTranslation } from 'react-i18next';


function Curriculo() {
const { t } = useTranslation();

    return (
    
        <main className='curriculo_conteudo'>
            <aside className='curriculo_box formacao single-column'> 
                <h2>{t('resume.courses_title')}</h2>
                <ul>
                {t('resume.courses', { returnObjects: true }).map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
                </ul>
            </aside>

            <div className='curriculo_box-container'>
                <div className='curriculo_box idiomas single-column'> 
                <h2>{t('resume.education_title')}</h2>
                <ul>
                    <li>{t('resume.education')}</li>
                </ul>
                </div>

                <div className='curriculo_box hard'> 
                <h2>{t('resume.hardskills_title')}</h2>
                <ul className="single-column">
                    {t('resume.hardskills', { returnObjects: true }).map((item, index) => (
                    <li key={index}>{item}</li>
                    ))}
                </ul>
                </div>

                <div className='curriculo_box soft'>
                <h2>{t('resume.softskills_title')}</h2>
                <ul>
                    {t('resume.softskills', { returnObjects: true }).map((item, index) => (
                    <li key={index}>{item}</li>
                    ))}
                </ul>
                </div>

                <div className='curriculo_box idiomas single-column'> 
                <h2>{t('resume.languages_title')}</h2>
                <ul>
                    {t('resume.languages', { returnObjects: true }).map((item, index) => (
                    <li key={index}>{item}</li>
                    ))}
                </ul>
                </div>
            </div>
            </main>

    )
}

export default Curriculo
