var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Commerzbank Arena',
  sport: ['Football'],
  league: ['Bundesliga'],
  detail: {
    team: ['Eintracht Frankfurt'],
    capacity: 51500,
    opened: new Date('05/21/1925'),
    architect: 'Gerkan, Marg & Partner',
    location: 'Frankfurt, Germany',
    images: [
      'http://www.sbp.de/fileadmin/sbp.de/projects/B9290384B3517B82C1257E750036218F_0_1_1998_1078_a_MAX.jpg',
      'http://www.theworldcupingermany.com/artman/uploads/commerzbank_arena_inside_001.jpg',
      'http://www.wallpapersonly.net/wallpapers/commerzbank-arena-1680x1050.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/9/93/CommerzbankArena-20.05.2007.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/5/56/Aerial_view_of_Commerzbank-Arena.jpg',
      'http://hkaudio.com/files/images/news/Stadion_Commerzbank_Arena_Frankfurt.jpg',
      'http://shop.11freunde.de/media/catalog/product/cache/1/image/1200x698/17f82f742ffe127f42dca9de82fb58b1/f/r/frankfurt_2012_coddou__1200px.jpg',
      
    ]
  }
}
Seeder(stadium);
