import React from 'react';
import './login.css';
import userIcon from '../icons/userIcon.svg';
import senhaIcon from '../icons/senhaIcon.svg';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

export default function Login() {

    const fazerLogin = (values) => {
        console.log(values)
        console.log("Login")
        axios.post("http://localhost:3000/cadastrar", {
            cadastroCpf: values.cadastroCpf,
            cadastroUsuario: values.cadastroUsuario
        }).then((data) => {
            console.log(data);

        });
    };


    const verificaLogin = yup.object().shape({  // Verifica os campos e informa ao usuário se há erros
        loginCpf: yup.string().matches("[0-9]+", "O cpf deve conter apenas números").required("Este campo é obrigatório").min(11, "O cpf deve ter 11 dígitos").max(11, "O cpf deve ter 11 dígitos"),
        loginSenha: yup.string().required("Este campo é obrigatório").min(5).max(200)
    })

    return (
        <div class="main">
            <div class="login">
                <div class="content">
                    <h2>Fazer Login</h2>
                    <p>Use os campos abaixo para entra na sua conta P&R</p>
                    <Formik
                        initialValues={{}}
                        onSubmit={fazerLogin}
                        validationSchema={verificaLogin}>
                        <Form class="form" action='POST'>
                            <div class="inputBox">
                                <Field type="text" placeholder='Digite seu CPF' name='loginCpf' id="loginCpf" required style={{ backgroundImage: `url(${userIcon})`, backgroundRepeat: "no-repeat", backgroundPosition: "20px 18px", padding: "12px 45px 12px 60px" }} />
                                <ErrorMessage
                                    component="span"
                                    name='cadastroCpf'
                                    className='formError' />
                            </div>
                            <div className="inputBox">
                                <Field type="password" placeholder='Digite sua senha' name='loginSenha' id="loginSenha" required style={{ backgroundImage: `url(${senhaIcon})`, backgroundRepeat: "no-repeat", backgroundPosition: "20px 18px", padding: "12px 45px 12px 60px" }} />
                                <ErrorMessage
                                    component="span"
                                    name='cadastroCpf'
                                    className='formError' />
                            </div>
                            <div class="inputBox buttonEnviar">
                                <button type="submit">Login</button>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
            <div class='cadastro'>
                <div className='cadastro--titulo'>Criar uma conta é rápido, fácil e gratuito!</div>
                <div className='cadastro--content'>Com a sua conta da P&R você tem acesso a Ofertas exclusivas, descontos, pode criar e gerenciar a sua Assinatura P&R, acompanhar os seus pedidos e muito mais!</div>
                <Link to='/cadastro'><div className='cadastro--link'>Cadastre-se</div></Link>
            </div>
        </div>);
}
