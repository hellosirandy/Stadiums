var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'U.S. Bank Stadium',
  sport: ['Football'],
  league: ['NFL'],
  detail: {
    team: ['Minnesota Vikings'],
    capacity: 66665,
    opened: new Date('07/22/2016'),
    architect: 'HKS, Inc.',
    location: 'Minneapolis, Minnesota',
    images: [
      'http://stmedia.startribune.com/images/ows_146863317197940.jpg',
      'http://a.fssta.com/content/dam/fsdigital/RSN/North/2016/07/22/PI-North-Vikings-Stadium-Open-072216.jpg',
      'http://static.lakana.com/media.fox9.com/photo/2016/08/28/US%20Bank%20stadium%20preseason%20game_1472426554286_1924271_ver1.0.jpg',
      'http://www.vikings.com/assets/images/imported/MIN/photos/clubimages/2015/06-June/tempusbs-061515-1-l061515--nfl_mezz_1280_1024.jpg',
      'https://img.apmcdn.org/fd490c520aac70ced4d0bf2473ebb428bbcc2e24/uncropped/3d90f2-20160919-vikings-packers04.jpg',
      'http://www.vikings.com/assets/images/imported/MIN/photos/clubimages/2016/03-March/tempBerg-160301-6811--nfl_mezz_1280_1024.jpg',
      'http://stmedia.startribune.com/images/ows_147399645396770.jpg',
      'https://img.apmcdn.org/9528af54513650cab9cfb4df61412173cd15f19c/uncropped/47f0f2-20160804-usbankstadium-soccer-04.jpg',
      'http://sportsnaut.com/wp-content/uploads/2015/08/U.S.-Bank-Stadium.jpg'
    ]
  }
}
Seeder(stadium);
