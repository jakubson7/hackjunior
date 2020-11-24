const next = require('next');
const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const { DEV, PORT } = require('./constants');

const nextServer = next({ dev: DEV });
const nextRequestHandler = nextServer.getRequestHandler();

nextServer.prepare();

io.on('connection', async socket => {
  console.log('connected to socket io')

  socket.on('user-connection', async (room, user) => {
    await socket.join(room);
    await socket.to(room).emit('user-join', user);
  });

  socket.on('user-disconnection', async (room, user) => {
    await socket.to(room).emit('user-leave', user);
    await socket.leave(room);
  });

  socket.once('mind-map-connection', async (room, data) => {
    console.log({ room, data });
    socket.to(room).emit('mind-map', data);
  });
});

app.get('/api/test', async (request, response) => {
  return response.send({
    message: 'jeeej'
  });
})

app.all('*', async (request, response) => {
  return nextRequestHandler(request, response);
});

server.listen(PORT, (error) => {
  if (error) throw error;
  console.log(`hackjunior app is ready on port ${PORT}`);
});
