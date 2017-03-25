var Seeder = require('../../helpers/seeder');
var RogersCentre = {
  name: 'Rogers Centre',
  sport: ['Baseball'],
  league: ['MLB'],
  detail: {
    team: ['Toronto Blue Jays'],
    capacity: 49282,
    opened: new Date('06/03/1989'),
    architect: 'Rod Robbie',
    location: 'Toronto, Ontario',
  }
};
Seeder(RogersCentre);
