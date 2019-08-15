require('dotenv').config();
let { checkLogin } = require('./database/usuario');

(async function () {
    try {
        let results = await checkLogin('leonardo.petrauskas', 'nada a verirmao');
        console.log(results[0]);
        process.exit();
    } catch (error) {
        console.log(error);
        process.exit();
    }
})();