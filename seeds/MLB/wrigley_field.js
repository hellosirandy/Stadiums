var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Wrigley Field',
  sport: ['Baseball'],
  league: ['MLB'],
  detail: {
    team: ['Chicago Cubs'],
    capacity: 41268,
    opened: new Date('04/23/1914'),
    architect: 'Zachary Taylor Davis',
    location: 'Chicago, Illinois'
  }
}
Seeder(stadium);
