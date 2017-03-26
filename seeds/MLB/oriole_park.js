var Seeder = require('../../helpers/seeder');
var OriolePark = {
  name: 'Oriole Park at Camden Yards',
  sport: ['Baseball'],
  league: ['MLB'],
  detail: {
    team: ['Baltimore Orioles'],
    capacity: 45971,
    opened: new Date('04/06/1992'),
    architect: 'Populous',
    location: 'Baltimore, Maryland',
    images: [
      'http://4.bp.blogspot.com/-XLXB93eiFvY/VSgj4gbVuYI/AAAAAAAAXx0/iASttCrcbhQ/s1600/00487101_H14003901.jpg',
      'https://s-media-cache-ak0.pinimg.com/originals/46/56/7a/46567ad7b6d6fc64d33e104fde3d1911.jpg',
      'http://www.sportsbucketlist.net/wp-content/uploads/2015/10/1-baltimore-3-camden-yards-1038x692.jpg',
      'http://www.paulruschmann.com/images/b&o_warehouse.jpg',
      'https://s-media-cache-ak0.pinimg.com/originals/46/56/7a/46567ad7b6d6fc64d33e104fde3d1911.jpg',
      'http://brandthunder.com/wp/wp-content/uploads/2014/07/Camden-Yards-Wallpaper.jpg',
      'https://s3.amazonaws.com/cdn.chatsports.com/wp-content/uploads/2014/06/camdenbaltimore.jpg',
      'https://mlblogscookandsonbats.files.wordpress.com/2011/04/1020-20orioles20rangers20bullpen20activity4.jpg',
      
    ]
  }
};
Seeder(OriolePark);
