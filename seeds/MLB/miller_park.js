var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Miller Park',
  sport: ['Baseball'],
  league: ['MLB'],
  detail: {
    team: ['Milwaukee Brewers'],
    capacity: 41900,
    opened: new Date('04/06/2001'),
    architect: 'HKS, Inc.',
    location: 'Milwaukee, Wisconsin'
  }
}
Seeder(stadium);
