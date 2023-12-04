//Installed mysql2 as it has dependencies that enable connection to a database.
const mysql = require('mysql2/promise');

const db = mysql.createPool({
    host: '192.168.1.24',
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    connectionLimit: 10,
    queueLimit: 0,
})

module.exports = db;