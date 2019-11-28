const request = async (path, method, parameters) => {
    try {
        let response = await fetch(`${process.env.REACT_APP_SERVER_HOST}${path}`, {
            method,
            headers: { 'Content-Type': 'application/json' },
            body: parameters ? JSON.stringify(parameters) : null
        });
        return response.json();//JSON.parse(Buffer.from(await response.arrayBuffer()).toString());
    } catch (error) {
        throw error;
    }
}

export { request };