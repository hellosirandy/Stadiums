var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Chesapeake Energy Arena',
  sport: ['Basketball'],
  league: ['NBA'],
  detail: {
    team: ['Oklahoma City Thunder'],
    capacity: 18203,
    opened: new Date('06/08/2002'),
    architect: 'The Benham Companies, LLC.',
    location: 'Oklahoma City, Oklahoma',
    images: [
      'http://www.flintco.com/uploads/gallery_images/cache/1626_980x480_height_p18a854pdk3do1555td71ao819ml7.jpg',
      'http://www.flintco.com/uploads/gallery_images/cache/1692_980x480_height_p18anc2n22g0d1c7s1tknh551e3g6.jpg',
      'https://www.okc.gov/Home/ShowImage?id=6928&t=635963248882270000',
      'http://media.jrn.com/images/MJS_CHESAPEAKE.jpg',
      'http://seatingchartview.com/wp-content/uploads/2016/01/Chesapeake-Energy-Arena.jpg',
      'http://www.flintco.com/uploads/gallery_images/cache/1626_980x480_height_p18a85crln1ne51srqjdf18npgai5.jpg',
      'http://www.flintco.com/uploads/gallery_images/cache/1692_980x480_height_p18anc2n221kp1120o1q2c1rvr1q1e7.jpg'
    ]
  }
}
Seeder(stadium);
