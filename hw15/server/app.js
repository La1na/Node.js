const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIO(server, {
    cors: {
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST']
    }
});

const PORT = 3000;

app.use(cors());

io.on('connection', (socket) => {
    console.log('User connected');

    socket.on('chat message', (msg) => {
        console.log('Message from client:', msg);
        socket.emit('message received', `Server received: ${msg}`);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
