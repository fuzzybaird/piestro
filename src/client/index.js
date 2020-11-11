let socket = require('socket.io-client')('http://localhost:3000');
let db = require('./modules/db.js');

socket.on('connect', function(){
console.log('connected')
});
socket.on('event', function(data){
    console.log(data)
});
socket.on('registration_requested', async ()=>{
    console.log('registration_requested')
    name = db.get('client.name').value()
    socket.emit('registration_recieved', {name})
})
socket.on('disconnect', function(){
  console.log('disconnect')
});
