import React from "react";
import './produtos.css'

export default function Produtos() {
    return (
        <div class="separator">
            <div class="titleProdutos">
                <h1>Animal</h1>
            </div>
            <div class="cardsProdutos">
                <div class="card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuKMG6ofxY3qEXxZ2h7vGIaBBLU3z0Av1cI1KlDJO7nV-IMY3FSUpgVl7OmiW9ShwNTB4&usqp=CAU" alt="Imagem do produto"></img>
                    <h2>Item</h2>
                    <p>Descrição do item, como o peso, a marca e outras especificações</p>
                    <button>Comprar</button>
                </div>
            </div>
        </div>
    );
}