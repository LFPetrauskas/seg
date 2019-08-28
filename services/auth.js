const json = require('jsonwebtoken');

//const sign = promisify(json.sign);
const sign = payload => new Promise((resolve, reject) => {
    try {
        json.sign(payload, process.env.SECRET, { expiresIn: 300 }, (e, token) => {
            if (e) reject(e);
            resolve(token);
        })
    } catch (error) {
        reject(error);
    }
});

const verify = token => new Promise((resolve, reject) => {
    try {
        json.verify(token, process.env.SECRET, (e, res) => {
            if (e) reject(e);
            resolve(res);
        })
    } catch (error) {
        reject(error);
    }
});

module.exports = { sign, verify }