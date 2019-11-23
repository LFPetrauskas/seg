const { executeProcedure } = require('./utils');

async function getFuncionario(cdFuncionario) {
    try {
        let sql = 'call get_funcionario(?)';
        return await executeProcedure(sql, [cdFuncionario], 1);
    } catch (err) {
        throw {
            err
        };
    }
}

async function listFuncionario(cdEmpresa) {
    try {
        let sql = 'call list_funcionario(?)';
        return await executeProcedure(sql, [cdEmpresa], 1);
    } catch (err) {
        throw {
            err
        };
    }
}

async function addFuncionario(nome, logradouro, numeroEndereco, bairro, municipio, cdEmpresa) {
    try {
        let sql = 'call add_funcionario(?,?,?,?,?, ?)';
        return await executeProcedure(sql, [nome, logradouro, numeroEndereco, bairro, municipio, cdEmpresa], 2);
    } catch (err) {
        throw {
            err
        };
    }
}

async function editFuncionario(cdFuncionario, nome, logradouro, numeroEndereco, bairro, municipio, cdEmpresa, aoAtivo) {
    try {
        let sql = 'call edit_funcionario(?)';
        return await executeProcedure(sql, [cdFuncionario, nome, logradouro, numeroEndereco, bairro, municipio, cdEmpresa, aoAtivo], 2);
    } catch (err) {
        throw {
            err
        };
    }
}

async function deleteFuncionario(cdFuncionario) {
    try {
        let sql = 'call delete_funcionario(?)';
        return await executeProcedure(sql, [cdFuncionario], 2);
    } catch (err) {
        throw {
            err
        };
    }
}

async function addDocFuncionario(cdDocumento, cdFuncionario, aoPossui, dataApresentacao) {
    try {
        let sql = 'call add_doc_funcionario(?,?,?,?)';
        return await executeProcedure(sql, [cdDocumento, cdFuncionario, aoPossui, dataApresentacao], 2);
    } catch (error) {
        throw error;
    }
}

async function deleteDocFuncionario(cdDocumento, cdFuncionario) {
    try {
        let sql = 'call delete_doc_funcionario(?,?)';
        return await executeProcedure(sql, [cdDocumento, cdFuncionario], 2);
    } catch (error) {
        throw error;
    }
}

async function editDocFuncionario(cdDocumento, cdFuncionario, aoPossui, dataApresentacao, validoAte) {
    try {
        let sql = 'call edit_doc_funcionario(?,?,?,?,?)';
        return await executeProcedure(sql, [cdDocumento, cdFuncionario, aoPossui, dataApresentacao, validoAte], 2);
    } catch (error) {
        throw error;
    }
}

async function getDocsDoFuncionario(cdFuncionario) {
    try {
        let sql = 'call get_docs_do_funcionario(?)';
        return await executeProcedure(sql, [cdFuncionario], 1);
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