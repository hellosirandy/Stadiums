var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Great American Ball park',
  sport: ['Baseball'],
  league: ['MLB'],
  detail: {
    team: ['Cincinnati Reds'],
    capacity: 42319,
    opened: new Date('03/31/2003'),
    architect: 'Populous',
    location: 'Cincinnati, Ohio'
  }
}
Seeder(stadium);
