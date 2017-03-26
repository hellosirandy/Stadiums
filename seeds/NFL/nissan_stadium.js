var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Nissan Stadium',
  sport: ['Football'],
  league: ['NFL'],
  detail: {
    team: ['Tennessee Titans'],
    capacity: 69143,
    opened: new Date('08/27/1999'),
    architect: 'Populous',
    location: 'Nashville, Tennessee',
    images: [
      'https://s-media-cache-ak0.pinimg.com/originals/e7/73/f5/e773f5966b54d28991d697711cf0fb2a.jpg',
      'http://hotspotsnashville.com/wp-content/uploads/2015/07/ap854280377153.jpg',
      'http://www.ticketslpfield.com/images/ticketslpfield_ban.jpg',
      'https://s-media-cache-ak0.pinimg.com/originals/e7/3b/c8/e73bc85aba34c856ba9c1b4284086e9b.jpg',
      'http://media.al.com/sports_impact/photo/lp-field-b3e5bd92cef67612.jpg',
      
    ]
  }
}
Seeder(stadium);
