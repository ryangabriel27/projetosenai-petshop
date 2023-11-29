require("dotenv").config(); //Configuração .env

const db = require("./db");
const express = require('express');
const cors = require('cors');

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

app.get('/clientes/:cpf', async (req, res) => {
    const cliente = await db.listarCliente(req.params.cpf);
    res.json(cliente);
})

app.get('/clientes', async (req, res) => {
    const clientes = await db.listarClientes();
    res.json(clientes);
})

app.post("/cadastroCliente", async (req, res) => {
    await db.cadastrarCliente(req.body);
    res.sendStatus(201) // Cadastro feito com sucesso!
})



