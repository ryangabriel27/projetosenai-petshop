import React from "react";
import './produtos.css'
import ArrayProdutos from "../arrayProdutos/arrayProdutos.tsx";

export default function ProdutosAves() {
    return (
        <div class="separator">
            <div class="titleProdutos">
                <h1>Aves</h1>
            </div>
            <div class="cardsProdutos">
                <ArrayProdutos categoria="Aves"/>
            </div>
        </div>
    );
}