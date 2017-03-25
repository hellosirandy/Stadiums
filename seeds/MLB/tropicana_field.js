var Seeder = require('../../helpers/seeder');
var TropicanaField = {
  name: 'Tropicana Field',
  sport: ['Baseball'],
  league: ['MLB'],
  detail: {
    team: ['Tampa Bay Rays'],
    capacity: 42735,
    opened: new Date('03/03/1990'),
    architect: 'Populous',
    location: 'St. Petersburg, Florida'
  }
}
Seeder(TropicanaField);
