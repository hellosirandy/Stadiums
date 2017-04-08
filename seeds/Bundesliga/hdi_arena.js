var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'HDI Arena',
  sport: ['Football'],
  league: ['Bundesliga'],
  detail: {
    team: ['Hannover 96'],
    capacity: 49200,
    opened: new Date('09/26/1954'),
    architect: 'Schulitz & Partner Architects',
    location: 'Hanover, Germany',
    images: [
      'http://www.hannover-concerts.de/wp-content/uploads/2013/10/HDI_Arena_Hannover_klein.jpg',
      'http://www.geoinspektor.de/wp-content/uploads/2014/10/Hannover3.jpg',
      'https://lh3.googleusercontent.com/-HdRTRPhImvU/VI8eiw_wNII/AAAAAAAAH4U/ixqYh6C6nvo/s1296/HDI_Arena_vor_Shooting.jpg',
      'https://de.fiylo.com/media/hdiarena-grossv-03-d1f284.jpg',
      'https://i.ytimg.com/vi/QD3NDlPu6a0/maxresdefault.jpg',
      'http://www.bundesligafan.com/wp-content/uploads/2015/11/IMG_0833.jpg',
      
    ]
  }
}
Seeder(stadium);
