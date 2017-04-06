var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Koshien Stadium',
  sport: ['Baseball'],
  league: ['NPB'],
  detail: {
    team: ['Hanshin Tigers'],
    capacity: 47757,
    opened: new Date('08/01/1924'),
    architect: 'Ōbayashi gumi',
    location: 'Nishinomiya, Hyōgo, Japan',
    images: [
      'https://thehanshintigers.files.wordpress.com/2015/07/img_5399.jpg',
      'http://i.imgur.com/l5RKn.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/8/80/Hanshin_Koshien_Stadium_2009.jpg',
      'https://thehanshintigers.files.wordpress.com/2015/04/img_4709.jpg',
      'http://www.trickytaipei.com/wp-content/uploads/2015/10/2015-09-30-10.49.43-1.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/1/1f/Hanshin_Koshien_Stadium_2007-19.jpg',
      'http://3.bp.blogspot.com/_aTd8U08AIeo/TKx_2rDHZtI/AAAAAAAAANE/uiHcVDPL7L8/s1600/DSCN1137.JPG',

    ]
  }
}
Seeder(stadium);
