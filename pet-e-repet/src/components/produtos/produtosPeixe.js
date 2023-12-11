import React from "react";
import './produtos.css'
import ArrayProdutos from "../arrayProdutos/arrayProdutos.tsx";

export default function ProdutosPeixes() {
    return (
        <div class="separator">
            <div class="titleProdutos">
                <h1>Peixe</h1>
            </div>
            <div class="cardsProdutos">
                <ArrayProdutos categoria="Peixe"/>
            </div>
        </div>
    );
}