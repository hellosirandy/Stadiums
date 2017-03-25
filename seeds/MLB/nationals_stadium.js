var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Nationals Park',
  sport: ['Baseball'],
  league: ['MLB'],
  detail: {
    team: ['Washington Nationals'],
    capacity: 41313,
    opened: new Date('03/22/2008'),
    architect: 'Populous',
    location: 'Washington, D.C.'
  }
}
Seeder(stadium);
