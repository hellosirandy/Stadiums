var Stadium = require('../models/stadium-schema');
var mongoose = require('mongoose');
mongoose.connect('localhost:27017/stadiums');

var stadium = new Stadium({
  name: 'PNC Park',
  sport: ['Baseball'],
  league: ['MLB'],
  detail: {
    team: ['Pittsburgh Pirates'],
    capacity: 38362,
    opened: new Date(2001, 3, 31),
    architect: 'Populous',
    location: 'Pittsburgh, Pennsylvania'
  }
});

stadium.save(function(err) {
  mongoose.disconnect();
});
