const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const PORT = process.env.PORT || 5000

const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server);
//basic rundown to make socket.io server work

io.on('connection', (socket) => {
    console.log('Friends!!!');

    socket.on('disconnect', () => {
        console.log('-1 friend...')
    });
});

app.use(router);

server.listen(PORT, () => console.log(`server has started on port ${PORT}`));