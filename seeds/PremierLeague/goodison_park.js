var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Goodison Park',
  sport: ['Football'],
  league: ['Premier League'],
  detail: {
    team: ['Everton F.C.'],
    capacity: 39572,
    opened: new Date('08/24/1892'),
    architect: 'Kelly Brothers',
    location: 'Liverpool, Merseyside',
    images: [
      'http://news.images.itv.com/image/file/585067/img.jpg',
      'http://www.ringnews24.com/wp-content/uploads/2016/05/Goodison-Park.jpg',
      'http://www.chelseafc.com/content/cfc/en/homepage/matches/away-travel-guides/shared/everton---goodison-park.img.png',
      'http://www.devonshirehouse.co.uk/upload/slide_images/dhuk_goodisonpark.jpg',
      'https://s-media-cache-ak0.pinimg.com/originals/59/61/a1/5961a1416104984398614a974841a438.jpg',
      'http://cdn.soccerbible.com/media/20930/everton-residence-img25.jpg'
    ]
  }
}
Seeder(stadium);
