var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Citizens Bank Park',
  sport: ['Baseball'],
  league: ['MLB'],
  detail: {
    team: ['Philadelphia Phillies'],
    capacity: 43651,
    opened: new Date('04/03/2004'),
    architect: 'EwingCole',
    location: 'Philadelphia, Pennsylvania'
  }
}
Seeder(stadium);
