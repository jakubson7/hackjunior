const express = require('express');
const next = require('next');
const http = require('http');
const io = require('socket.io');

const { DEV, PORT } = require('./constants');

(async () => {
  const server = express();
  const nextServer = await next({ dev: DEV });
  const nodeServer = await http.Server(server);
  const socketServer = await io(nodeServer);
  const nextRequestHandler = await nextServer.getRequestHandler();

  await nextServer.prepare();

  socketServer.on('connection', async socket => {

    socket.on('user-connection', async (room, user) => {
      await socket.join(room);
      await socket.to(room).emit('user-join', user);
    });

    socket.on('user-disconnection', async (room, user) => {
      await socket.to(room).emit('user-leave', user);
      await socket.leave(room);
    });

    socket.on('mind-map-connection', async (room, data) => {
      socket.to(room).emit('mind-map', data);
    });
  });

  server.all('*', async (request, response) => {
    return nextRequestHandler(request, response);
  });

  nodeServer.listen(PORT, (error) => {
    if(error) throw error;
    console.log(`hackjunior app is ready on port ${PORT}`);
  });
})();
