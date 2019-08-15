const { executeProcedure } = require('./utils');

async function getEmpresa(empresaId) {
    try {
        let sql = 'call get_empresa(?)';
        return await executeProcedure(sql, [empresaId], 1);
    } catch (err) {
        throw { err };
    }
}

async function listEmpresa() {
    try {
        let sql = 'call list_empresa()';
        return await executeProcedure(sql, [], 1);
    } catch (err) {
        throw { err };
    }
}


async function addEmpresa(nomeEmpresarial, cnpj, logradouro, numeroEndereco, complemento, cep, bairro, municipio, email, telefone) {
    try {
        let sql = 'call add_empresa(?,?,?,?,?,?,?,?,?,?)';
        return await executeProcedure(sql, [nomeEmpresarial, cnpj, logradouro, numeroEndereco, complemento, cep, bairro, municipio, email, telefone], 2);
    } catch (err) {
        throw { err };
    }
}

async function editEmpresa(empresaId, nomeEmpresarial, cnpj, logradouro, numeroEndereco, complemento, cep, bairro, municipio, email, telefone, aoAtivo) {
    try {
        let sql = 'call edit_empresa(?,?,?,?,?,?,?,?,?,?,?,?)';
        return await executeProcedure(sql, [empresaId, nomeEmpresarial, cnpj, logradouro, numeroEndereco, complemento, cep, bairro, municipio, email, telefone, aoAtivo], 2);
    } catch (err) {
        throw { err };
    }
}

async function deleteEmpresa(empresaId) {
    try {
        let sql = 'call delete_empresa(?)';
        return await executeProcedure(sql, [empresaId], 2);
    } catch (err) {
        throw { err };
    }
}

async function getDocsDaEmpresa(empresaId) {
    try {
        let sql = 'call get_docs_da_empresa(?)';
        return await executeProcedure(sql, [empresaId], 1);
    } catch (err) {
        throw { err };
    }
}

async function listDocsTipoEmpresa() {
    try {
        let sql = 'call list_docs_tipo_empresa()';
        return await executeProcedure(sql, [], 1);
    } catch (err) {
        throw { err };
    }
}

async function addDocEmpresa(idDocumento, idEmpresa, aoPossui, dataApresentacao) {
    try {
        let sql = 'call add_doc_empresa(?,?,?,?)';
        return await executeProcedure(sql, [idDocumento, idEmpresa, aoPossui, dataApresentacao], 2);
    } catch (err) {
        throw { err };
    }
}

async function deleteDocEmpresa(idDocumento, idEmpresa) {
    try {
        let sql = 'call delete_doc_empresa(?,?)';
        return await executeProcedure(sql, [idDocumento, idEmpresa], 2);
    } catch (err) {
        throw { err };
    }
}

async function editDocEmpresa(idDocumento, idEmpresa, aoPossui, dataApresentacao, validoAte) {
    try {
        let sql = 'call edit_doc_empresa(?,?,?,?,?)';
        return await executeProcedure(sql, [idDocumento, idEmpresa, aoPossui, dataApresentacao, validoAte], 2);
    } catch (err) {
        throw { err };
    }
}


module.exports = { getEmpresa, addEmpresa, editEmpresa, deleteEmpresa, getEmpresa, listEmpresa, getDocsDaEmpresa, listDocsTipoEmpresa, addDocEmpresa, deleteDocEmpresa, editDocEmpresa }