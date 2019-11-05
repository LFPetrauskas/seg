const { executeProcedure } = require('./utils');

async function addDocumento(descricao, validadeDias, frequenciaDias, aoValidade, aoFrequencia, aoQualificacao, aoUtilizaFuncionario, aoUtilizaEmpresa) {
    try {
        let sql = 'call add_documento(?,?,?,?,?,?)';
        return await executeProcedure(sql, [descricao, validadeDias, frequenciaDias, aoValidade, aoFrequencia, aoQualificacao, aoUtilizaFuncionario, aoUtilizaEmpresa], 2);
    } catch (error) {
        throw error;
    }
}

async function deleteDocumento(cdDocumento) {
    try {
        let sql = 'call delete_documento(?)';
        return await executeProcedure(sql, [cdDocumento], 2);
    } catch (error) {
        throw error;
    }
}

module.exports = { addDocumento, deleteDocumento }