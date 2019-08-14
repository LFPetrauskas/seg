require('dotenv').config();
let { listEmpresa } = require('./database/empresa');

(async function () {
    try {
        let results = await listEmpresa();
        console.log(results[0]);
        process.exit();
    } catch (error) {
        console.log(error)
    }
})();