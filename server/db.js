const mysql = require ('mysql');
require('dotenv').config();

const pool = mysql.createPool({
    connectionLimit: 10,
    password: process.env.DB_PASSWORD,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT
});

let websitedb = {};

websitedb.all = () => {

    return new Promise((resolve, reject) => { 
        
        pool.query(`SELECT * FROM countries`, (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
};

websitedb.one = (id) => {

    return new Promise((resolve, reject) => { 

        pool.query(`SELECT * FROM countries WHERE id = ?`, id, (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results[0]);
        });
    });
};

module.exports = websitedb