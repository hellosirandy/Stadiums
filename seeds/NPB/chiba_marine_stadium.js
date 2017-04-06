var Seeder = require('../../helpers/seeder');
var stadium = {
  name: '',
  sport: ['Baseball'],
  league: ['NPB'],
  detail: {
    team: ['Chiba Lotte Marines'],
    capacity: 30000,
    opened: new Date('02/02/1990'),
    architect: 'Tomiie Architect',
    location: 'Chiba, Japan',
    images: [
      'http://traveljapanblog.com/wordpress/wp-content/uploads/2009/09/P1000115trim.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/0/01/Chiba_Marine_Stadium_FieldWingSeat.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/a/a5/Jrb_20081129_Chiba_Marine_Stadium_001.JPG',
      'https://c2.staticflickr.com/8/7132/26459015273_0079e7a82b_b.jpg',
      'https://c2.staticflickr.com/8/7213/26994609371_44e1d0f200_b.jpg',
      'https://c2.staticflickr.com/8/7493/26459018213_e9bd3c85d3_b.jpg',
      
    ]
  }
}
Seeder(stadium);
