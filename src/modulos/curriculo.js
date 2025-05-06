import React from 'react';
import '../CSS/curriculo.css';

function Curriculo() {

    return (
    
        <main className='curriculo_conteudo'>
        <aside className='curriculo_box formacao single-column'> 
            <h2>Cursos</h2>
            <ul>
            <li><strong>Python - Básico ao Avançado </strong> | FIAP NANO</li>
            <li><strong>UX</strong> e <strong>UI Design</strong>| FIAP NANO</li>
            <li><strong>Python com orientação a objetos</strong>| Alura</li>
            <li><strong>UiPath Avançado</strong>| Practia</li>
            <li><strong>HTML e CSS para projetos web</strong>| Alura</li>
            <li><strong>Scrum: Fundamentos </strong>| Youtube</li>
            <li><strong>Excel Avançado</strong>| Universidade Corporativa</li>
            <li><strong>PowerBI intermediário</strong>| Universidade Corporativa</li>
            <li><strong>SQLite</strong> | Alura</li>
            </ul>
        </aside>
        <div className='curriculo_box-container'>
            <div className='curriculo_box idiomas single-column'> 
            <h2>Formação</h2>
            <ul>
                <li>FIAP - Cursando Sistemas de Informação</li>
            </ul>
            </div>
            <div className='curriculo_box hard'> 
            <h2>Hard Skills</h2>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Python</li>
                <li>Java</li>
                <li>SQL</li>
                <li>Git</li>
                <li>GitHub</li>
                <li>PowerBi</li>
                <li>Excel</li>
                <li>Powerpoint</li>
                <li>Word</li>
                <li>Figma</li>
                <li>Canva</li>
            </ul>
            </div>
            <div className='curriculo_box soft'>
            <h2>Soft Skills</h2>
            <ul>
                <li>Trabalho em equipe</li>
                <li>Comunicação eficaz</li>
                <li>Resolução de problemas</li>
                <li>Organização</li>
                <li>Planejamento</li>
                <li>Adaptabilidade</li>
                <li>Proatividade</li>
                <li>Pensamento crítico</li>
                <li>Liderança</li>
                <li>Criatividade</li>
                <li>Gestão de tempo</li>
                <li>Atenção aos detalhes</li>
                <li>Foco em resultados</li>
                <li>Colaboração</li>
            </ul>
            </div>
            <div className='curriculo_box idiomas single-column'> 
            <h2>Idiomas</h2>
            <ul>
                <li>Inglês - Avançado</li>
            </ul>
            </div>
        </div>
        </main>
    )
}

export default Curriculo
