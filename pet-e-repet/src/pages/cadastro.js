import React from 'react';
import '../styles/styleCadastro.css';
import imgCadastro from '../icons/img_cadastro.png';
import userIcon from '../icons/userIcon.svg';
import senhaIcon from '../icons/senhaIcon.svg';
import cepIcon from '../icons/cepIcon.svg';
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";

export default function Cadastro() {

    const [cpf, setCpf] = useState('');
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const [cep, setCep] = useState('');

    const doCadastro = async (e) => {
        e.preventDefault();

        console.log(cpf, senha);
        const res = await axios.post('http://localhost:3000/cadastroCliente', JSON.stringify({ cpf, nome, senha, cep }, {
            headers: { 'Content-Type': 'application/json' }
        }))
    }

    return (
        <div className='cadastro-main'>
            <div className='cadastro-foto'>
                <img src={imgCadastro} alt='imgCadastro' />
            </div>
            <div className='cadastro-form'>
                <div className='form-title'>
                    <h3>Crie sua conta de membro P&R e tenha dezenas de benefícios exclusivos</h3>
                </div>
                <form class="form--cadastro" action='POST'>
                    <div class="inputs">
                        <input type="text" placeholder='Digite seu CPF' name='cadastroCpf' onChange={(e) => setCpf(e.target.value)} required style={{ backgroundImage: `url(${userIcon})`, backgroundRepeat: "no-repeat", backgroundPosition: "20px 18px", padding: "12px 45px 12px 60px" }} />
                    </div>
                    <div class="inputs">
                        <input type="text" placeholder='Digite seu usuario' name='cadastroUsuario' onChange={(e) => setNome(e.target.value)} required style={{ backgroundImage: `url(${userIcon})`, backgroundRepeat: "no-repeat", backgroundPosition: "20px 18px", padding: "12px 45px 12px 60px" }} />
                    </div>
                    <div className="inputs">
                        <input type="password" placeholder='Digite sua senha' name='cadastroSenha' onChange={(e) => setSenha(e.target.value)} required style={{ backgroundImage: `url(${senhaIcon})`, backgroundRepeat: "no-repeat", backgroundPosition: "20px 18px", padding: "12px 45px 12px 60px" }} />
                    </div>
                    <div className="inputs">
                        <input type="password" placeholder='Digite seu CEP' name='cadastroCEP' onChange={(e) => setCep(e.target.value)} required style={{ backgroundImage: `url(${cepIcon})`, backgroundRepeat: "no-repeat", backgroundPosition: "20px 18px", padding: "12px 45px 12px 60px" }} />
                    </div>
                    <div class="inputs buttonEnviar">
                        <button type="submit" onClick={(e) => doCadastro(e)} style={{ width: '300px' }}>Cadastrar-se</button>
                    </div>
                    <div className='form-text'>
                        <p>A P&R não utiliza seus dados para nada além de te logar na sua conta.</p>
                    </div>
                </form>
            </div>
        </div>
    )
}

