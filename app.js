require('dotenv').config();

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { verify } = require('./services/auth');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT = process.env.PORT, REACT_HOST = process.env.REACT_HOST;

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Origin');
    res.setHeader('Access-Control-Allow-Origin', REACT_HOST);
    res.setHeader('Content-Type', 'application/json');
    next();
});

require('./rotas/rotaLogin')(app);

app.use((req, res, next) => {
    (async () => {
        if (!req.headers.authorization) {
            return res.send("Inválido");
        }
        let token = req.headers.authorization.split(" ")[1];
        try {
            let verifiedToken = await verify(token);
            res.send(verifiedToken)
        } catch (error) {
            res.send({
                error: "Token inválido",
                info: null
            });
        }
    })();

})
require('./rotas/rotaEmpresa')(app);
require('./rotas/rotaFuncionario')(app);
require('./rotas/rotaDocumento')(app);



app.get('*', (req, res) => {
    res.status(404).send('Erro 404 - página não encontrada.');
})

app.listen(PORT, () => console.log(`Servidor online em ${(new Date()).toLocaleString()} PORTA ${PORT}`));