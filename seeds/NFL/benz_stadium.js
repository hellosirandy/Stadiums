var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Mercedes-Benz Stadium',
  sport: ['Football'],
  league: ['NFL'],
  detail: {
    team: ['Atlanta Falcons'],
    capacity: 71000,
    // opened: new Date(''),
    architect: 'HOK',
    location: 'Atlanta, Georgia',
    images: [
      'http://www.atlantafalcons.com/assets/images/imported/ATL/photos/clubimages/2015/08-August/tempMBStadium-City-Plaza--nfl_mezz_1280_1024.jpg',
      'https://atlanta-mp7static.mlsdigital.net/images/MB-Stadium-Northside.jpg',
      'https://atlanta-mp7static.mlsdigital.net/images/1006%20MLS%20Bowl_01.jpg',

    ]
  }
}
Seeder(stadium);
