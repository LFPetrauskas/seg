import { request } from './services';

const listEmpresas = async () => {
    try {
        let { error, results } = await request('/empresa/list', 'GET');
        if (error) throw error;
        return results;
    } catch (error) {
        throw error;
    }
}

export { listEmpresas };