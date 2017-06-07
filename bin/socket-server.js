function Server(server) {
  var io = require('socket.io').listen(server);
  var sentiment = require('../helpers/sentiment');
  var User = require('../models/user-schema');
  var Stadium = require('../models/stadium-schema');
  io.sockets.on('connection', function(socket) {
    socket.on('text change', function(sentences, callback) {
      var score = sentiment(sentences);
      socket.emit('update score', score);
    });
  });
};
module.exports = Server;
