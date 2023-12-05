import React from 'react';
import '../styles/styleCadastro.css';
import axios from 'axios';
import imgCadastro from '../icons/img_cadastro.png';
import userIcon from '../icons/userIcon.svg';
import senhaIcon from '../icons/senhaIcon.svg';
import cepIcon from '../icons/cepIcon.svg';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

export default function Cadastro() {

    const fazerCadastro = (values) => {
        console.log(values)
        console.log("Cadastro")
        axios.post("http://localhost:3000/cadastrar", {
            cadastroCpf: values.cadastroCpf,
            cadastroUsuario: values.cadastroUsuario,
            cadastroSenha: values.cadastroSenha,
            cadastroCEP: values.cadastroCEP
        }).then((data) => {
            console.log(data);
            
        });
    };


    const verificaCadastro = yup.object().shape({  // Verifica os campos e informa ao usuário se há erros
        cadastroCpf: yup.string().matches("[0-9]+", "O cpf deve conter apenas números").required("Este campo é obrigatório").min(11, "O cpf deve ter 11 dígitos").max(11, "O cpf deve ter 11 dígitos"),
        cadastroUsuario: yup.string().required("Este campo é obrigatório").min(1).max(200),
        cadastroSenha: yup.string().required("Este campo é obrigatório").min(5, "A senha deve ter pelo menos 5 caracteres"),
        cadastroCEP: yup.string().matches("[0-9]+").required("Este campo é obrigatório").min(8, "O cep deve ter 8 dígitos").max(8, "O cep deve ter 8 dígitos")
    })

    return (
        <div className='cadastro-main'>
            <div className='cadastro-foto'>
                <img src={imgCadastro} alt='imgCadastro' />
            </div>
            <div className='cadastro-form'>
                <div className='form-title'>
                    <h3>Crie sua conta de membro P&R e tenha dezenas de benefícios exclusivos</h3>
                </div>
                <Formik
                    initialValues={{}}
                    onSubmit={fazerCadastro}
                    validationSchema={verificaCadastro}>
                    <Form className="form--cadastro">
                        <div class="inputs">
                            <Field type="text" placeholder='Digite seu CPF' name='cadastroCpf' style={{ backgroundImage: `url(${userIcon})`, backgroundRepeat: "no-repeat", backgroundPosition: "20px 18px", padding: "12px 45px 12px 60px" }} />
                            <ErrorMessage
                                component="span"
                                name='cadastroCpf'
                                className='formError' />
                        </div>
                        <div class="inputs">
                            <Field type="text" placeholder='Digite seu usuario' name='cadastroUsuario' style={{ backgroundImage: `url(${userIcon})`, backgroundRepeat: "no-repeat", backgroundPosition: "20px 18px", padding: "12px 45px 12px 60px" }} />
                            <ErrorMessage
                                component="span"
                                name='cadastroUsuario'
                                className='formError' />
                        </div>
                        <div className="inputs">
                            <Field type="password" placeholder='Digite sua senha' name='cadastroSenha' style={{ backgroundImage: `url(${senhaIcon})`, backgroundRepeat: "no-repeat", backgroundPosition: "20px 18px", padding: "12px 45px 12px 60px" }} />
                            <ErrorMessage
                                component="span"
                                name='cadastroSenha'
                                className='formError' />
                        </div>
                        <div className="inputs">
                            <Field type="text" placeholder='Digite seu CEP' name='cadastroCEP' style={{ backgroundImage: `url(${cepIcon})`, backgroundRepeat: "no-repeat", backgroundPosition: "20px 18px", padding: "12px 45px 12px 60px" }} />
                            <ErrorMessage
                                component="span"
                                name='cadastroCEP'
                                className='formError' />
                        </div>
                        <div class="inputs buttonEnviar">
                            <button type="submit" style={{ width: '300px' }}>Cadastrar-se</button>
                        </div>
                        <div className='form-text'>
                            <p>A P&R não utiliza seus dados para nada além de te logar na sua conta.</p>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}
