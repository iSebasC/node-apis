const mysql = require('mysql2');

const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;

const connection = mysql.createConnection({
  host: dbHost,
  user: dbUser,
  password: dbPassword,
  database: dbName
});

module.exports = connection;
