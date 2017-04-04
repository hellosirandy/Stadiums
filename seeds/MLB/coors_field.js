var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Coors Field',
  sport: ['Baseball'],
  league: ['MLB'],
  detail: {
    team: ['Colorado Rockies'],
    capacity: 50398,
    opened: new Date('04/26/1995'),
    architect: 'Populous',
    location: 'Denver, Colorado',
    images: [
      'http://traveljapanblog.com/wordpress/wp-content/uploads/2014/08/148_1804-RAW-coors-field-sunset-rockies-cubs.jpg',
      'http://images.fineartamerica.com/images-medium-large-5/coors-field-denver-bill-cobb.jpg',
      'http://cdn-s3.si.com/s3fs-public/styles/marquee_large_2x/public/2016/03/01/coors-field-outfield-walls-raised-colorado-rockies.jpg?itok=ig2gsLoq',
      'https://storage.googleapis.com/zgt-user/Coors1_Denver.JPG',
      'https://s.aolcdn.com/dims-shared/dims3/GLOB/crop/4960x3294+360+211/resize/1600x1050!/format/jpg/quality/85/http://hss-prod.hss.aol.com/hss/storage/midas/9e47da34f9a63a0528699c85d1d4750b/200067672/AD37R9.jpg',
      'http://m.mlb.com/assets/images/0/3/2/107347032/cuts/Coors_Field_33sxurr5_a1o7588m.jpg',
      'http://assets2.sportsnet.ca/wp-content/uploads/2016/03/rockies-1040x572.jpg',
      'http://www.ballparksofbaseball.com/wp-content/uploads/2016/03/coors16951.jpg',
      'http://www.ballparksofbaseball.com/wp-content/uploads/2016/03/coors16955.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Coors_field_aerial_1.JPG',
      'https://c1.staticflickr.com/7/6198/6089332963_cd873c7216_b.jpg',
      
    ]
  }
}
Seeder(stadium);
