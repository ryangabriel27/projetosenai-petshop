import React from "react";
import Slider from './carousel/slider.js';
import InfoHome from './infoHome/infoHome.js';
import './home.css';


export default function HomePage() {
    return (<>
        <div className="atendimentos">
            <div className="atendimentosButton" id="banhoETosa">
                <p>Banho & Tosa</p>
            </div>
            <div className="atendimentosButton" id="adestramentos">
                <p>Adestramento</p>
            </div>
            <div className="atendimentosButton" id="adote">
                <p>Adote</p>
            </div>
            <div className="atendimentosButton" id="blog">
                <p>Blog</p>
            </div>
        </div>
        <div className="carrossel">
            <Slider />
        </div>
        <InfoHome />
    </>
    )
}