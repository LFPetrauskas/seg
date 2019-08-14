let { addDocumento } = require('../database/documento');

module.exports = app => {
    app.put('/documento/add', (req, res) => {
        (async () => {
            try {
                let { descricao, validadeDias, frequenciaDias, aoQualificacao } = req.body;
                validadeDias = validadeDias === '' ? 0 : validadeDias;
                frequenciaDias = frequenciaDias === '' ? 0 : frequenciaDias;
                let aoValidade = validadeDias === 0 ? 0 : 1;
                let aoFrequencia = frequenciaDias === 0 ? 0 : 1;
                aoQualificacao = aoQualificacao === '' ? 0 : aoQualificacao;
                let results = await addDocumento(descricao, validadeDias, frequenciaDias, aoValidade, aoFrequencia, aoQualificacao);
                res.status(200).send(results);
            } catch (error) {
                res.send({ error })
            }
        })();
    })
}