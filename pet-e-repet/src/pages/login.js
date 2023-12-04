import React, { useState } from 'react';
import '../styles/styleLogin.css';
import userIcon from '../icons/userIcon.svg';
import senhaIcon from '../icons/senhaIcon.svg';
import { Link } from 'react-router-dom';

export default function Login() {


    return (
        <div className='main'>
            <div className="login">
                <div class="content">
                    <h2>Fazer Login</h2>
                    <p>Use os campos abaixo para entra na sua conta P&R</p>
                    <form class="form" action='POST'>
                        <div class="inputBox">
                            <input type="text" placeholder='Digite seu CPF' required style={{ backgroundImage: `url(${userIcon})`, backgroundRepeat: "no-repeat", backgroundPosition: "20px 18px", padding: "12px 45px 12px 60px" }} />
                        </div>
                        <div className="inputBox">
                            <input type="password" placeholder='Digite sua senha' required style={{ backgroundImage: `url(${senhaIcon})`, backgroundRepeat: "no-repeat", backgroundPosition: "20px 18px", padding: "12px 45px 12px 60px" }} />
                        </div>
                        <div class="inputBox buttonEnviar">
                            <button type="submit">Login</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className='cadastro'>
                <div style={{ width: 500, height: 129, left: 0, top: 0, color: '#090C20', fontSize: 45, fontFamily: 'Fredoka', fontWeight: '900', wordWrap: 'break-word' }}>Criar uma conta é rápido, fácil e gratuito!</div>
                <div style={{ width: 400, height: 150, left: 0, top: 110, color: '#243387', fontSize: 23, fontFamily: 'Product Sans', fontWeight: '400', wordWrap: 'break-word' }}>Com a sua conta da P&R você tem acesso a Ofertas exclusivas, descontos, pode criar e gerenciar a sua Assinatura P&R, acompanhar os seus pedidos e muito mais!</div>
                <Link to='/cadastro'><div style={{ width: 401, height: 39, left: 0, top: 267, color: '#CB445B', fontSize: 40, fontFamily: 'Fredoka', fontWeight: '800', wordWrap: 'break-word', textDecoration: 'underline' }}>Cadastre-se</div></Link>
            </div>
        </div>);
}
