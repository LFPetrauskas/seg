let { addFuncionario, getFuncionario, listFuncionario, deleteFuncionario } = require('../database/funcionario');

module.exports = app => {

    app.get('/funcionario/get', (req, res) => {
        (async () => {
            try {
                let { usuarioId } = req.body;
                let results = await getFuncionario(usuarioId);
                res.status(200).send(results);
            } catch (error) {
                res.send({ error });
            }
        })();
    });

    app.put('/funcionario/add', (req, res) => {
        (async () => {
            try {
                let { nome, logradouro, numeroEndereco, bairro, cidade, cdEmpresa } = req.body;
                cdEmpresa = cdEmpresa === '' ? null : +cdEmpresa;
                let results = await addFuncionario(nome, logradouro, numeroEndereco, bairro, cidade, cdEmpresa);
                res.send(results);
            } catch (error) {
                res.send({ error });
            }
        })();
    });

    app.get('/funcionario/list', (req, res) => {
        (async () => {
            try {
                let { empresaId } = req.body;
                empresaId = empresaId > 0 ? empresaId : null;
                let results = await listFuncionario(empresaId);
                res.send(results);
            } catch (error) {
                res.send({ error });
            }
        })();
    });

    app.delete('/funcionario/delete', (req, res) => {
        (async () => {
            try {
                let { usuarioId } = req.body;
                let results = await deleteFuncionario(usuarioId);
                res.send(results)
            } catch (err) {
                res.send({ error })
            }
        })();
    })
}