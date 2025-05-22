const express = require('express');
const app = express();
const authRoutes = require('./routes/auth');

app.use(express.json());
app.use('/', authRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`));
