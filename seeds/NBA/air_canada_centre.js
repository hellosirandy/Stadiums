var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Air Canada Centre',
  sport: ['Basketball', 'Hockey'],
  league: ['NBA', 'NHL'],
  detail: {
    team: ['Toronto Raptors', 'Toronto Maple Leafs'],
    capacity: 19800,
    opened: new Date('02/19/1999'),
    architect: 'Brisbin Brook Beynon Architects ',
    location: 'Toronto, Ontario',
    images: [
      'https://s-media-cache-ak0.pinimg.com/originals/c0/39/9b/c0399b1d93b74b5a5d55332e2bfcfa86.jpg',
      'https://www.ticketgateway.com/upload/venue/image/1464114048-maxresdefault.jpg',
      'https://stadiumsandarenas.files.wordpress.com/2012/04/2241.jpg',
      'http://static.thousandwonders.net/Air.Canada.Centre.original.24494.jpg',
      'http://entro.com/media/CACHE/images/projects/entries/Air-Canada-Centre_1/c03b0f5c8097b1ab060eae00df6bea3d.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/e/e0/Air_Canada_Centre_-_Toronto.JPG',
      'http://mlsesuites.ca/wp-content/uploads/2011/10/200-executive-1.jpg'
    ]
  }
}
Seeder(stadium);
