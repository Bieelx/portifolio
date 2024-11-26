import React, { useState } from 'react';
import '../CSS/popups.css';

const projects = [
  {
    id: 1,
    title: "OceanSense",
    description: "O OceanSense é um projeto desenvolvido em React durante a competição Global Solution da FIAP, onde minha equipe ficou entre os vencedores entre 30 grupos. Criamos uma solução tecnológica para monitorar e preservar os oceanos, utilizando sensores para coletar dados como temperatura e pH da água, exibidos em um dashboard responsivo e interativo, inspirado no Material UI. O projeto destacou nossa organização, trabalho em equipe e foco em uma interface moderna e amigável.",
    className: 'project1',
    link: "https://github.com/Bieelx/oceansense",
    image: require('../img/oceasense.png')  },
  {
    id: 2,
    title: "Sistema de gestão",
    description: "O projeto GTX, criado para o FIAP Next, foi uma experiência desafiadora de desenvolvimento de um sistema de gestão que otimiza o fluxo de informações e simplifica a administração empresarial. Fui responsável pela criação de uma interface intuitiva e eficiente e pela integração com o banco de dados, garantindo o armazenamento e a recuperação rápida de informações. Esse projeto me permitiu aplicar e aprimorar conhecimentos em front-end, backend, otimização de desempenho e responsividade. Trabalhar no GTX foi gratificante, tanto pelo crescimento técnico quanto pela colaboração enriquecedora da equipe. Esse projeto garantiu ao meu grupo o Top 1 na competição do NEXT",
    className: 'project2',
    link: "https://github.com/Mikael139/sistema_de_gestao",
    image: require('../img/gtx.jpg') // Exemplo de caminho da imagem
  },
  {
    id: 3,
    title: "MentalAid",
    description: "Meu primeiro grande projeto em front-end foi desenvolvido para o FIAP Next do ano passado, com o objetivo de criar um site voltado a idosos com demência. A ideia era desenvolver uma plataforma que pudesse oferecer apoio cognitivo, reduzir a solidão e auxiliar com lembretes para atividades diárias. O site continha jogos interativos para estimular a memória e a atenção, uma IA projetada para que o usuário pudesse conversar e sentir companhia, além de alertas para incentivá-los a se levantar e se movimentar ao longo do dia. Também adicionei uma área informativa para educar sobre a demência, facilitando o acesso a informações de forma clara e acolhedora.",
    className: 'project3',
    link: "https://github.com/Bieelx/MentalAid-FIAP",
    image: require('../img/Felipao.png') // Exemplo de caminho da imagem
  },
];


function Popups() {
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
    }, 300); // O tempo da animação (300ms para encolher)
  };

  const activeProject = projects.find(project => project.id === activePopup);

  return (
    <div className="popups-container">
      {/* Caixas que disparam os pop-ups */}
      {projects.map(project => (
        <div 
          key={project.id} 
          className={`popup-box ${project.className}`} // Adiciona a classe da imagem de fundo
          onClick={() => openPopup(project.id)}
        >
          {project.title}
        </div>
      ))}

      {/* Estrutura do pop-up */}
      {activeProject && (
  <div className="popup-overlay" onClick={closePopup}>
    <div className="popup-fundo"></div>
    <div className={`popup-content ${closingPopup ? 'closing' : ''}`}
    onClick={(e) => e.stopPropagation()}>
      {/* Imagem no topo com gradiente */}
      <div className="popup-image" style={{ backgroundImage: `url(${activeProject.image})` }}></div>
      <h2 className="popup-titulo">{activeProject.title}</h2>
      <p className="popup-descricao">{activeProject.description}</p>
      <a href={activeProject.link} target={activeProject.link} rel="noopener noreferrer" className="popup-link">Acesse nosso repósitorio no GitHub!!</a>
      <button onClick={closePopup} className="button type1">
        <span className='btn-txt'>Fechar</span>
      </button>
    </div>
  </div>
)}

    </div>
  );
}

export default Popups;
