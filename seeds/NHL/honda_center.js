var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Honda Center',
  sport: ['Hockey'],
  league: ['NHL'],
  detail: {
    team: ['Anaheim Ducks'],
    capacity: 17174,
    opened: new Date('06/19/1993'),
    architect: 'Populous',
    location: 'Anaheim, California',
    images: [
      'http://upload.wikimedia.org/wikipedia/commons/f/fa/Honda-pano.jpg',
      'https://upload.wikimedia.org/wikipedia/en/7/7d/New_Scoreboard_at_Honda_Center.jpg',
      'http://images.performgroup.com/di/library/sporting_news/78/5d/honda-center-scoreboard-092915-daktronics-ftrjpg_138wo6zmv21191pgpofor86iyg.jpg?t=427022720',
      'https://i.ytimg.com/vi/lT556CUIGss/maxresdefault.jpg',
      'http://ampthemag.com/wp-content/uploads/2015/09/51032c85-e9bb-40ef-8d92-c843c5b0947b1.jpg',
      
    ]
  }
}
Seeder(stadium);
