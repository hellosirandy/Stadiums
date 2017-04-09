var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Weser Stadion',
  sport: ['Football'],
  league: ['Bundesliga'],
  detail: {
    team: ['Werder Bremen'],
    capacity: 42100,
    opened: new Date('1909'),
    architect: 'WABE-Plan für schlaich bergermann partner',
    location: 'Bremen, Germany',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/b/b5/Dach_S%C3%BCdgerade_Weserstadion.JPG',
      'http://www.weserstadion.de/fileadmin/redakteure/hintergrund/weserstadion_bg-3.jpg',
      'http://www.weserstadion.de/fileadmin/bilder/Umbau_2010_2/Umbau_50_KW/IMG_6006_klein.jpg',
      'http://vignette2.wikia.nocookie.net/werderbremen/images/c/c0/Weserstadion_4.jpg/revision/latest?cb=20150305180450',
      'http://shop.11freunde.de/media/catalog/product/cache/1/small_image/1200x698/17f82f742ffe127f42dca9de82fb58b1/b/r/bremen_2003_coddou_neu_2__1200px.jpg',
      'https://c1.staticflickr.com/8/7005/6789267125_5863e05e5f_b.jpg',

    ]
  }
}
Seeder(stadium);
