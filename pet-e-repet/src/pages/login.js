import React from 'react';
import '../styles/styleLogin.css';
import userIcon from '../icons/userIcon.svg';
import senhaIcon from '../icons/senhaIcon.svg';

export default function login() {
    return (
        <div className='main'>
            <div className="login">
                <div class="content">
                    <h2>Fazer Login</h2>
                    <p>Use os campos abaixo para entra na sua conta P&R</p>
                    <form class="form" action='POST'>
                        <div class="inputBox">
                            <input type="text" placeholder='Digite seu CPF' required style={{backgroundImage: `url(${userIcon})`,backgroundRepeat: "no-repeat", backgroundPosition: "20px 10px", padding: "12px 45px 12px 60px"}}/>
                        </div>
                        <div className="inputBox">
                            <input type="password" placeholder='Digite sua senha' required />
                        </div>
                        <div class="inputBox buttonEnviar">
                            <button type="button">Login</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className='cadastro'>

            </div>
        </div>);
}
