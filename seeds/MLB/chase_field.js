var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Chase Field',
  sport: ['Baseball'],
  league: ['MLB'],
  detail: {
    team: ['Arizona Diamondbacks'],
    capacity: 48519,
    opened: new Date('03/31/1998'),
    architect: 'Ellerbe Becket',
    location: 'Phoenix, Arizona'
  }
}
Seeder(stadium);
