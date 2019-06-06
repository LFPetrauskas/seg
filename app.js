const express = require('express');
const app = express();
const mysql = require('mysql');
const { promisify } = require('util');
const bodyParser = require('body-parser');

require('dotenv').config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT = process.env.PORT, REACT_HOST = process.env.REACT_HOST;

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Origin');
    res.setHeader('Access-Control-Allow-Origin', REACT_HOST);
    res.setHeader('Content-Type', 'application/json');
    next();
});


const pool = mysql.createPool({
    user: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    host: process.env.DBHOST,
    port: process.env.DBPORT,
    database: process.env.DBNAME
});

let connect = function () {
    let _this = this;
    return new Promise((resolve, reject) => {
        try {
            _this.getConnection((err, conn) => {
                if (err) reject(err);
                resolve(conn);
            });
        } catch (error) {
            reject(error);
        }
    });
}

let query = function (sql, values) {
    let _this = this;
    return new Promise((resolve, reject) => {
        try {
            _this.query(sql, values, (err, results) => {
                if (err) reject(err);
                resolve(results);
            })
        } catch (error) {
            reject(error)
        }
    })
}

connect = connect.bind(pool);


app.get('/funcionario/', (req, res) => {
    (async () => {
        try {
            let { usuarioId } = req.body;
            let conn = await connect();
            let results = await query.bind(conn)('select * from funcionario where id = ?', [usuarioId]);
            conn.release();
            res.status(200).send(results);
        } catch (error) {
            res.send({ error });
        }
    })();
});

app.post('/funcionario/', (req, res) => {
    (async () => {
        try {
            let { nome, logradouro, numeroEndereco, bairro, cidade } = req.body;
            let conn = await connect();
            let results = await query.bind(conn)('call prc_insere_funcionario(?,?,?,?,?)', [nome, logradouro, numeroEndereco, bairro, cidade]);
            conn.release();
            res.send({ salvo: results.affectedRows > 0 ? true : false });
        } catch (error) {
            res.send({ error });
        }
    })();
});

app.get('/funcionario/todos', (req, res) => {
    (async () => {
        try {
            let { empresaId } = req.body;
            empresaId = empresaId > 0 ? empresaId : null;
            let conn = await connect();
            let results = await query.bind(conn)('select * from funcionario f where f.id_empresa = ? or ? is null', [empresaId, empresaId]);
            conn.release();
            res.send(results);
        } catch (error) {
            res.send({ error });
        }
    })();
});

app.post('/empresa/', (req, res) => {
    (async () => {
        try {
            let { empresaId } = req.body;
            let conn = await connect();
            let results = await query.bind(conn)('select * from empresa where id = ?', [empresaId]);
            conn.release();
            res.status(200).send(results);
        } catch (error) {
            res.send({ error });
        }
    })();
});

app.post('/empresa/add', (req, res) => {
    (async () => {
        try {
            let { nomeEmpresarial, cnpj, logradouro, numeroEndereco, complemento, cep, bairro, municipio, email, telefone } = req.body;
            let conn = await connect();
            let results = await query.bind(conn)('call prc_insere_empresa(?,?,?,?,?,?,?,?,?,?)', [nomeEmpresarial, cnpj, logradouro, numeroEndereco, complemento, cep, bairro, municipio, email, telefone]);
            conn.release();
            res.send({ salvo: results.affectedRows > 0 ? true : false });
        } catch (error) {
            res.send({ error });
        }
    })();
});

app.get('/empresa/todas', (req, res) => {
    (async () => {
        try {
            let conn = await connect();
            let results = await query.bind(conn)('select * from empresa');
            conn.release();
            res.send(results);
        } catch (error) {
            res.send({ error });
        }
    })();
});

app.get('*', (req, res) => {
    res.status(404).send('Erro 404 - página não encontrada.');
})


app.listen(PORT, () => console.log(`Servidor online em ${(new Date()).toLocaleString()}`));

