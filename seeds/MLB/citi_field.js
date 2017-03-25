var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Citi Field',
  sport: ['Baseball'],
  league: ['MLB'],
  detail: {
    team: ['New York Mets'],
    capacity: 44466,
    opened: new Date('03/29/2009'),
    architect: 'Populous',
    location: 'Queens, New York'
  }
}
Seeder(stadium);
