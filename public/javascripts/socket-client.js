$(document).ready(function() {
  var socket = io.connect();
  socket.emit('new user', {});
})
