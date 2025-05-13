import mysql from 'mysql2';

export const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'jgds6346mvxh',
  database: 'product_db',
});
