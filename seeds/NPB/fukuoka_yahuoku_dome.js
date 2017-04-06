var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Fukuoka Yahuoku! Dome',
  sport: ['Baseball'],
  league: ['NPB'],
  detail: {
    team: ['Fukuoka SoftBank Hawks'],
    capacity: 38561,
    opened: new Date('04/02/1993'),
    architect: 'Takenaka Corporation and Maeda Corporation',
    location: 'Fukuoka, Japan',
    images: [
      'http://blog.gaijinpot.com/wp-content/uploads/sites/4/2015/06/yafuoku_dome.jpg',
      'http://upload.wikimedia.org/wikipedia/commons/c/cc/Fukuoka_Dome_2008-1.jpg',
      'http://static.panoramio.com/photos/original/45804240.jpg',
      'http://3.share.photo.xuite.net/cola7749/13027e4/19918654/1137523110_o.jpg',
      'http://www.smallya.net/wp-content/uploads/2017/02/20160719_154819.jpg',
      'http://farm4.static.flickr.com/3180/3039655145_1686176cc1_o.jpg',
      'https://i.imgur.com/4LGZLNE.jpg',
      
    ]
  }
}
Seeder(stadium);
