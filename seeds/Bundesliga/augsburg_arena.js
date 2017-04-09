var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Augsburg Arena',
  sport: ['Football'],
  league: ['Bundesliga'],
  detail: {
    team: ['FC Augsburg'],
    capacity: 30660,
    opened: new Date('07/26/2009'),
    architect: 'Bernhard & Kögl',
    location: 'Augsburg, Germany',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Impuls_Arena_Augsburg_2011.jpg/1200px-Impuls_Arena_Augsburg_2011.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/4/42/Augsburg_Stadium%2C_Germany_%289655832783%29.jpg',
      'http://www.dbs-ing.de/media/referenzen/impuls-arena/impuls-arena-002.jpg',
      'https://c2.staticflickr.com/2/1715/25160377705_8265915346_k.jpg',
      'http://static.panoramio.com/photos/large/27988590.jpg',
      'http://www.thesportsdb.com/images/media/team/stadium/wrqsxv1423713279.jpg'
    ]
  }
}
Seeder(stadium);
