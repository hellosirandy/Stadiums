var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Olympic Stadium',
  sport: ['Football'],
  league: ['Premier League'],
  detail: {
    team: ['West Ham United'],
    capacity: 66000,
    opened: new Date('05/06/2012'),
    architect: 'Populous',
    location: 'Stratford, London, E20',
    images: [
      'https://i.ytimg.com/vi/zr0XYeHliEc/maxresdefault.jpg',
      'http://c2971522.r22.cf0.rackcdn.com/AdjRGcdZHforb5yZolBE.JPG',
      'https://i.ytimg.com/vi/NlObwyNgtrA/maxresdefault.jpg',
      'https://i.ytimg.com/vi/EZ7V3F6yKVw/maxresdefault.jpg',
      'http://i.huffpost.com/gadgets/slideshows/242625/slide_242625_1325709_free.jpg',
      'https://seele.com/fileadmin/user_upload/images/01_References/Olympic-Stadium-London/London_OlympicStadium_Roof.jpg',

    ]
  }
}
Seeder(stadium);
