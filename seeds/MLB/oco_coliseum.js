var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'O.co Coliseum',
  sport: ['Baseball', 'Football'],
  league: ['MLB', 'NFL'],
  detail: {
    team: ['Oakland Athletics', 'Oakland Raiders'],
    capacity: 56063,
    opened: new Date('09/18/1966'),
    architect: 'Skidmore, Owings & Merrill',
    location: 'Oakland, California',
    images: [
      'http://www.sportsonearth.com/assets/images/7/6/2/50983762/cuts/OaklandCo_ajg77ajt_zm6jh3gd.jpg',
      'http://images.performgroup.com/di/library/omnisport/26/57/oco-coliseum-011615-getty-ftr-usjpg_ilw91h130mb71fprrva9bq1og.jpg?t=-177241662',
      'http://www.adventuresofagoodman.com/wp-content/uploads/2011/06/Oakland-Colliseum-from-Behind-Home-with-a-Fisheye-CROPPED.jpg',
      'https://s-media-cache-ak0.pinimg.com/originals/d5/84/39/d58439b3fe9c35b732eccb2ebdfd77b7.jpg',
      'http://topbet.eu/news/wp-content/uploads/2013/08/O.Co-Coliseum-Oakland-Raiders-NFL.jpg',
      'https://s-media-cache-ak0.pinimg.com/originals/0c/e2/15/0ce21583f5523ec502d0b3f7faa6a88f.jpg',
      'http://cdn-s3.si.com/s3fs-public/2016/02/11/raiders-los-angeles-oakland-coliseum-lease-extension.jpg',

    ]
  }
}
Seeder(stadium);
