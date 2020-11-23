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

  socketServer.on('connection', async () => {
    console.log('user connected');
  });

  server.get('/api/test', async (request, response) => {
    return response.send({
      message: 'abc'
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
