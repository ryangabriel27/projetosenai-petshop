import React from "react";
import Header from '../header/header.js';
import './produtos.css'
import { Link } from 'react-router-dom';
import ArrayProdutos from "../arrayProdutos/arrayProdutos.tsx";

export default function ProdutosOutros() {
    return (
        <div class="separator">
            <div class="titleProdutos">
                <h1>Outros</h1>
            </div>
            <div class="cardsProdutos">
                <ArrayProdutos categoria="Outros"/>
            </div>
        </div>
    );
}