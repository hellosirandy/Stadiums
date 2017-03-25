var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Coors Field',
  sport: ['Baseball'],
  league: ['MLB'],
  detail: {
    team: ['Colorado Rockies'],
    capacity: 50398,
    opened: new Date('04/26/1995'),
    architect: 'Populous',
    location: 'Denver, Colorado'
  }
}
Seeder(stadium);
