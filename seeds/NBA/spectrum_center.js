var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Spectrum Center',
  sport: ['Basketball'],
  league: ['NBA'],
  detail: {
    team: ['Charlotte Hornets'],
    capacity: 19077,
    opened: new Date('10/21/2005'),
    architect: 'Ellerbe Becket',
    location: 'Charlotte, North Carolina',
    images: [
      'http://aviewfrommyseat.com/photos/wdavis04-20131018084242.jpg',
      'https://www.rateyourseats.com/shared/Time-Warner-Cable-Arena-Basketball-Section-208-Row-F-on-11-17-2014f.jpg',
      'http://2l7g9kgsh281akevs49v281d.wpengine.netdna-cdn.com/wp-content/uploads/2016/09/HornetsScoreboard.jpg',
      'http://www.charlottestories.com/wp-content/uploads/2016/08/spectrum-center-uptown-charlotte.jpg',
      
    ]
  }
}
Seeder(stadium);
