const next = require('next');
const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const { DEV, PORT } = require('./constants');

const nextServer = next({ dev: DEV });
const nextRequestHandler = nextServer.getRequestHandler();

nextServer.prepare();

io.on('connection', socket => {
  console.log('connected to socket io')

  socket.on('send-node-list', (room, data) => {
    socket.broadcast.emit('change-node-list', data);
  });
  socket.on('send-node', (room, data) => {
    socket.broadcast.emit('change-node', data);
  });
  socket.on('send-node-tree', (room, data) => {
    console.log(data.node.position.x);
    socket.broadcast.emit('change-node-tree', data);
  });
});

app.get('/api/test', (request, response) => {
  return response.send({
    message: 'jeeej'
  });
});

app.all('*', (request, response) => {
  return nextRequestHandler(request, response);
});

server.listen(PORT, (error) => {
  if (error) throw error;
  console.log(`hackjunior app is ready on port ${PORT}`);
});
