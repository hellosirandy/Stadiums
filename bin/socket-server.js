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

    socket.on('modify list', function(data, callback) {
      User.findById(data.userId, function(err, user) {
        if (err) {
          throw err;
        } else {
          list = user[data.listName];
          if (data.action == 'add') {
            if (!list) {
              list = [];
            }
            if (list.indexOf(data.stadiumId) == -1) {
              list.push(data.stadiumId);
            }
          } else if (data.action == 'remove') {
            var index = list.indexOf(data.stadiumId)
            if (index > -1) {
              list.splice(index, 1);
            }
          }

          user.save(function(err, result) {
            if (err) {
              throw err;
            } else {
              var id = '';
              if (data.listName == 'wantedList') {
                id = '#wanted-btn';
              } else if (data.listName = 'checkedList') {
                id = '#checked-btn';
              }
              socket.emit('toggle in list class', {
                id: id,
                action: data.action
              });
            }
          });
        }
      });
    });
  });
};
module.exports = Server;
