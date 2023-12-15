require("dotenv").config(); //Configuração .env

const mysql2 = require("mysql2"); // Config do banco de dados
const express = require('express');
const cors = require('cors');
const bcrypt = require("bcryptjs");
const saltRounds = 10;

const db = mysql2.createConnection({ //Passando as informações do banco de dados para criar a conexão
    host: "localhost",
    user: "root",
    password: "root",
    database: "clientes"
});

db.connect((err) => { // Fazendo a conexão
    if (err) {
        console.log(err) // Caso, de um erro
    } else {
        console.log('Conectado ao mySql..') // Mostra no console
    }
})

const port = process.env.PORT;

const app = express(); // Criando uma aplicação do express

app.use(express.json());
app.use(cors());
app.listen(port);

console.log("BackEND rodando");

app.get('/', (req, res) => {
    res.json({
        message: "Funcionando!"
    })
})

app.post("/cadastrar", async (req, res) => {
    /* Pega os valores digitados nos campos */
    const cadCpf = req.body.cadastroCpf;
    const cadUsuario = req.body.cadastroUsuario;
    const cadSenha = req.body.cadastroSenha;
    const cadCep = req.body.cadastroCEP;

    db.query("SELECT * FROM clientes WHERE cpf = ?", [cadCpf], (err, result) => { // Verifica se o cpf ja não foi cadastrado
        if (err) {
            res.send(err);
        }

        console.log(result)

        if (result.length == 0) { // Se não, cria um novo usuario
            db.query(
                "INSERT INTO clientes(cpf, nome, senha, cep) VALUE (?,?,?,?)",
                [cadCpf, cadUsuario, cadSenha, cadCep],
                (error, response) => {
                    if (err) {
                        res.send(err);
                    }
                    res.send({ msg: " Usuario cadastrado com sucesso!" });
                })
        } else {
            res.send({ msg: "Cpf ja cadastrado!" });
        }
    })
});

app.post("/logar", async (req, res) => {

    const logCpf = req.body.loginCpf;
    const logSenha = req.body.loginSenha;

    db.query("SELECT * FROM clientes WHERE cpf = ? and senha = ?", [logCpf, logSenha], (err, result) => { // Procura no banco de dados um cpf e uma senha que sejam iguais a os que foram digitados pelo usuario
        if (err) {
            res.send(err);
        }
        console.log(result);
        if (result.length > 0) { // Se achar, usuario logado!
            res.send({ msg: "Usuário logado" })
        } else {
            res.send({ msg: "Usuário não registrado!" });
        }
    });
});


