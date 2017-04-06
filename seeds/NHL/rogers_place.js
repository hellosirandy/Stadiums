var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Rogers Place',
  sport: ['Hockey'],
  league: ['NHL'],
  detail: {
    team: ['Edmonton Oilers'],
    capacity: 18347,
    opened: new Date('09/08/2016'),
    architect: '360 Architecture',
    location: 'Edmonton, Alberta',
    images: [
      'http://whl.uploads.s3.amazonaws.com/app/uploads/edmonton_oil-kings/2016/09/13110734/RogersPlaceBowlEmpty.jpg',
      'https://nhl.bamcontent.com/images/photos/282511220/1024x576/cut.jpg',
      'http://i.imgur.com/Prm2aHJ.jpg',
      'http://www.dialogdesign.ca/wp-content/uploads/4P0A5715web.jpg',
      'https://postmediaedmontonjournal2.files.wordpress.com/2016/09/the-view-from-the-sky-lounge-at-rogers-place-in-edmonton-on.jpeg',
      'http://assets.rogersplace.com/wp-content/uploads/2016/09/10062159/MKO_3593.jpg',
      'http://wpmedia.edmontonjournal.com/2016/09/rogers-place-tour2.jpeg?quality=55&strip=all',
      'http://assets.rogersplace.com/wp-content/uploads/2016/08/28153241/CAR_9874-web.jpg',
      'https://nhl.bamcontent.com/images/photos/282537026/1284x722/cut.jpg',
      'http://cdn.skyrisecities.com/sites/default/files/images/articles/2016/09/22598/22598-78520.png',
      
    ]
  }
}
Seeder(stadium);
