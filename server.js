const io = require('socket.io')();
// 'use strict';

// const express = require('express');
// const { Server } = require('ws');

// const PORT = process.env.PORT || 3000;
// const INDEX = '/index.html';

// const server = express()
//     .use((req, res) => res.sendFile(INDEX, { root: __dirname }))
//     .listen(PORT, () => console.log(`Listening on ${PORT}`));

// const wss = new Server({ server });

// wss.on('connection', (ws) => {
//     console.log('Player has connected');
//     ws.on('close', () => console.log('Player has disconnected'));
// });

// setInterval(() => {
//     wss.clients.forEach((client) => {
//         client.send(new Date().toTimeString());
//     });
// }, 1000);
io.on('connection', (client) => {
    client.on('subscribeToTimer', (interval) => {
        console.log('Player is subscribing to timer with interval ', interval);
        setInterval(() => {
            client.emit('timer', new Date());
        }, interval);
    });
});

const port = 8000;
io.listen(port);
console.log('server.js - listening on port: ', port);