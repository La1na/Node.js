import { db } from './db.js';

db.connect(err => {
  if (err) throw err;
  console.log('Connection to the database was successful');

  const sql = `
    CREATE TABLE IF NOT EXISTS products (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      price DECIMAL(10,2) NOT NULL
    )
  `;
  db.query(sql, (err) => {
    if (err) throw err;
    console.log('Products table created');
    db.end();
  });
});
