var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Dodgers Stadium',
  sport: ['Baseball'],
  league: ['MLB'],
  detail: {
    team: ['Los Angeles Dodgers'],
    capacity: 56000,
    opened: new Date('04/10/1962'),
    architect: 'Praeger-Kavanagh-Waterbury',
    location: 'Los Angeles, California'
  }
}
Seeder(stadium);
