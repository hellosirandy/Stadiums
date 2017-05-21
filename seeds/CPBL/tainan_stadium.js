var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Tainan Municipal Baseball Stadium',
  sport: ['Baseball'],
  league: ['CPBL'],
  detail: {
    team: ['Uni-President 7-Eleven Lions'],
    capacity: 12000,
    opened: new Date('1931/2/6'),
    architect: '',
    location: 'Tainan, Taiwan',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/6/62/Tainan_Municipal_Baseball_Stadium_field_20150725_2.jpg',
      'http://www.geocities.jp/muguken1975/picture_ballpark_tw/Tainan.jpg',
      'https://c1.staticflickr.com/1/450/19457287344_034548799a_b.jpg',
      'https://c1.staticflickr.com/1/271/19544281673_e482018e39_b.jpg',
      
    ]
  }
}
Seeder(stadium);
