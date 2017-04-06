var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'White Hart Lane',
  sport: ['Football'],
  league: ['Premier League'],
  detail: {
    team: ['Tottenham Hotspur F.C.'],
    capacity: 36284,
    opened: new Date('09/04/1899'),
    architect: 'Archibald Leitch',
    location: 'London, N17',
    images: [
      'http://now-here-this.timeout.com/wp-content/uploads/2014/09/tot4.jpg',
      'https://cdn-images-1.medium.com/max/1600/1*Ujgta7sdYo4d1Fl5dAmfzg.jpeg',
      'https://upload.wikimedia.org/wikipedia/commons/1/14/Ready_for_kick-off_at_White_Hart_Lane_-_geograph.org.uk_-_2167344.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/f/fb/White_Hart_Lane_Jan_2008_2.jpg',
      'https://s-media-cache-ak0.pinimg.com/originals/94/8c/4a/948c4a68f8cb942c9a23e7485379bbd0.jpg'
    ]
  }
}
Seeder(stadium);
