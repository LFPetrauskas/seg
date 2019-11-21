import { request } from './services';

const logIn = async (username, password) => {
    try {
        let { error, token } = await request('/login', 'POST', { username, password });
        if (error) throw error;
        return token;
    } catch (error) {
        throw error;
    }
}

export { logIn };