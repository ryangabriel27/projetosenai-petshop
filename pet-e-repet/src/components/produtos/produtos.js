import React from "react";
import { useEffect } from 'react';
import './produtos.css'
import ArrayProdutos from "../arrayProdutos/arrayProdutos.tsx";

function Produtos({ categoria }) {
    return (
        <>
        <html>
        <head>
            <title>{categoria}</title>
        </head>
        </html>

        <div class="separator">
            <div class="titleProdutos">
                <h1>{categoria}</h1>
            </div>
            <div class="cardsProdutos">
                <ArrayProdutos categoria={categoria} />
            </div>
        </div>
        </>
    )
}

export default Produtos;