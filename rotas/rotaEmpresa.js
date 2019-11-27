let { getEmpresa, addEmpresa, listEmpresa, editEmpresa, deleteEmpresa } = require('../database/empresa');
let { } = require('../database/utils');

module.exports = app => {
    app.get('/empresa/get', (req, res) => {
        (async () => {
            try {
                let { cdEmpresa } = req.query;
                if (cdEmpresa === null || cdEmpresa === undefined) throw new Error('Cód. de empresa inválido');
                let results = await getEmpresa(cdEmpresa);
                res.status(200).send({ results: results[0] });
            } catch (error) {
                res.send({ error: error.message });
            }
        })();
    });

    app.put('/empresa/add', (req, res) => {
        (async () => {
            try {
                let { nomeEmpresarial, cnpj, logradouro, numeroEndereco, complemento, cep, bairro, municipio, email, telefone } = req.body;
                let results = await addEmpresa(nomeEmpresarial, cnpj, logradouro, numeroEndereco, complemento, cep, bairro, municipio, email, telefone);
                res.send(results);
            } catch (error) {
                res.send({ error });
            }
        })();
    });

    app.delete('/empresa/delete', (req, res) => {
        (async () => {
            try {
                let { cdEmpresa } = req.body;
                let results = await deleteEmpresa(cdEmpresa);
                res.send({ results });
            } catch (error) {
                res.send({ error });
            }
        })();
    });

    app.post('/empresa/edit', (req, res) => {
        (async () => {
            try {
                let { cdEmpresa, nomeEmpresarial, cnpj, logradouro, numeroEndereco, complemento, cep, bairro, municipio, email, telefone, aoAtivo } = req.body;
                aoAtivo = aoAtivo === 'S' ? 1 : 0;
                let results = await editEmpresa(cdEmpresa, nomeEmpresarial, cnpj, logradouro, numeroEndereco, complemento, cep, bairro, municipio, email, telefone, aoAtivo);
                res.send(results);
            } catch (error) {
                res.send({ error });
            }
        })();
    });

    app.get('/empresa/list', (req, res) => {
        (async () => {
            try {
                let results = await listEmpresa();
                res.send({ results });
            } catch (error) {
                res.send({ error });
            }
        })();
    });
}