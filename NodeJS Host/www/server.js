var express = require('express');
//var mysql = require('mysql');
var app = express();
var server = app.listen(80);
var io = require('socket.io').listen(server);

var users = [];
var connections = [];

/*var pool  = mysql.createPool({
	host: "localhost",
	user: "root",
	password: "memes",
	database: "chatv2"
});*/

app.use('/images', express.static(__dirname + '/images'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/css', express.static(__dirname + '/css'));

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/index.html');
});

app.get('/contact/', function(request, response) {
  response.sendFile(__dirname + '/contact.html');
});

app.get('/projects/', function(request, response) {
  response.sendFile(__dirname + '/projects.html');
});

app.get('/projects/calculator', function(request, response) {
  response.sendFile(__dirname + '/calculator.html');
});

app.get('/projects/heretics', function(request, response) {
  response.sendFile(__dirname + '/heretics.html');
});

app.get('/projects/chatv2', function(request, response) {
  response.sendFile(__dirname + '/chatv2.html');
});

app.get('/projects/webgl/', function(request, response) {
  response.sendFile(__dirname + '/webgl.html');
});

app.get('/projects/canvas/', function(request, response) {
  response.sendFile(__dirname + '/canvas.html');
});

app.use('/favicon.ico', express.static('images/favicon.ico'));

io.on('connection', function(socket) {
	connections.push(socket);
  console.log('%s sockets connected - connect', connections.length);

	//disconnect
	socket.on('disconnect', function(data) {
    users.splice(users.indexOf(socket.username), 1);
    updateUsernames();
		connections.splice(connections.indexOf(socket), 1);
		console.log('%s sockets connected - disconnect', connections.length);
	});

  socket.on('send message', function(data) {
    io.sockets.emit('new message', {msg: data, user: socket.username});
  });

  socket.on('new user', function(data, callback) {
    callback(true);
    socket.username = data;
    users.push(socket.username);
    updateUsernames();
  });

  function updateUsernames() {
    io.sockets.emit('get users', users);
  }
});

server.listen(80, function() {
	console.log("Server running on port 80...");
});
