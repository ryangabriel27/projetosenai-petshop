import React from "react";
import './footer.css'
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer>
            <div class="footerAll">
                <svg xmlns="http://www.w3.org/2000/svg" width="1920" height="101" viewBox="0 0 1920 101" fill="none">
                    <path d="M1920 14.0963C1158.4 -51.1556 711.295 138.372 -5 14.0963V101H1920V14.0963Z" fill="#8D7CB4" />
                </svg>
                <div class="textFooter">
                    <div class="footerTitle">
                        <h4>Voltar para a página inicial</h4>
                    </div>
                    <div class="footerSubTexts">
                        <div class="footerSub1">
                            <h5>Genaro Comércio de Produtos para Animais S.A.</h5>
                            <h5>CNPJ: 11.142.727/0001-20</h5>
                            <h5>Avenida Dezoito, Estr. Mun. - LIM 353 - Jardim Nova Limeira, Limeira - SP, 13480-970</h5>
                        </div>
                        <div class="footerSub2">
                            <h5>Compra segura - A Pet&Repet garante segurança para suas informações pessoais e financeiras</h5>
                            <h5>Copyright 2023 © Todos os direitos reservados à Pet&Repet</h5>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}