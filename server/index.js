const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const PORT = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);
const io = socketio(server);
//basci rundown to make socket.io server work

server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));