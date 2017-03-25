var Seeder = require('../../helpers/seeder');
var BarclaysCenter = {
  name: 'Barclays Center',
  sport: ['Basketball', 'Hockey'],
  league: ['NBA', 'NHL'],
  detail: {
    team: ['Broolklyn Nets', 'New York Islanders'],
    capacity: 17732,
    opened: new Date('09/21/2012'),
    architect: 'AECOM (Ellerbe Becket)',
    location: 'Brooklyn, New York'
  }
};
Seeder(BarclaysCenter);
