var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Chase Field',
  sport: ['Baseball'],
  league: ['MLB'],
  detail: {
    team: ['Arizona Diamondbacks'],
    capacity: 48519,
    opened: new Date('03/31/1998'),
    architect: 'Ellerbe Becket',
    location: 'Phoenix, Arizona',
    images: [
      'http://images.athlonsports.com/d/47114-2/Flyover_at_Diamondbacks_season_opener_2010-04-05.JPG',
      'https://i.ytimg.com/vi/MRFCdMbsK6k/maxresdefault.jpg',
      'http://ballparkdigest.com/images/chasefield/chasefield3.jpg',
      'https://mlblogsbloggingboutbaseball.files.wordpress.com/2010/08/first20view20of20chase20field1.jpg',
      'https://www.gannett-cdn.com/-mm-/bd87f3752288301c8857ee97fb0b83595ef34b4c/c=0-160-3173-1953&r=x633&c=1200x630/local/-/media/2017/01/05/Phoenix/Phoenix/636192449145444793-chase.jpg',
      'http://ballparkdigest.com/images/chasefield/chasefield2.jpg',
      'https://s-media-cache-ak0.pinimg.com/originals/1d/50/22/1d5022d239d3a0c7ef525f521f5e58f2.jpg',
      'https://cdn3.vox-cdn.com/uploads/chorus_asset/file/3621000/DSC_0113.0.JPG',
      'http://throughthefencebaseball.com/wp-content/uploads/2014/03/Chase-Field-Pool.jpg'
    ]
  }
}
Seeder(stadium);
