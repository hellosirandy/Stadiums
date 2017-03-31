var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Target Center',
  sport: ['Basketball'],
  league: ['NBA'],
  detail: {
    team: ['Minnesota Timberwolves'],
    capacity: 19356,
    opened: new Date('10/13/1990'),
    architect: 'KMR Architects, Ltd.',
    location: 'Minneapolis, Minnesota',
    images: [
      'http://www.greenroofs.com/projects/target_center/target_center9.gif',
      'https://static.rukkus.com/venue/images/Target_Center-667.jpg',
      'https://shortstorysnapshots.files.wordpress.com/2011/02/imag0654.jpg',
      'https://static1.squarespace.com/static/577585e49f7456a22f26604e/57ae1c79e6f2e1c9bc47fdaa/57ae1e3815d5db42067f09ac/1471028795067/PI-NBA-Target-Center-043014.jpg?format=2500w',
      'https://cbsminnesota.files.wordpress.com/2017/03/target-center.jpg?w=1200',
      'http://targetcenterrenovation.com/setup/wp-content/uploads/2014/11/tcr-gallery-05.jpg'
    ]
  }
}
Seeder(stadium);
