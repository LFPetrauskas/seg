import { request } from './services';

const listFuncionarios = async (cdEmpresa = 0) => {
    try {
        let { error, results } = await request('/funcionario/list?cdEmpresa=' + cdEmpresa, 'GET');
        if (error) throw error;
        return results;
    } catch (error) {
        throw error;
    }
}
const getFuncionario = async () => {
    try {
        let { error, results } = await request('/funcionario/list', 'GET');
        if (error) throw error;
        return results;
    } catch (error) {
        throw error;
    }
}
const addFuncionario = async (nome, logradouro, numeroEndereco, bairro, municipio, cdEmpresa) => {
    try {
        let { error, results } = await request('/funcionario/add', 'PUT', { nome, logradouro, numeroEndereco, bairro, municipio, cdEmpresa });
        if (error) throw error;
        return results;
    } catch (error) {
        throw error;
    }
}

const deleteFuncionario = async (cdFuncionario) => {
    try {
        let { error, results } = await request('/funcionario/delete', 'DELETE', { cdFuncionario });
        if (error) throw error;
        return results;
    } catch (error) {
        throw error;
    }
}

const editFuncionario = async (cdFuncionario, nome, logradouro, numeroEndereco, bairro, municipio, cdEmpresa, aoAtivo) => {
    try {
        let { error, results } = await request('/funcionario/edit', 'POST', { cdFuncionario, nome, logradouro, numeroEndereco, bairro, municipio, cdEmpresa, aoAtivo });
        if (error) throw error;
        return results;
    } catch (error) {
        throw error;
    }
}


export { listFuncionarios, getFuncionario, addFuncionario, deleteFuncionario, editFuncionario };