import { request } from './services';

const listFuncionarios = async () => {
    try {
        let { error, results } = await request('/funcionario/list', 'GET');
        if (error) throw error;
        return results;
    } catch (error) {
        throw error;
    }
}
export { listFuncionarios };