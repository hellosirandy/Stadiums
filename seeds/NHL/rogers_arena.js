var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Rogers Arena',
  sport: ['Hockey'],
  league: ['NHL'],
  detail: {
    team: ['Vancouver Canucks'],
    capacity: 18910,
    opened: new Date('09/21/1995'),
    architect: 'Brisbin, Brook and Beynon',
    location: 'Vancouver, British Columbia',
    images: [
      'http://www.billkwok.com/wp-content/uploads/2013/01/rogers_pano2.jpg',
      'https://i.ytimg.com/vi/5hPWyxYeTDI/maxresdefault.jpg',
      'http://www.billkwok.com/wp-content/uploads/2013/01/DSC_6297.jpg',
      'https://i.ytimg.com/vi/leAoyCTITGI/maxresdefault.jpg',
      'http://604now.com/wp-content/uploads/2016/10/rogers-arena.jpg',
      'http://www.pangcouver.com/wp-content/uploads/2013/09/P1060298-1.jpg',
      
    ]
  }
}
Seeder(stadium);
