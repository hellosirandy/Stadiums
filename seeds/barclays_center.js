var Stadium = require('../models/stadium-schema');
var mongoose = require('mongoose');
mongoose.connect('localhost:27017/stadiums');

var stadium = new Stadium({
  name: 'Barclays Center',
  sport: ['Basketball', 'Hockey'],
  league: ['NBA', 'NFL'],
  detail: {
    team: ['Brooklyn Nets', 'New York Islanders'],
    capacity: 17732,
    opened: new Date(2012, 9, 21),
    architect: 'HKS, Inc.',
    location: 'Arlington, Texas'
  }
});

stadium.save(function(err) {
  mongoose.disconnect();
});
