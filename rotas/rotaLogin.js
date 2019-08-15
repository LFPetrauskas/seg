const { checkLogin } = require('../database/usuario')

module.exports = app => {
    app.post('/login', (req, res) => {
        (async () => {
            try {
                let { login, senha } = req.body;
                let results = await checkLogin(login, senha);
                let existe = results[0].existe;
                if (existe == 1) {
                    res.send('Existe')
                } else {
                    res.send('Usuário ou senha inválidos')
                }
            } catch (error) {
                res.send({ error });
            }
        })()
    })
}