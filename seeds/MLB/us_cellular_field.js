var Seeder = require('../../helpers/seeder');
var USCellularField = {
  name: 'Guaranteed Rate Field',
  sport: ['Baseball'],
  league: ['MLB'],
  detail: {
    team: ['Chicago White Sox'],
    capacity: 40615,
    opened: new Date('04/18/1991'),
    architect: 'Populous',
    location: 'Chicago, Illinois'
  }
}
Seeder(USCellularField);
