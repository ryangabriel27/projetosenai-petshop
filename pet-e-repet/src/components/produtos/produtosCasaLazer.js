import React from "react";
import Header from '../header/header.js';
import './produtos.css'
import { Link } from 'react-router-dom';
import ArrayProdutos from "../arrayProdutos/arrayProdutos.tsx";

export default function ProdutosCasaLazer() {
    return (
        <div class="separator">
            <div class="titleProdutos">
                <h1>Casa & Lazer</h1>
            </div>
            <div class="cardsProdutos">
                <ArrayProdutos categoria="Casa e Lazer"/>
            </div>
        </div>
    );
}