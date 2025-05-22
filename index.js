const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const app = express();
const port = 3000;

app.use(express.json());

let users = [
    { id: 1, username: 'user1', email: 'user1@example.com', password: bcrypt.hashSync('password123', 10) },
    { id: 2, username: 'user2', email: 'user2@example.com', password: bcrypt.hashSync('securepass', 10) }
];

const secretKey = 'your-secret-key'; 

function authenticateJWT(req, res, next) {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, secretKey, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }

            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
}
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username);

    if (user && bcrypt.compareSync(password, user.password)) {
        const token = jwt.sign({ id: user.id, username: user.username }, secretKey, { expiresIn: '1h' });
        res.json({ token });
    } else {
        res.status(401).json({ message: 'Incorrect credentials' });
    }
});

app.put('/update-email', authenticateJWT, (req, res) => {
    const { newEmail } = req.body;
    const userId = req.user.id;

    const userIndex = users.findIndex(user => user.id === userId);

    if (userIndex !== -1) {
        users[userIndex].email = newEmail;
        res.json({ message: 'Email updated successfully', user: users[userIndex] });
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

app.delete('/delete-account', authenticateJWT, (req, res) => {
    const userId = req.user.id;
    const initialLength = users.length;
    users = users.filter(user => user.id !== userId);

    if (users.length < initialLength) {
        res.json({ message: 'Account successfully deleted' });
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

function authorizeRole(roles) {
    return function(req, res, next) {
        if (roles.includes(req.user.role)) {
            next();
        } else {
            res.sendStatus(403); 
        }
    };
}

app.put('/update-role', authenticateJWT, authorizeRole(['admin']), (req, res) => {
    const { userId, newRole } = req.body;
    const userIndex = users.findIndex(user => user.id === parseInt(userId)); 

    if (userIndex !== -1) {
        users[userIndex].role = newRole;
        res.json({ message: 'User role updated successfully', user: users[userIndex] });
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

function generateAccessToken(user) {
    return jwt.sign({ id: user.id, username: user.username, role: user.role }, secretKey, { expiresIn: '1h' });
}


app.post('/refresh-token', authenticateJWT, (req, res) => {

    const user = users.find(u => u.id === req.user.id);

    if (user) {
        const accessToken = generateAccessToken(user);
        res.json({ accessToken });
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});