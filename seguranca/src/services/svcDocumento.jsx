import { request } from './services';

const getParams = async (params) => {
    try {
        let { error, results } = await request('/params', 'POST', { params });
        if (error) {
            throw error;
        }
        return results;
    } catch (error) {
        throw error;
    }
}

export { getParams };