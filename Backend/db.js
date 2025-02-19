const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection({
  host: process.env.DB_HOST, // default localhost
  user: process.env.DB_USER, // username
  password: process.env.DB_PASSWORD, // your Mysql Password 
  database: process.env.DB_NAME,// your Databse Name
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to MySQL database.');
});

module.exports = db;