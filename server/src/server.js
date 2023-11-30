require("dotenv").config(); //Configuração .env

const db = require("./db"); // Config do banco de
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

app.post("/cadastrar", async (req, res) => {

    const cadCpf = req.body.cadastroCpf;
    const cadUsuario = req.body.cadastroUsuario;
    const cadSenha = req.body.cadastroSenha;
    const cadCep = req.body.cadastroCEP;

    db.cadastrarCliente(cadCpf, cadUsuario, cadSenha, cadCep);
    // db.query("SELECT * FROM clientes WHERE cpf = ?", [cadCpf], (err, result) => {
    //     if (err) {
    //         res.send(err);
    //     }
    //     if (result.length == 0) {
    //         db.query( "INSERT INTO clientes(cpf, nome, senha, cep) VALUES (?,?,?,?)",
    //             [cadCpf, cadUsuario, cadSenha, cadCep],
    //             (error, response) => {
    //                 if (err) {
    //                     res.send(err);
    //                 }

    //                 res.send({ msg: "Usuário cadastrado com sucesso" });
    //             }
    //         );
    //     } else {
    //         res.send({ msg: "Email já cadastrado" });
    //     }
    // });
});



