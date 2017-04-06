var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Centre Bell',
  sport: ['Hockey'],
  league: ['NHL'],
  detail: {
    team: ['Montreal Canadiens'],
    capacity: 21288,
    opened: new Date('03/16/1996'),
    architect: 'LeMay & Associate, LLC.',
    location: 'Montreal, Quebec',
    images: [
      'http://gomontrealtourism.com/wp-content/uploads/montreal-centre-bell-3.jpg',
      'http://gomontrealtourism.com/wp-content/uploads/montreal-centre-bell-4.jpg',
      'https://i.ytimg.com/vi/9MYy_XJHwGw/maxresdefault.jpg',
      'http://i.huffpost.com/gen/855039/images/o-CENTRE-BELL-facebook.jpg',
      'https://i.ytimg.com/vi/zWhcIV_LOBU/maxresdefault.jpg',
      'https://stadiumsandarenas.files.wordpress.com/2009/07/33.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Centerbell.jpg/1200px-Centerbell.jpg',
      
    ]
  }
}
Seeder(stadium);
