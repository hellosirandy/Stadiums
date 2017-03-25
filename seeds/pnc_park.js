var Seeder = require('../helpers/seeder');
var PNCPark = {
  name: 'PNC Park',
  sport: ['Baseball'],
  league: ['MLB'],
  detail: {
    team: ['Pittsburgh Pirates'],
    capacity: 38362,
    opened: new Date(2001, 3, 31),
    architect: 'Populous',
    location: 'Pittsburgh, Pennsylvania'
  }
};
Seeder(PNCPark);
