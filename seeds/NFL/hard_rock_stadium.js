var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Hard Rock Stadium',
  sport: ['Football'],
  league: ['NFL'],
  detail: {
    team: ['Miami Dolphins'],
    capacity: 65326,
    opened: new Date('08/16/1987'),
    architect: 'Populous',
    location: 'Miami Gardens, Florida',
    images: [
      'http://19053-presscdn-0-53.pagely.netdna-cdn.com/wp-content/uploads/2014/12/hero2.jpg',
      'http://images.performgroup.com/di/library/sporting_news/32/4a/hard-rock-stadium-081716-dolphins-ftrjpg_h5dmab79p8t41a9sjlmwb6uni.jpg?t=-1730707730',
      'http://www.hok.com/uploads/2016/04/01/miami-dolphins-stadium02.jpg',
      'https://i.ytimg.com/vi/xeOMIN9lfYs/maxresdefault.jpg',
      'http://content.newsinc.com/jpg/491/31329273/42867470.jpg?t=1472501640',
      'http://www.bokampers.com/uploads/about_us/1/slider/6/578fbcc229fc4.jpg',
      
    ]
  }
}
Seeder(stadium);
