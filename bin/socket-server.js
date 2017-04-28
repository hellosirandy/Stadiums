module.exports = function(server) {
  var io = require('socket.io').listen(server);
  var sentiment = require('../helpers/sentiment');
  io.sockets.on('connection', function(socket) {
    socket.on('text change', function(sentences, callback) {
      var score = sentiment(sentences);
      socket.emit('update score', score);
    });
  });
};
