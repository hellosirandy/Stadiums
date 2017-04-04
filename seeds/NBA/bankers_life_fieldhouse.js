var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Bankers Life Fieldhouse',
  sport: ['Basketball'],
  league: ['NBA'],
  detail: {
    team: ['Indiana Pacers'],
    capacity: 17923,
    opened: new Date('11/06/1999'),
    architect: 'Ellerbe Becket',
    location: 'Indianapolis, Indiana',
    images: [
      'https://static.rukkus.com/venue/images/Bankers_Life_Fieldhouse-1275.jpg',
      'https://s-media-cache-ak0.pinimg.com/originals/c3/3c/cb/c33ccb8550a2f321f0f13eb826de9640.jpg',
      'http://www.grace.edu/newsandevents/wp-content/uploads/2015/09/indianapolis-bankers-life-fieldhouse-35086.jpg',
      'https://i.ytimg.com/vi/okbFprgUAfM/maxresdefault.jpg',
      'https://theclio.com/web/ul/23288.49813.jpg',
      'http://stadiumhelp.com/wp-content/uploads/2016/07/bankerslife-1280x640.jpg',
      'https://i.ytimg.com/vi/SKdy8eRtQLg/maxresdefault.jpg'
    ]
  }
}
Seeder(stadium);
