var http = require('http').createServer();
var io = require('socket.io')(http);
let db = require('./modules/db.js');
io.on('connection', (socket) => {
//   console.log(socket.id);
  socket.emit('registration_requested')
  socket.on('registration_recieved',(data) => {
      console.log('registration_recieved')
      db.set('clients.'+data.name, {socketid:socket.id}).write()
      console.log(data)
  })
});
setInterval(() => {
  io.emit('event', {data: "boobs"})
}, 5000)
http.listen(3000, () => {
  console.log('listening on *:3000');
});