const mysql = require('mysql');

const pool = mysql.createPool({
    user: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    host: process.env.DBHOST,
    port: process.env.DBPORT,
    database: process.env.DBNAME
});

let connect = (function () {
    let _this = this;
    return new Promise((resolve, reject) => {
        try {
            _this.getConnection((err, conn) => {
                if (err) reject(err);
                resolve(conn);
            });
        } catch (error) {
            reject(error);
        }
    });
}).bind(pool)

let query = function (sql, values) {
    let _this = this;
    return new Promise((resolve, reject) => {
        try {
            _this.query(sql, values, (err, results) => {
                if (err) reject(err);
                resolve(results);
            })
        } catch (error) {
            reject(error)
        }
    })
}

async function executeProcedure(sql, params, mode) {
    //mode 1: select
    //mode 2: add/edit/delete
    try {
        let conn = await connect();
        let results = await query.bind(conn)(sql, params);
        conn.release();
        switch (mode) {
            case 1:
                return results;
            default:
                return { resultado: results.affectedRows > 0 ? true : false };
        }
    } catch (error) {
        throw error;
    }
}

module.exports = { executeProcedure }