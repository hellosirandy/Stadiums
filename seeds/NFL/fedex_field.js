var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Fedex Field',
  sport: ['Football'],
  league: ['NFL'],
  detail: {
    team: ['Washington Redskins'],
    capacity: 82000,
    opened: new Date('09/14/1997'),
    architect: 'Populous',
    location: 'Landover, Maryland',
    images: [
      'https://www.clarkconstruction.com/sites/default/files/styles/featured_image/public/project_feat_images/FedEx%20Field_Main%20Image.jpg?itok=489wqmsH',
      'http://wtop.com/wp-content/uploads/2015/06/RedskinsSeats-1880x1254.jpg',
      'http://www.washingtonpost.com/blogs/football-insider/files/2013/05/FedExField_51332354_image_1024w.jpg',
      'https://cbswashington.files.wordpress.com/2015/03/51332350-e1427139451519.jpg?w=1500',
      'https://cdn0.vox-cdn.com/thumbor/ilM0VBY_QF6Oe9tFuQ4ztJHi5iM=/55x0:908x640/1200x800/filters:focal(55x0:908x640)/cdn0.vox-cdn.com/uploads/chorus_image/image/50803369/fedex2.0.jpg',
      'http://sportswhereiam.com/wp-content/uploads/2015/05/FedEx-Field.jpg',

    ]
  }
}
Seeder(stadium);
