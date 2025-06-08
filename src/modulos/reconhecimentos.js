import React from "react";
import '../CSS/reconhecimentos.css';
import { useTranslation } from 'react-i18next';


import gtx from '../img/gtx.jpg'
import oceansense from '../img/oceasense.png'

function Reconhecimentos() {
    const { t } = useTranslation();

    return (
       <div className="flip-card-container">
        <div className="card">
            <div className="card-image">
            <img src={oceansense} alt="OceanSense" />
            </div>
            <p className="card-title">{t("awards.1.title")}</p>
            <p className="card-body">{t("awards.1.description")}</p>
        </div>

        <div className="card">
            <div className="card-image">
            <img src={gtx} alt="GTX" />
            </div>
            <p className="card-title">{t("awards.2.title")}</p>
            <p className="card-body">{t("awards.2.description")}</p>
        </div>
        </div>

    );
}

export default Reconhecimentos