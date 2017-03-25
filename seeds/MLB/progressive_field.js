var Seeder = require('../../helpers/seeder');
var ProgressiveField = {
  name: 'Progressive Field',
  sport: ['Baseball'],
  league: ['MLB'],
  detail: {
    team: ['Cleveland Indians'],
    capacity: 35225,
    opened: new Date('04/02/1994'),
    architect: 'Populous',
    location: 'Cleveland, Ohio'
  }
}
Seeder(ProgressiveField);
