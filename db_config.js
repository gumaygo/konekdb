const mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "users"
});

const cekUser = (number) => new Promise((resolve, reject) => {
    connection.query(`SELECT * FROM users WHERE number=${number}`, function (error, rows, fields) {
        //connection.end();
        if (error) {
            reject(error);
        } else {
            if(rows.length === 0) {
                resolve(false);
            } else {
                resolve(true);
            }
        }
    });
});

const tambahUser = (number) => new Promise((resolve, reject) => {
    connection.query(`INSERT INTO users (number) VALUES ('${number}')`, function (error, rows, fields) {
        //connection.end();
        if (error) {
            reject(error);
        } else {
            resolve(rows);
        }
    });
});

const hapusUser = (number) => new Promise((resolve, reject) => {
    connection.query(`DELETE FROM users WHERE number=${number}`, function (error, rows, fields) {
        //connection.end();
        if (error) {
            reject(error);
        } else {
            resolve(rows);
        }
    });
});
module.exports = {cekUser, tambahUser, hapusUser};
