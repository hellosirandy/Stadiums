var Seeder = require('../../helpers/seeder');
var TargetField = {
  name: 'Target Field',
  sport: ['Baseball'],
  league: ['MLB'],
  detail: {
    team: ['Minnesota Twins'],
    capacity: 38885,
    opened: new Date('01/04/2010'),
    architect: 'Populous',
    location: 'Minneapolis, Minnesota'
  }
}
Seeder(TargetField);
