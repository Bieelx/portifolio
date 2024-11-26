import React from 'react';
import '../CSS/curriculo.css';

function Curriculo() {

    return (
    
        <main className='curriculo_conteudo'>
        <aside className='curriculo_box formacao single-column'> 
            <h2>Cursos</h2>
            <ul>
            <li><strong>ChatGPT</strong> e <strong>JavaScript</strong>: construa o jogo Pong</li>
            <li><strong>HTML</strong> e <strong>CSS</strong>: ambientes de desenvolvimento, estrutura de arquivos e tags</li>
            <li><strong>HTML</strong> e <strong>CSS</strong>: cabeçalho, footer e variáveis CSS</li>
            <li><strong>HTML</strong> e <strong>CSS</strong>: Classes, posicionamento e Flexbox</li>
            <li><strong>HTML</strong> e <strong>CSS</strong>: praticando HTML/CSS</li>
            <li><strong>HTML</strong> e <strong>CSS</strong>: responsividade com mobile-first</li>
            <li><strong>HTML</strong> e <strong>CSS</strong>: trabalhando com responsividade e publicação de projetos</li>
            <li><strong>JavaScript</strong> e <strong>HTML</strong>: desenvolva um jogo e pratique lógica de programação</li>
            <li><strong>JavaScript</strong> para Web: Crie páginas dinâmicas</li>
            <li><strong>JavaScript</strong>: manipulando elementos no DOM</li>
            <li><strong>Python</strong>: aplicando a Orientação a Objetos</li>
            <li><strong>Python</strong>: crie a sua primeira aplicação</li>
            <li><strong>SQLite</strong> online: conhecendo instruções SQL</li>
            <li><strong>SQLite</strong> Online: executando consultas SQL</li>
            </ul>
        </aside>
        <div className='curriculo_box-container'>
            <div className='curriculo_box formacao single-column'> 
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