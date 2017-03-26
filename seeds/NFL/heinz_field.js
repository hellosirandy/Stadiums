var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Heinz Field',
  sport: ['Football'],
  league: ['NFL'],
  detail: {
    team: ['Pittsburgh Steelers'],
    capacity: 68400,
    opened: new Date('08/18/2001'),
    architect: 'Populous',
    location: 'Pittsburgh, Pennsylvania',
    images: [
      'https://insidethestar.com/wp-content/uploads/2016/06/heinz-field.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/e/e9/Heinz_Field02.jpg',
      'http://www.post-gazette.com/image/2014/07/15/1140x_q90_a10-7_cTC_ca0,109,2204,1409/9ih00kk9-3.jpg',
      'http://static.panoramio.com/photos/large/1669050.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/3/35/Heinz_Field01.jpg',
      'https://nbcprofootballtalk.files.wordpress.com/2014/05/cd0ymzcznguwzdbhnduynddiytjhm2yyzthlmtjjotqwyyznptazmge2ywrhmjdkmtvknzezyzu0ytniymzizjawzjri.jpeg',

    ]
  }
}
Seeder(stadium);
