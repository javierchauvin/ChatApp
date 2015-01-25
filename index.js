var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});


// io.on('connection', function(socket){
//   console.log('a user connected');
//   socket.on('disconnect', function(){
//     console.log('user disconnected');
//     io.emit('some event', { for: 'everyone' });
//   });
// });

var userNames = {};
var numUsers = 0;

// -----Send to everyone - working-------------
io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

// io.on('connection', function(socket){
//   var addedUser = false;
//   socket.on('chat message', function(msg){
//     // io.emit('chat message', {
//     //   username: socket.username,
//     //   message: msg,
//     //   timestamp: Math.floor(Date.now()/1000)
//     //  });
//     // socket.broadcast.emit('chat message', {
//         io.emit('chat message',{
//        username: socket.username,
//        message: data
//     });
//   });

  // // when the client emits 'add user', this listens and executes
  // socket.on('add user', function (username) {
  //   // we store the username in the socket session for this client
  //   socket.username = username;
  //   // add the client's username to the global list
  //   userNames[username] = username;
  //   ++numUsers;
  //   addedUser = true;
  //   socket.emit('login', {
  //     numUsers: numUsers
  //   });
  //   // echo globally (all clients) that a person has connected
  //   socket.broadcast.emit('user joined', {
  //     username: socket.username,
  //     numUsers: numUsers
  //   });
  // });

// io.on('connection', function(socket){
//   socket.broadcast.emit('hi');
// });

http.listen(3000, function(){
  console.log('listening on *:3000');
});
