var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Fritz Walter Stadion',
  sport: ['Football'],
  league: ['Bundesliga'],
  detail: {
    team: ['1. FC Kaiserslautern'],
    capacity: 49780,
    opened: new Date('05/13/1920'),
    architect: 'Folker Fiebiger',
    location: 'Kaiserslautern, Germany',
    images: [
      'http://shop.11freunde.de/media/catalog/product/cache/1/image/1200x698/17f82f742ffe127f42dca9de82fb58b1/k/a/kaiserslautern_2013_coddou__250x100__1200px.jpg',
      'https://s-media-cache-ak0.pinimg.com/originals/3a/40/6b/3a406b949bbb7c896d76a7a014faa826.jpg',
      'https://c1.staticflickr.com/3/2294/2528368911_236b4d1ca9_b.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/4/4e/Fritz-Walter-Stadion_15-04-2000.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/8/85/FIFA-Fritz-Walter-Stadion02.JPG',
      'http://static.panoramio.com/photos/large/5282996.jpg',
      
    ]
  }
}
Seeder(stadium);
