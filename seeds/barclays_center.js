var Seeder = require('../helpers/seeder');
var BarclaysCenter = {
  name: 'Barclays Center',
  sport: ['Basketball', 'Hockey'],
  league: ['NBA', 'NHL'],
  detail: {
    team: ['Broolklyn Nets', 'New York Islanders'],
    capacity: 17732,
    opened: new Date(2012, 9, 21),
    architect: 'HKS, Inc.',
    location: 'Brooklyn, New York'
  }
};
Seeder(BarclaysCenter);
