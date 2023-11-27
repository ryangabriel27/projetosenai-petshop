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
<<<<<<< HEAD
    
=======
    {<Slider />}
    {<InfoHome />}
>>>>>>> db7bdcc36626be1101025be977cdb56d8ade38e3
    </>
    )
}