var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Xcel Energy Center',
  sport: ['Hockey'],
  league: ['NHL'],
  detail: {
    team: ['Minnesota Wild'],
    capacity: 17954,
    opened: new Date('09/29/2000'),
    architect: 'Populous',
    location: 'Saint Paul, Minnesota',
    images: [
      'http://pleasantridgestpaul.com/wp-content/uploads/2016/11/xcel_energy_center_by_mansonitempls-d56zeyh.0.jpg',
      'https://static.rukkus.com/venue/images/Xcel_Energy_Center-1368.jpg',
      'https://cbsminnesota.files.wordpress.com/2010/11/56477962_10.jpg',
      'http://publicradio1.wpengine.netdna-cdn.com/stadium-watch/files/2013/05/Xcel-Center-Scoreboard.jpg',
      'http://itinerantfan.com/gallery/xcel-energy-center/img_1329.jpg',
      'https://saintpaul.s3.amazonaws.com/CMS/1742/xcelinterior__large-slideshow.jpg',
      
    ]
  }
}
Seeder(stadium);
