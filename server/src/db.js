async function connect() {

    if (global.connection)
        return global.connection.connect();

    const { Pool } = require('pg'); // Pegando apenas o Pool

    const pool = new Pool({
        connectionString: "postgresql://postgres:postgres@localhost:5432/postgres"
    });

    const client = await pool.connect();
    console.log("Criou um novo pool");
    client.query('SELECT NOW() AS "theTime"', function (err, result) {
        if (err) {
            return console.error('error running query', err);
        }
        console.log(result.rows[0].theTime);
        client.release();
    });

    global.connection = pool;
    return pool.connect();
}

connect();

// CRUD (caso necessário dps :D)

async function listarClientes() {
    const client = await connect();
    const res = await client.query("SELECT * FROM clientes");
    return res.rows;
}

async function listarCliente(cpf) {
    const client = await connect();
    const res = await client.query("SELECT * FROM clientes WHERE cpf=$1", [cpf]);
    return res.rows;
}

async function cadastrarCliente(cliente) {
    const client = await connect();
    const sql = "INSERT INTO clientes(cpf, nome, senha, cep) VALUES ($1, $2, $3, $4)";
    await client.query(sql, [cliente.cpf, cliente.nome, cliente.senha, cliente.cep]);
}

module.exports = {
    listarClientes,
    listarCliente,
    cadastrarCliente
}