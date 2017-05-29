var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'San Siro',
  sport: ['Football'],
  league: ['Serie A'],
  detail: {
    team: ['A.C. Milan', 'Inter Milan'],
    capacity: 80018,
    opened: new Date('09/19/1926'),
    architect: 'Alberto Cugini',
    location: 'Milan, Italy',
    images: [
      'https://i.ytimg.com/vi/ukLnG7AhvDA/maxresdefault.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/San_Siro_2014.jpg/1200px-San_Siro_2014.jpg',
      'http://upload.wikimedia.org/wikipedia/commons/8/80/Scudo2009.jpg',
      'http://static.thousandwonders.net/San.Siro.original.19994.jpg',
      'https://s-media-cache-ak0.pinimg.com/originals/0e/01/d3/0e01d32c984c1f4bffeded22743097c2.jpg',
      'http://archeyes.com/wp-content/uploads/2016/05/San-Siro-Stadium-Giuseppe-Meazza-ArchEyes-17.jpg',

    ]
  }
}
Seeder(stadium);
