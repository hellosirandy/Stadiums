var Seeder = require('../../helpers/seeder');
var MSG = {
  name: 'Madison Square Garden',
  sport: ['Basketball', 'Hockey'],
  league: ['NBA', 'NHL'],
  detail: {
    team: ['New York Knicks', 'New York Rangers'],
    capacity: 19812,
    opened: new Date('02/11/1968'),
    architect: 'Charles Luckman Associates',
    location: 'New York City, New York'
  }
};
Seeder(MSG);