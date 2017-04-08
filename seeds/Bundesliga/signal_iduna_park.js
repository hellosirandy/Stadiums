var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Signal Iduna Park',
  sport: ['Football'],
  league: ['Bundesliga'],
  detail: {
    team: ['Borussia Dortmund'],
    capacity: 81360,
    opened: new Date('04/02/0974'),
    architect: 'Planungsgruppe Drahtler',
    location: 'Dortmund, Germany',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/6/6e/Signal_Iduna_Park_before_the_match_%284th_july_2006%29.jpg?uselang=cs',
      'https://s-media-cache-ak0.pinimg.com/originals/af/95/ec/af95ecae551fe623648d8d9d0fa8c106.jpg',
      'http://www.101greatgoals.com/wp-content/uploads/2015/12/10694926206_79f72f4201_b.jpg',
      'https://essma.eu/member/images/members_gallery/dortmund3.jpg',
      'https://s-media-cache-ak0.pinimg.com/originals/86/95/fb/8695fb28deaf2304e6dd0700af227d85.jpg',

    ]
  }
}
Seeder(stadium);
