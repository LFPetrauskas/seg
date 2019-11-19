const { executeProcedure } = require('../database/utils');

async function getParams(params) {
    try {
        let sql = 'call get_params(?)';
        return await executeProcedure(sql, [params], 1);
    } catch (error) {
        throw error;
    }
}

module.exports = { getParams };