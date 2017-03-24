var Stadium = require('../models/stadium-schema');
var mongoose = require('mongoose');
mongoose.connect('localhost:27017/stadiums');

var stadium = new Stadium({
  name: 'Fenway Park',
  sport: ['Baseball'],
  league: ['MLB'],
  detail: {
    team: ['Boston Red Sox'],
    capacity: 37731,
    opened: new Date(1912, 4, 20),
    architect: 'James McLaughlin',
    location: 'Boston, Massachusetts'
  }
});

stadium.save(function(err) {
  mongoose.disconnect();
});
