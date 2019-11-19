const logIn = async (username, password) => {
    try {
        let { error, token } = await request('/login', 'POST', { username, password });
        if (error) throw error;
        return token;
    } catch (error) {
        throw error;
    }
}

const listEmpresas = async () => {
    try {
        let { error, results } = await request('/empresa/list', 'GET');
        if (error) throw error;
        return results;
    } catch (error) {
        throw error;
    }
}

const listFuncionarios = async () => {
    try {
        let { error, results } = await request('/funcionario/list', 'GET');
        if (error) throw error;
        return results;
    } catch (error) {
        throw error;
    }
}

const request = async (path, method, parameters) => {
    try {
        let response = await fetch(`${process.env.REACT_APP_SERVER_HOST}${path}`, {
            method,
            headers: { 'Content-Type': 'application/json' },
            body: parameters ? parameters : null
        });
        return JSON.parse(Buffer.from(await response.arrayBuffer()).toString());
    } catch (error) {
        throw error;
    }
}

export { logIn, listEmpresas, listFuncionarios };