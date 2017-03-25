var Seeder = require('../../helpers/seeder');
var OriolePark = {
  name: 'Oriole Park at Camden Yards',
  sport: ['Baseball'],
  league: ['MLB'],
  detail: {
    team: ['Baltimore Orioles'],
    capacity: 45971,
    opened: new Date('04/06/1992'),
    architect: 'Populous',
    location: 'Baltimore, Maryland',
  }
};
Seeder(OriolePark);
