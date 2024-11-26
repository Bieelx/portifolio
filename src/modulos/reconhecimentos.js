import React from "react";
import '../CSS/reconhecimentos.css';

import gtx from '../img/gtx.jpg'
import oceansense from '../img/oceasense.png'

function Reconhecimentos() {
    return (
        <div class="flip-card-container">
            <div class="card">
                <div class="card-image"><img src={oceansense} alt="OceanSense" /></div>
                    <p class="card-title">GlobalSolution 2024/1</p>
                    <p class="card-body">
                    Ganhei o prêmio GlobalSolution 2024/1 com o projeto Ocean Sense, que foca na criação de soluções inovadoras para o monitoramento e proteção dos oceanos. Esse prêmio reconheceu minha contribuição para a preservação ambiental, aplicando tecnologia para resolver problemas globais relacionados ao meio ambiente.
                    </p>
            </div>

            <div class="card">
                <div class="card-image">
                    <img src={gtx} alt="GTX" />
                </div>
                    <p class="card-title">FIAP Next 2024</p>
                    <p class="card-body">
                    Fiquei em primeiro lugar no FIAP Next 2024, com o prêmio de melhor trabalho. Meu grupo foi reconhecido pelo desenvolvimento do projeto Innovate IT, uma solução de gestão para micro e pequenas empresas, focada em usabilidade e eficiência.                    </p>
            </div>

        </div>
    );
}

export default Reconhecimentos