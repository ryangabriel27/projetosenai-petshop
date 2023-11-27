import React from "react";
import Slider from './carousel/slider.js';
import InfoHome from './infoHome/infoHome.js';
import './home.css';


export default function HomePage() {
    return (<><nav className="atendimentos">
        <div className="banho-e-tosa">
            <p>Banho & Tosa</p>
        </div>
        <div className="adestramento">
            <p>Adestramento</p>
        </div>
        <div className="adote">
            <p>Adote</p>
        </div>
        <div className="blog">
            <p>Blog</p>
        </div>
    </nav>
    {<Slider />}
    {<InfoHome />}
    </>
    )
}