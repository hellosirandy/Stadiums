var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Minute Maid Park',
  sport: ['Baseball'],
  league: ['MLB'],
  detail: {
    team: ['Houston Astros'],
    capacity: 41168,
    opened: new Date('03/30/2000'),
    architect: 'Populous',
    location: 'Houston, Texas',
    images: [
      'https://static.rukkus.com/venue/images/Minute_Maid_Park-1312.jpg',
      'http://m.mlb.com/assets/images/8/1/4/153852814/cuts/minutemaidpark1280_3tvlbfbk_gjnj9xw3.jpg',
      'http://m.mlb.com/assets/images/2/9/2/153753292/cuts/MinuteMaid1280_0rgy5jim_ntaerkdp.jpg',
      'https://d368g9lw5ileu7.cloudfront.net/races/races-31xxx/31316/raceBanner-tuSlSbHx-bw6jws.jpg',
      'http://hotspotshouston.com/wp-content/uploads/2015/06/opening-day-2011.jpg',
      'https://bill37mccurdy.files.wordpress.com/2012/08/aa-od09-04.jpg',
      'https://cdn0.vox-cdn.com/thumbor/-slpGyVWYcA-mHjyAk402LlFoNw=/108x0:4374x2844/1310x873/cdn0.vox-cdn.com/uploads/chorus_image/image/49321363/usa-today-8747988.0.jpg',
      'https://bill37mccurdy.files.wordpress.com/2012/09/mmp-092612-03.jpg',
      'http://thirtyyards.com/wordpress/wp-content/uploads/2014/04/WP_20140417_18_15_48_Pro.jpg',
      'http://www.ballparksofbaseball.com/wp-content/uploads/2016/03/minute_topv3.jpg',
      'https://c2.staticflickr.com/6/5455/8919478540_1c317a008f_b.jpg',
      
    ]
  }
}
Seeder(stadium);
