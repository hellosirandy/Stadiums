var Seeder = require('../../helpers/seeder');
var FenwayPark = {
  name: 'Fenway Park',
  sport: ['Baseball'],
  league: ['MLB'],
  detail: {
    team: ['Boston Red Sox'],
    capacity: 37731,
    opened: new Date('04/20/1912'),
    architect: 'James McLaughlin',
    location: 'Boston, Massachusetts'
  }
};
Seeder(FenwayPark);
