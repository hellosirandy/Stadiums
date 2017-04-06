var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Wrigley Field',
  sport: ['Baseball'],
  league: ['MLB'],
  detail: {
    team: ['Chicago Cubs'],
    capacity: 41268,
    opened: new Date('04/23/1914'),
    architect: 'Zachary Taylor Davis',
    location: 'Chicago, Illinois',
    images: [
      'http://a.espncdn.com/photo/2013/0122/chi_wrigley_renderings_05.jpg',
      'http://images.fineartamerica.com/images-medium-large-5/wrigley-field-chicago-sports-02-thomas-woolworth.jpg',
      'http://jewishbaseballmuseum.com/wp-content/uploads/2016/02/wrigley_1.jpg',
      'http://parking.chicago.com/wp-content/uploads/2012/05/wrigley-field-parking-1024x431.jpg',
      'http://chicago.cubs.mlb.com/chc/restore-wrigley/images/renderings/bleacher-cross-section@2x.jpg',
      'http://usatthebiglead.files.wordpress.com/2013/09/ivy.jpg',
      'https://s-media-cache-ak0.pinimg.com/originals/7d/54/61/7d5461d9d898136d791f6618eefae1ee.jpg',

    ]
  }
}
Seeder(stadium);
