var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Great American Ball park',
  sport: ['Baseball'],
  league: ['MLB'],
  detail: {
    team: ['Cincinnati Reds'],
    capacity: 42319,
    opened: new Date('03/31/2003'),
    architect: 'Populous',
    location: 'Cincinnati, Ohio',
    images: [
      'http://www.cookandsonbats.com/panoramas/GABP/GABP-423.jpg',
      'http://www.hamiltoncountyohio.gov/UserFiles/Servers/Server_3788196/Image/Government/Departments/Stadia%20and%20Parking/Great%20American%20Ball%20Park/Diamond.JPG',
      'https://txrangersfan.files.wordpress.com/2010/08/2561.jpg',
      'https://sibcyclinenews.files.wordpress.com/2012/10/greatamerican.jpg',
      'http://kingofwallpapers.com/great-american-ballpark-wallpaper/great-american-ballpark-wallpaper-010.jpg',
      'http://stadiumparkingguides.com/wp-content/uploads/2014/11/great-american-ball-park-stadium-1024x629.jpg',
      'https://mlblogssnaggingbaseballs.files.wordpress.com/2011/09/5_right_field_seats_09_13_11.jpg',
      'https://s-media-cache-ak0.pinimg.com/originals/31/97/95/3197959332e19729d978cd01fa6e4355.jpg',
      
    ]
  }
}
Seeder(stadium);
