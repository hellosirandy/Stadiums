var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Citizens Bank Park',
  sport: ['Baseball'],
  league: ['MLB'],
  detail: {
    team: ['Philadelphia Phillies'],
    capacity: 43651,
    opened: new Date('04/03/2004'),
    architect: 'EwingCole',
    location: 'Philadelphia, Pennsylvania',
    images: [
      'http://www.ballparksofbaseball.com/wp-content/uploads/2016/03/citbank_topv2.jpg',
      'https://gnomesballparktour.files.wordpress.com/2016/07/dsc04279.jpg',
      'http://i128.photobucket.com/albums/p183/sednum/PhiladelphiaPhilliesWallpaper200-2.jpg',
      'https://mlblogssnaggingbaseballs.files.wordpress.com/2016/01/3_empty_seats_on_my_left_09_16_15.jpg',
      'http://assets.sbnation.com/assets/2409973/tvfys-20130401-2.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/f/ff/Citizens_Bank_Park_Bullpen.jpg',
      'http://cdn.wallpapersafari.com/89/45/OEk1QU.jpg',
      
    ]
  }
}
Seeder(stadium);
