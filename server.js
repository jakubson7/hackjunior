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

  socket.on('user-connection', async (room, user) => {
    await socket.join(room);
    await socket.to(room).emit('user-join', user);
  });
  socket.on('user-disconnection', async (room, user) => {
    await socket.to(room).emit('user-leave', user);
    await socket.leave(room);
  });

  socket.on('send-node-list', (room, data) => {
    socket.to(room).emit('change-node-list', data);
  });
  socket.on('send-node-tree-movement', (room, { id, movementX, movementY }) => {
    console.log(id, ' : ', movementX, movementY);
    socket.to(room).emit('change-node-tree-movement', { room, movementX, movementY });
  });

  socket.once('mind-map-connection', (room, data) => {
    console.log({ room, data });
    socket.to(room).emit('mind-map', data);
  });
});

app.get('/api/test', (request, response) => {
  return response.send({
    message: 'jeeej'
  });
})

app.all('*', (request, response) => {
  return nextRequestHandler(request, response);
});

server.listen(PORT, (error) => {
  if (error) throw error;
  console.log(`hackjunior app is ready on port ${PORT}`);
});
