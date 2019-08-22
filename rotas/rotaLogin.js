const { checkLogin } = require('../database/usuario');
const { sign } = require('../services/auth');

module.exports = app => {
    app.post('/login', (req, res) => {
        (async () => {
            try {
                let { login, senha } = req.body;
                let results = await checkLogin(login, senha);
                let existe = results[0].existe;
                if (existe == 1) {
                    let { login, nome, email } = results[0];
                    let token = await sign({ login, nome, email });
                    res.send(token)
                } else {
                    res.send('Usuário ou senha inválidos')
                }
            } catch (error) {
                res.send(error.toString());
            }
        })()
    })
}