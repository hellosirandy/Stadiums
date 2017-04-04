var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'FedExForum',
  sport: ['Basketball'],
  league: ['NBA'],
  detail: {
    team: ['Memphis Grizzlies'],
    capacity: 18119,
    opened: new Date('09/06/2004'),
    architect: 'Ellerbe Becket',
    location: 'Memphis, Tennessee',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/FedExForum.jpg/1200px-FedExForum.jpg',
      'http://ampthemag.com/wp-content/uploads/2015/08/Alucobond_FedEx_Forum_-Memphis_Tennessee_8.jpg',
      'https://i.ytimg.com/vi/GZiYY4gokeM/maxresdefault.jpg',
      'http://www.lrk.com/sites/438/uploaded/images/FedExForum_03_1-thumb1000x1000.jpg',
      'http://www.lrk.com/sites/438/uploaded/images/FedExForum_Suite_02-thumb1000x1000.jpg',
      'https://static.rukkus.com/venue/images/FedExForum-1272.jpg',
      
    ]
  }
}
Seeder(stadium);
