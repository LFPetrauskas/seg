let { executeProcedure } = require('./utils');

async function getFuncionario(usuarioId) {
    try {
        let sql = 'call get_funcionario(?)';
        return await executeProcedure(sql, [usuarioId], 1);
    } catch (err) {
        throw {
            err
        };
    }
}

async function listFuncionario(empresaId) {
    try {
        let sql = 'call list_funcionario(?)';
        return await executeProcedure(sql, [empresaId], 1);
    } catch (err) {
        throw {
            err
        };
    }
}

async function addFuncionario(nome, logradouro, numeroEndereco, bairro, cidade, cdEmpresa) {
    try {
        let sql = 'call add_funcionario(?,?,?,?,?, ?)';
        return await executeProcedure(sql, [nome, logradouro, numeroEndereco, bairro, cidade, cdEmpresa], 2);
    } catch (err) {
        throw {
            err
        };
    }
}

async function editFuncionario(usuarioId, nome, logradouro, numeroEndereco, bairro, cidade, cdEmpresa, aoAtivo) {
    try {
        let sql = 'call edit_funcionario(?)';
        return await executeProcedure(sql, [usuarioId, nome, logradouro, numeroEndereco, bairro, cidade, cdEmpresa, aoAtivo], 2);
    } catch (err) {
        throw {
            err
        };
    }
}

async function deleteFuncionario(usuarioId) {
    try {
        let sql = 'call delete_funcionario(?)';
        return await executeProcedure(sql, [usuarioId], 2);
    } catch (err) {
        throw {
            err
        };
    }
}

async function addDocFuncionario(idDocumento, idFuncionario, aoPossui, dataApresentacao) {
    try {
        let sql = 'call add_doc_funcionario(?,?,?,?)';
        return await executeProcedure(sql, [idDocumento, idFuncionario, aoPossui, dataApresentacao], 2);
    } catch (error) {
        throw error;
    }
}

async function deleteDocFuncionario(idDocumento, idFuncionario) {
    try {
        let sql = 'call delete_doc_funcionario(?,?)';
        return await executeProcedure(sql, [idDocumento, idFuncionario], 2);
    } catch (error) {
        throw error;
    }
}

async function editDocFuncionario(idDocumento, idFuncionario, aoPossui, dataApresentacao, validoAte) {
    try {
        let sql = 'call edit_doc_funcionario(?,?,?,?,?)';
        return await executeProcedure(sql, [idDocumento, idFuncionario, aoPossui, dataApresentacao, validoAte], 2);
    } catch (error) {
        throw error;
    }
}

async function getDocsDoFuncionario(idFuncionario) {
    try {
        let sql = 'call get_docs_do_funcionario(?)';
        return await executeProcedure(sql, [idFuncionario], 1);
    } catch (error) {
        throw error;
    }
}

async function listDocsTipoFuncionario() {
    try {
        let sql = 'call list_docs_tipo_funcionario()';
        return await executeProcedure(sql, [], 1);
    } catch (error) {
        throw error;
    }
}


module.exports = {
    addFuncionario,
    getFuncionario,
    listFuncionario,
    deleteFuncionario,
    editFuncionario,
    addDocFuncionario,
    deleteDocFuncionario,
    editDocFuncionario,
    getDocsDoFuncionario,
    listDocsTipoFuncionario
};