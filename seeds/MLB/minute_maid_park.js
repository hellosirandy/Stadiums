var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Minute Maid Park',
  sport: ['Baseball'],
  league: ['MLB'],
  detail: {
    team: ['Houston Astros'],
    capacity: 41168,
    opened: new Date('03/30/2000'),
    architect: 'Populous',
    location: 'Houston, Texas'
  }
}
Seeder(stadium);
