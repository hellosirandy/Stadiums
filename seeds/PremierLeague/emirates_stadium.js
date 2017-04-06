var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Emirates Stadium',
  sport: ['Football'],
  league: ['Premier League'],
  detail: {
    team: ['Arsenal F.C.'],
    capacity: 60432,
    opened: new Date('07/22/2006'),
    architect: 'Populous',
    location: 'Holloway, London, N5',
    images: [
      'https://i.ytimg.com/vi/5KfUL8FK1eg/maxresdefault.jpg',
      'http://wallpapercave.com/wp/P1Cp4iw.jpg',
      'http://wilsonowensowens.com/wp-content/uploads/2015/06/Emirates1.jpg',
      'https://i0.wp.com/goonertalk.com/wp-content/uploads/2016/02/Cb57c3zWAAACcZI.jpg?resize=1003%2C576',
      'https://i.ytimg.com/vi/Zoa8ey9ByxY/maxresdefault.jpg',
      'http://www.markwallisphoto.com/images/blog/2015/150620/Emirates-Stadium-Wedding-Photography-028.jpg',
      'http://cdn.wallpapersafari.com/14/67/WHUI4o.jpg',

    ]
  }
}
Seeder(stadium);
