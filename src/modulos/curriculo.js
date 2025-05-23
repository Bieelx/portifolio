import React from 'react';
import '../CSS/curriculo.css';

function Curriculo() {

    return (
    
        <main className='curriculo_conteudo'>
        <aside className='curriculo_box formacao single-column'> 
            <h2>Cursos</h2>
            <ul>
            <li><strong>Python – FIAP Nano:</strong> Sintaxe, estruturas de controle, funções, POO, Flask e Django.</li>
            <li><strong>UX Design — FIAP Nano:</strong> Usabilidade, arquitetura da informação, design thinking, pesquisas, Google Analytics, prototipação.</li>
            <li><strong>Python com orientação a objeto – Alura:</strong> POO, classes, objetos, herança, polimorfismo para soluções estruturadas.</li>
            <li><strong>UiPath Avançado – Practia:</strong> Domínio da ferramenta UiPath, RPA, automações para otimização de processos.</li>
            <li><strong>HTML e CSS para projeto web – Alura:</strong> Construção de páginas web, estilização, layouts responsivos.</li>
            <li><strong>Scrum Fundamentos:</strong> Framework ágil Scrum, papéis, eventos, artefatos, gestão de projetos, entregas incrementais.</li>
            <li><strong>.NET Developer Fundamentos (em andamento) - Alura:</strong> Conceitos .NET e C#, APIs, arquitetura MVC, back-end POO.</li>
            <li><strong>Excel (básico ao intermediário):</strong> Funções essenciais (PROCV, PROCH, PROCX), análise e manipulação de dados.</li>
            <li><strong>Introdução ao Sistema Sinacor – Escola B3:</strong> Funcionamento do Sinacor, rotinas operacionais, liquidação, mercado de capitais.</li>
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
            <ul className="single-column"> {/* Add single-column class here to make it a single column list */}
                <li><strong>Linguagens:</strong> Python, SQL, VBA, JavaScript, C# (aprendizado ativo)</li>
                <li><strong>Ferramentas e Visualização:</strong> Excel (avançado), Power BI, Looker Studio</li>
                <li><strong>Automação e RPA:</strong> UiPath, scripts em Python para tarefas operacionais</li>
                <li><strong>Banco de Dados:</strong> MySQL, PostgreSQL</li>
                <li><strong>Desenvolvimento:</strong> React, Spring Boot, .NET (aprendizado ativo)</li>
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
