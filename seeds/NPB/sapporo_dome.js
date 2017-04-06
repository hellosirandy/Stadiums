var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Sapporo Dome',
  sport: ['Baseball'],
  league: ['NPB'],
  detail: {
    team: ['Hokkaido Consadole Sapporo'],
    capacity: 40476,
    opened: new Date('06/03/2001'),
    architect: 'Hiroshi Hara',
    location: 'Sapporo, Japan',
    images: [
      'https://rebelwithoutatan.files.wordpress.com/2011/10/022.jpg',
      'http://static.panoramio.com/photos/original/10476492.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/e/ea/Sapporo_dome_kankyaku-seki.jpg',
      'http://rocket9.net/images/Japan/JapanTrip_Panoramic_39_1200.jpg',
      'https://img.kkday.com/image/get/s1.kkday.com/product_7066/20160415092913_8DFxM/jpeg',
      'http://hokkaidophotostudio.com/wp-content/uploads/2016/08/1265.jpg',
      'http://1.bp.blogspot.com/-yeSMpCD-Ybc/UDQgHT7FZII/AAAAAAAADuQ/dOaWYBop3g8/w1200-h630-p-k-no-nu/P8180002.jpg',
      
    ]
  }
}
Seeder(stadium);
