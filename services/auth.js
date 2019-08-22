const json = require('jsonwebtoken');
const { promisify } = require('util');

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
})

const verify = promisify(json.verify);

module.exports = { sign, verify }