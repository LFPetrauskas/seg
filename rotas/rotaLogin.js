const { checkLogin } = require('../database/usuario');
const { getParams } = require('../services/params');
const { sign } = require('../services/auth');

module.exports = app => {
    app.post('/login', (req, res) => {
        (async () => {
            try {
                let { username, password } = req.body;
                let results = await checkLogin(username, password);
                let existe = results[0].existe;
                if (existe == 1) {
                    let { username, nome, email } = results[0];
                    let token = await sign({ username, nome, email });
                    res.send({ token });
                } else {
                    res.send({ error: 'Usuário ou senha inválidos' })
                }
            } catch (error) {
                res.send(error.toString());
            }
        })();
    });

    app.post('/params', (req, res) => {
        (async () => {
            try {
                let { params } = req.body;
                let results = await getParams(params);
                res.send({ results });
            } catch (error) {
                res.send({ error })
            }
        })();
    });
}