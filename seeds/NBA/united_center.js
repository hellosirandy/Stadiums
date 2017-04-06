var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'United Center',
  sport: ['Basketball', 'Hockey'],
  league: ['NBA', 'NHL'],
  detail: {
    team: ['Chicago Bulls', 'Chicago Blackhawks'],
    capacity: 20917,
    opened: new Date('08/18/1994'),
    architect: 'Populous',
    location: 'Chicago, Illinois',
    images: [
      'http://sportsmockery.com/wp-content/uploads/2014/11/p916548685-5.jpg',
      'http://www.unitedcenter.com/assets/1/7/unitedcenter3.png',
      'http://www.insidearenas.com/wp-content/uploads/2016/09/united-center.jpg',
      'https://i.ytimg.com/vi/FnkTMGtVaj0/maxresdefault.jpg',
      'http://www.lagrangecrane.com/wp-content/uploads/DJI_0005_2.jpg',
      'https://www.suiteexperiencegroup.com/wp-content/themes/responsive/images/00000087-01.jpg',
      'https://cdn2.vox-cdn.com/uploads/chorus_asset/file/4601845/Screen_20Shot_202015-03-30_20at_2011.19.45_20AM.0.png',
      'https://i.ytimg.com/vi/hScPZeK4FDM/maxresdefault.jpg',
      'http://newsarchive.medill.northwestern.edu/uploadedImages/News/Chicago/Multimedia/Business/blackhawks.jpg',
      'https://monkeypost3.files.wordpress.com/2015/03/wpid-20150114_192943.jpg',
      
    ]
  }
}
Seeder(stadium);
