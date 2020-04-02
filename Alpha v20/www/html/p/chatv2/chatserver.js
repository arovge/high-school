var express = require('express');
var app = express();
var server = app.listen(8080);
var io = require('socket.io').listen(server);

server.listen(8080, function() {
	console.log("Server running on port 8080...");
});
var users = [];
var connections = [];

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
	connections.push(socket);
  console.log('%s sockets connected', connections.length);

	//disconnect
	io.on('disconnect', function(data) {
		connections.splice(connections.indexOf(socket), 1);
		console.log('Disconnected: %s sockets connected', connections.length);
	});
});
