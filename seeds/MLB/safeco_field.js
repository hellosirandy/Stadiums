var Seeder = require('../../helpers/seeder');
var SafecoField = {
  name: 'Safeco Field',
  sport: ['Baseball'],
  league: ['MLB'],
  detail: {
    team: ['Seatle Mariners'],
    capacity: 47943,
    opened: new Date('07/15/1999'),
    architect: 'NBBJ',
    location: 'Seattle, Washington'
  }
}
Seeder(SafecoField);
