import React from "react";
import './produtos.css'
import ArrayProdutos from "../arrayProdutos/arrayProdutos.tsx";

function Produtos({categoria}) {
    return (
        <div class="separator">
            <div class="titleProdutos">
                <h1>{categoria}</h1>
            </div>
            <div class="cardsProdutos">
                <ArrayProdutos categoria={categoria} />
            </div>
        </div>
    )
}

export default Produtos;