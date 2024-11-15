// db/connection.js
// const { Client } = require('pg');

// const client = new Client({
//   user: 'yourUsername',
//   host: 'localhost',
//   database: 'employee_tracker',
//   password: 'yourPassword',
//   port: 5432,
// });
const { Pool } = require('pg');

 const pool = new Pool({
   host: 'localhost',
   user: 'postgres',
   password: 'Lovebsdraco18101', 
   database: 'employee_tracker',
   port: 5432 // Default PostgreSQL port
 });

 module.exports = pool;
