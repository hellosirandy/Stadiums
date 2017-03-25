var Seeder = require('../../helpers/seeder');
var YankeesStadium = {
  name: 'Yankees Stadium',
  sport: ['Baseball'],
  league: ['MLB'],
  detail: {
    team: ['New York Yankees'],
    capacity: 49469,
    opened: new Date('04/02/2009'),
    architect: 'Populous',
    location: 'Bronx, New York',
  }
};
Seeder(YankeesStadium);
