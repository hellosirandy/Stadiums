var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Suntrust Park',
  sport: ['Baseball'],
  league: ['MLB'],
  detail: {
    team: ['Atlanta Braves'],
    capacity: 41500,
    opened: new Date('02/24/2017'),
    architect: 'Populous',
    location: 'Atlanta, Georgia',
    images: [
      'http://www.ballparksofbaseball.com/wp-content/uploads/2016/04/suntrust17954.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/SunTrust_Park_Opening_Day_2017.jpg/1200px-SunTrust_Park_Opening_Day_2017.jpg',
      'http://www.ballparksofbaseball.com/wp-content/uploads/2016/04/suntrust17950-1.jpg',
      'https://www.gannett-cdn.com/-mm-/95a42ab969f59cc51e0631858f3d50fc2b79f50d/c=326-0-5433-3840&r=x1443&c=1920x1440/local/-/media/2017/03/31/USATODAY/USATODAY/636265566295555127-AP-Braves-Game-Changing-Complex-Baseball-89884288-670937.JPG',
      'https://cdn1.vox-cdn.com/uploads/chorus_asset/file/8247631/braves_chophouse_suntrust_park.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/SunTrust_Park_view_from_right_field%2C_May_2017.jpg/1280px-SunTrust_Park_view_from_right_field%2C_May_2017.jpg',
      
    ]
  }
}
Seeder(stadium);
