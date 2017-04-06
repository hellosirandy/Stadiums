var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Rakuten Kobo Stadium',
  sport: ['Baseball'],
  league: ['NPB'],
  detail: {
    team: ['Tohoku Rakuten Golden Eagles'],
    capacity: 28736,
    opened: new Date('05/05/1950'),
    architect: 'Kajima Corporation',
    location: 'Sendai, Japan',
    images: [
      'http://blog.beaconstac.com/wp-content/uploads/2015/11/Miyagi-baseball-stadium.jpg',
      'http://digi-photo.pref.miyagi.jp/disp_photo/medium/m-H00292.jpg',
      'https://i.ytimg.com/vi/X4bBsPe6rRU/maxresdefault.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/d/d2/Rakuten_Kobo_Stadium_Miyagi_%2826659009774%29.jpg',
      'https://www.rakuteneagles.jp/en/_img/index/slider/160712_b.jpg',
      'http://i46.photobucket.com/albums/f135/gavinmac/IMG_7232_zpslcvwciae.jpg',

    ]
  }
}
Seeder(stadium);
