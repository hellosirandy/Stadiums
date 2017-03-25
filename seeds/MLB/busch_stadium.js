var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Busch Stadium',
  sport: ['Baseball'],
  league: ['MLB'],
  detail: {
    team: ['St. Louis Cardinals'],
    capacity: 43975,
    opened: new Date('04/04/2006'),
    architect: 'Populous',
    location: 'St. Louis, Missouri'
  }
}
Seeder(stadium);
