var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Lincoln Financial Field',
  sport: ['Football'],
  league: ['NFL'],
  detail: {
    team: ['Philadelphia Eagles'],
    capacity: 69176,
    opened: new Date('08/03/2003'),
    architect: 'NBBJ',
    location: 'Philadelphia, Pennsylvania',
    images: [
      'https://static2.gensler.com/uploads/hero_element/5232/thumb_desktop/thumbs/project_lincoln-financial-field_01_1024x576_1417652319_1024x576.jpg',
      'https://d3pxppq3195xue.cloudfront.net/media/images/12/12/07/Eagles-E40_966x668.jpg',
      'https://s3.amazonaws.com/cdn.chatsports.com/wp-content/uploads/2014/07/stads/lincoln-feeld.jpg',
      'http://static.nfl.com/static/content/public/pg-photo/2013/06/18/0ap2000000213203/8-tie-lincoln-financial-field-temple_pg_600.jpg',
      'https://static1.gensler.com/uploads/hero_element/5234/thumb_desktop/thumbs/project_lincoln-financial-field_03_1024x576_1417652376_1024x576.jpg',
      'http://events.lincolnfinancialfield.com/stadium-reno/assets/images/content/gallery/full/champ-banners.jpg',
    ]
  }
}
Seeder(stadium);
