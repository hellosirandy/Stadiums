var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Soldier Field',
  sport: ['Football'],
  league: ['NFL'],
  detail: {
    team: ['Chicago Bears'],
    capacity: 61500,
    opened: new Date('10/9/1924'),
    architect: 'Holabird & Roche',
    location: 'Chicago, Illinois',
    images: [
      'http://cleatgeeks.com/wp-content/uploads/2015/05/photo-12.jpg',
      'http://stadiumparkingguides.com/wp-content/uploads/2014/10/Soldier-Field.jpg',
      'https://blog-blogmediainc.netdna-ssl.com/upload/SportsBlogcom/17074887/0874440001466656846_filepicker.jpg',
      'https://i.ytimg.com/vi/2kxWN11ihLU/maxresdefault.jpg',
      'http://d1d6pt83jmgnu9.cloudfront.net/enlarged_image/2878.jpg',
      'http://farm6.staticflickr.com/5064/5875042808_b1117728fa_b.jpg',

    ]
  }
}
Seeder(stadium);
