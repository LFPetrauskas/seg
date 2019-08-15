const { executeProcedure } = require('./utils');

async function checkLogin(login, senha) {
    try {
        let sql = 'call login_usuario(?,?)';
        return await executeProcedure(sql, [login, senha], 1);
    } catch (error) {
        throw error;
    }
}

module.exports = { checkLogin };