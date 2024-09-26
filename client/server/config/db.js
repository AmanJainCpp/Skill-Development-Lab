const mysql = require('mysql2/promise');

// Create a connection pool with hardcoded credentials
const pool = mysql.createPool({
  host: 'localhost',         // Replace with your DB host
  user: 'root',              // Replace with your DB user
  password: 'AjainRock@44',  // Replace with your DB password
  database: 'attendance',    // Replace with your database name
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool;
