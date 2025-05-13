import express from 'express';
import { db } from './db.js';

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/products', (req, res) => {
  db.query('SELECT * FROM products', (err, results) => {
    if (err) return res.status(500).json({ error: 'Server error' });
    res.json(results);
  });
});


app.post('/products', (req, res) => {
  const { name, price } = req.body;
  if (!name || !price) {
    return res.status(400).json({ error: 'Name and price are required' });
  }
  const sql = 'INSERT INTO products (name, price) VALUES (?, ?)';
  db.query(sql, [name, price], (err, result) => {
    if (err) return res.status(500).json({ error: 'Error while adding' });
    res.json({ message: 'Product added', id: result.insertId });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
