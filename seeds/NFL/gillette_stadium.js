var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Gillette Stadium',
  sport: ['Football'],
  league: ['NFL'],
  detail: {
    team: ['New England Patriots'],
    capacity: 66829,
    opened: new Date('05/11/2002'),
    architect: 'Populous',
    location: 'Foxborough, Massachusetts',
    images: [
      'https://c.o0bg.com/rf/image_1920w/Boston/2011-2020/2014/10/16/BostonGlobe.com/Sports/Images/chin101614PatriotsJets_spt1.jpg',
      'http://itiswhatitis.weei.com/wp-content/uploads/2016/10/IMG_0830.jpg',
      'https://az616578.vo.msecnd.net/files/2017/02/01/636215041242734593-789774620_Gillete.jpg',
      'https://res.cloudinary.com/cmgverticals/image/upload/c_crop,g_north_west,h_2508,w_4752,x_0,y_214/f_auto,q_80/h_624,w_1182/v1485099767/Gillette-Stadium-View-Patriots-vs.-Steelers-by-Mike-Lawrie-Getty-Images-2015-DRC_2322_jnkmxk.jpg',
      'http://static.wixstatic.com/media/227cf4_09a5922e97a6477f9df6b45fc63c69c8.jpg_srz_927_628_85_22_0.50_1.20_0.00_jpg_srz',
      'https://upload.wikimedia.org/wikipedia/commons/6/6f/Gillette_Stadium01.jpg',
      'http://images.patriots.com/20131108-psm-parking.jpg',
      'https://c1.staticflickr.com/6/5331/7115821177_147c8e6042_b.jpg'
    ]
  }
}
Seeder(stadium);
