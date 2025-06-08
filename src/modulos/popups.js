import React, { useState } from 'react';
import '../CSS/popups.css';
import { useTranslation } from 'react-i18next';

const projects = [
  {
    id: 1,
    className: 'project1',
    link: "https://bieelxfuria.netlify.app/",
    image: require('../img/FuriaBot.png')
  },
  {
    id: 2,
    className: 'project2',
    link: "https://github.com/Bieelx/oceansense",
    image: require('../img/oceasense.png')
  },
  {
    id: 3,
    className: 'project3',
    link: "https://github.com/Mikael139/sistema_de_gestao",
    image: require('../img/gtx.jpg')
  },
  {
    id: 4,
    className: 'project4',
    link: "https://github.com/Bieelx/MentalAid-FIAP",
    image: require('../img/Felipao.png')
  }
];

function Popups() {
  const { t } = useTranslation();
  const [activePopup, setActivePopup] = useState(null);
  const [closingPopup, setClosingPopup] = useState(false);

  const openPopup = (id) => {
    setActivePopup(id);
  };

  const closePopup = () => {
    setClosingPopup(true);
    setTimeout(() => {
      setActivePopup(null);
      setClosingPopup(false);
    }, 300);
  };

  const activeProject = projects.find(project => project.id === activePopup);

  return (
    <div className="popups-container">
      {/* Caixas que disparam os pop-ups */}
      {projects.map(project => (
        <div 
          key={project.id} 
          className={`popup-box ${project.className}`}
          onClick={() => openPopup(project.id)}
        >
          {t(`projects.${project.id}.title`)}
        </div>
      ))}

      {/* Estrutura do pop-up */}
      {activeProject && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-fundo"></div>
          <div
            className={`popup-content ${closingPopup ? 'closing' : ''}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="popup-image" style={{ backgroundImage: `url(${activeProject.image})` }}></div>
            <h2 className="popup-titulo">{t(`projects.${activeProject.id}.title`)}</h2>
            <p className="popup-descricao">{t(`projects.${activeProject.id}.description`)}</p>
            <a
              href={activeProject.link}
              target="_blank"
              rel="noopener noreferrer"
              className="popup-link"
            >
              {t('projects.link')}
            </a>
            <button onClick={closePopup} className="button type1">
              <span className="btn-txt">{t('projects.button')}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Popups;
