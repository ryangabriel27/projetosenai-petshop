require("dotenv").config(); //Configuração .env

const mysql = require("mysql"); // Config do banco de dados
const express = require('express');
const cors = require('cors');
const bcrypt = require("bcrypt");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "clientes",
});

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

    const cadCpf = req.body.cadastroCpf;
    const cadUsuario = req.body.cadastroUsuario;
    const cadSenha = req.body.cadastroSenha;
    const cadCep = req.body.cadastroCEP;

    db.query("SELECT * FROM clientes WHERE cpf = ?", [cadCpf], (err, result) => {
        if (err) {
            res.send(err);
        }
        if (result.length == 0) {
            bcrypt.hash(cadastroSenha, saltRounds, (err, hash) => {
                db.query(
                    "INSERT INTO clientes (cpf, nome, senha, cep) VALUE (?,?,?,?)",
                    [cadCpf, cadUsuario, hash, cadCep],
                    (error, response) => {
                        if (err) {
                            res.send(err);
                        }

                        res.send({ msg: " Usuario cadastrado com sucesso!" });
                    })
            })

        } else {
            res.send({ msg: "Cpf ja cadastrado!" });
        }
    });
});

app.post("/logar", async (req, res) => {
     
    const cpf = req.body.loginCpf;
    const senha = req.body.loginSenha;

    db.query("SELECT * FROM clientes WHERE cpf = ?", [cpf], (err, result) => {
        if (err) {
            res.send(err);
        }
        if (result.length > 0) {
            bcrypt.compare(senha, result[0].senha, (error, response) => {
                if (error) {
                    res.send(error);
                }
                if (response) {
                    res.send({ msg: "Usuário logado" });
                } else {
                    res.send({ msg: "Senha incorreta" });
                }
            });
        } else {
            res.send({ msg: "Usuário não registrado!" });
        }
    });
})


