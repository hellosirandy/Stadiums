var Seeder = require('../helpers/seeder');
var ATTStadium = {
  name: 'AT&T Stadium',
  sport: ['Football'],
  league: ['NFL'],
  detail: {
    team: ['Dallas Cowboys'],
    capacity: 100000,
    opened: new Date(2009, 5, 27),
    architect: 'HKS, Inc.',
    location: 'Arlington, Texas'
  }
};
Seeder(ATTStadium);
