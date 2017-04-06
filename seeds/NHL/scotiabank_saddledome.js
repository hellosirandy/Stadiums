var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Scotiabank Saddledome',
  sport: ['Hockey'],
  league: ['NHL'],
  detail: {
    team: ['Calgary Flames'],
    capacity: 19289,
    opened: new Date('10/15/1983'),
    architect: 'Graham McCourt Architects',
    location: 'Calgary, Alberta',
    images: [
      'http://media2.trover.com/T/5495a23ed6bdd42a7d002516/fixedw_large_4x.jpg',
      'https://farm2.staticflickr.com/1345/5137209646_659af7a7f4_b.jpg',
      'http://wpmedia.o.canada.com/2014/11/456884618_218379398.jpg',
      'http://www.hendriksvisitedstadiums.com/gallery/k-p10401172.jpg',
      'https://www.walldevil.com/wallpapers/a79/alberta-wallpapers-calgary-desktop-canada-saddledome-scotiabank-rooney-wayne-wallpaper-nature-images.jpg',
      'http://trippingonsports.com/wp-content/uploads/2013/02/photo-12.jpg',
      'http://img07.deviantart.net/d9d2/i/2011/018/6/b/scotiabank_saddledome_by_can_eh_dian-d37grez.jpg',
      
    ]
  }
}
Seeder(stadium);
