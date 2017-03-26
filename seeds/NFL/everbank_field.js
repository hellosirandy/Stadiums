var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'EverBank Field',
  sport: ['Football'],
  league: ['NFL'],
  detail: {
    team: ['Jacksonville Jaguars'],
    capacity: 67246,
    opened: new Date('08/18/1995'),
    architect: 'Populous',
    location: 'Jacksonville, Florida',
    images: [
      'http://www.stadiumsofprofootball.com/wp-content/uploads/2016/07/ever16_bottom.jpg',
      'http://bluegreyfootball.com/wp-content/uploads/2015/08/EverBank-Field.jpg',
      'http://stadiumparkingguides.com/wp-content/uploads/2014/11/EverBank1-1024x521.jpg',
      'http://img04.deviantart.net/7959/i/2015/103/b/8/everbank_field_aerial_by_codemics-d8pliid.jpg',
      'http://cdn-s3.si.com/s3fs-public/styles/marquee_large_2x/public/2015/02/17/jacksonville_jaguars_everbank_field.jpg?itok=wpz1YCL_',
      'http://cdn.visitjacksonville.com/pages/4248/jacksonville_municipal_stadiumcreditkenmccray__flexslider.jpg',
      'https://unfadmissions.files.wordpress.com/2012/05/jags-stadium-copy.jpg',
      
    ]
  }
}
Seeder(stadium);
