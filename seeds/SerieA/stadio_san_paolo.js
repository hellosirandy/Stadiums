var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Stadio San Paolo',
  sport: ['Football'],
  league: ['Serie A'],
  detail: {
    team: ['S.S.C. Napoli'],
    capacity: 60240,
    opened: new Date('12/06/1959'),
    architect: 'Carlo Cocchia, Luigi Corradi',
    location: 'Naples, Italy',
    images: [
      'http://nssdata.s3-website-eu-west-1.amazonaws.com/images/galleries/11054/sanpaolo-nssports-9.jpg',
      'https://static.fanpage.it/wp-content/uploads/sites/4/2015/10/stadio-san-paolo.jpg',
      'http://static.thousandwonders.net/Stadio.San.Paolo.original.19779.jpg',
      'http://www.marigliano.net/upload/articoli/1487859419.jpg',
      'https://s-media-cache-ak0.pinimg.com/originals/96/73/35/967335dd4d2bb1e6369b0d4961d0e05c.jpg',
      
    ]
  }
}
Seeder(stadium);
