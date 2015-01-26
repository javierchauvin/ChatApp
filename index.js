var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var usernames = {};

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  var addedUser = false;

  socket.on('chat message', function(msg){
    io.emit('chat message',msg);
  });

  // socket.on('add user', function (username) {
  //   socket.username = username;
  //   usernames[username] = username;
  //   addedUser = true;
  // });
  //
  // socket.on('disconnect', function () {
  //   if (addedUser) {
  //     delete usernames[socket.username];
  //   }
  // });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
