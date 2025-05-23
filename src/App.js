import React, { useEffect } from 'react';

import eu from './img/eu.jpg';
import './CSS/App.css';

// Importando ícones das tecnologias
import csharpIcon from './img/tech/C#.png';
import dotnetIcon from './img/tech/dotnet.png';
import javascriptIcon from './img/tech/javascript.png';
import powerbiIcon from './img/tech/powerbi.png';
import pythonIcon from './img/tech/python.png';
import reactIcon from './img/tech/react.png';
import springbootIcon from './img/tech/springboot.png';
import sqlIcon from './img/tech/sql.png';
import tailwindIcon from './img/tech/tailwind.png';
import uipathIcon from './img/tech/uipath.png';
import './CSS/curriculo.css';

import Typewriter from './modulos/maquinaescrever';
import Popups from './modulos/popups';
import Curriculo from './modulos/curriculo';
import Reconhecimentos from './modulos/reconhecimentos';
import git from './img/git.png';
import linkedin from './img/linkedin.png';
import instagram from './img/instagram.png';

function App() {

    // Função para detectar a rolagem da página
    useEffect(() => {
      const handleScroll = () => {
        const navbar = document.querySelector('.navbar');
        const bemVindoSection = document.querySelector('.bem_vindo');
  
        if (window.scrollY > bemVindoSection.offsetHeight) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      window.addEventListener('resize', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleScroll);
      };
    }, []);

    // Efeito para seguir o mouse
    useEffect(() => {
 const mouseLight = document.querySelector('.mouse-light');

 const handleEvent = (e) => {
      if (e.type.startsWith('touch')) {
 e.preventDefault(); // Prevent default touch behaviors like scrolling
      }
      const clientX = e.clientX || e.touches[0].clientX;
      const clientY = e.clientY || e.touches[0].clientY;
 mouseLight.style.left = `${clientX - 5}px`; // Subtract half the width
 mouseLight.style.top = `${clientY - 5}px`; // Subtrai metade da altura
 };

 window.addEventListener('mousemove', handleEvent);
        window.addEventListener('touchmove', handleEvent);
        window.addEventListener('touchstart', handleEvent);

        return () => {
 window.removeEventListener('mousemove', handleEvent);
            window.removeEventListener('touchmove', handleEvent);
            window.removeEventListener('touchstart', handleEvent);
        };
    }, []); // O array vazio garante que o efeito rode apenas uma vez ao montar

    // Adicione um z-index maior para o popup no arquivo CSS (por exemplo, CSS/popups.css)
  return (
    <div className="App">
      <div className='mouse-light'></div>
      <header className='navbar_pai'>
          <nav>
            <ul className='navbar'>
              <li><a href="#bem_vindo" className="navbar_link">Home</a></li>
              <li><a href="#sobre_mim" className="navbar_link">Sobre mim</a></li>
              <li><a href="#projetos" className="navbar_link">Projetos</a></li>
              <li><a href="#curriculo" className="navbar_link">Curriculo</a></li>
              <li><a href="#reconhecimentos" className="navbar_link">Reconhecimentos</a></li>
            </ul>
          </nav>
      </header>
      <section className='bem_vindo' id='bem_vindo'>
        <main className='boas_vindas'>
          <div className='bem_vindo_texto'>
            <h1>
                Bem-Vindo ao meu portfólio <br/>
              <Typewriter text="Gabriel Araujo " speed={100} />
            </h1>
            <h2>
              Front-End | UI/UX Designer | Data Analytics
            </h2>
          </div>
          <div className='tech-icons'>
            <img src={reactIcon} alt='React' />
            <img src={javascriptIcon} alt='JavaScript' />
            <img src={tailwindIcon} alt='Tailwind' />
            <img src={springbootIcon} alt='Spring Boot' />
            <img src={sqlIcon} alt='SQL' />
            <img src={pythonIcon} alt='Python' />
            <img src={csharpIcon} alt='C#' />
            <img src={dotnetIcon} alt='.NET' />
            <img src={powerbiIcon} alt='Power BI' />
            <img src={uipathIcon} alt='UiPath' />
          </div>
          <div className='contato'>
            <div className='box_contato github'>
              <a href="https://github.com/Bieelx" target="_blank" rel="noopener noreferrer">
                <img src={git} alt="GitHub" />
              </a>
            </div>
            <div className='box_contato linkedin'>
              <a href="https://www.linkedin.com/in/gabriel-deoliveira-araujo/" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="LinkedIn" />
              </a>
            </div>
            <div className='box_contato instagram'>
              <a href="https://www.instagram.com/ibieelx/" target="_blank" rel="noopener noreferrer">
                <img src={instagram} alt="Instagram" />
              </a>
            </div>
          </div>
        </main>
      </section>
      
      <section className='sobre_mim' id="sobre_mim">
        <main className='sobre_mim_conteudo'>
         <div className='sobre_conteudo'>
            <img src={eu} alt="eu" />
            <div>
              <h1>Sobre mim</h1>
              <h2>
                  Oi! Sou o Gabriel, estudante de Sistemas de Informação na FIAP e apaixonado por tecnologia. 
                  Trabalho com React, Python, JavaScript e SQL, sempre focado em criar soluções práticas e com interfaces amigáveis. 
                  Minhas habilidades técnicas incluem desenvolvimento front-end e análise de dados.
                  <br/>
                  Quando não estou codando, estou provavelmente na academia, lendo ou assistindo a um bom filme de terror. 
                  Sou aquele nerd de boa que curte colaborar em equipe, resolver problemas com criatividade e aprender coisas novas.
                  <br/>
                  Com esse perfil focado e descontraído, busco crescer na área de tecnologia, contribuindo com ideias e habilidades para criar projetos inovadores.
              </h2>
            </div>
          </div>
        </main>
      </section>
      <section className='projetos' id="projetos">
        <main className='projetos_conteudo'>
          <h1>Projetos</h1>
          <Popups />
        </main>
      </section>

      <section className='curriculo' id="curriculo">
          <h1>Curriculo</h1>
          <Curriculo />
      </section>

      <section className='reconhecimentos' id='reconhecimentos'>
        <h1>Reconhecimentos</h1>
        <Reconhecimentos />
      </section>
    </div>
  );
}

export default App;

