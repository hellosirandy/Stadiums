var Stadium = require('../models/stadium-schema');
var mongoose = require('mongoose');
mongoose.connect('localhost:27017/stadiums');

var stadium = new Stadium({
  name: 'AT&T Stadium',
  sport: ['Football'],
  league: ['NFL'],
  detail: {
    team: ['Dallas Cowboys'],
    capacity: 100000,
    opened: new Date(2009, 5, 27),
    architect: 'HKS, Inc.',
    location: 'Arlington, Texas'
  }
});

stadium.save(function(err) {
  mongoose.disconnect();
});
