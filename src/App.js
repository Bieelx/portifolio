import React, { useEffect } from 'react';

import tech from './img/Tech.png';
import eu from './img/eu.jpg';
import './CSS/App.css';
import './CSS/curriculo.css';
import Typewriter from './modulos/maquinaescrever';
import Popups from './modulos/popups';
import Curriculo from './modulos/curriculo';
import Reconhecimentos from './modulos/reconhecimentos';

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
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);


  return (
    <div className="App">
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
          <div className='Tech'>
            <img src={tech} alt="Tech" />
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

