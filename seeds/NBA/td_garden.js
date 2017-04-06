var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'TD Garden',
  sport: ['Basketball', 'Hockey'],
  league: ['NBA', 'NHL'],
  detail: {
    team: ['Boston Celtics', 'Boston Bruins'],
    capacity: 18624,
    opened: new Date('09/30/1995'),
    architect: 'Ellerbe Becket',
    location: 'Boston, Massachusetts',
    images: [
      'http://www.lemessurier.com/sites/default/files/projectslides/td_garden_4.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/TD_Garden_%28crop%29.JPG/1200px-TD_Garden_%28crop%29.JPG',
      'http://www.lemessurier.com/sites/default/files/projectslides/td_garden_3.jpg',
      'http://yeahthatskosher.com/wp-content/uploads/2013/12/kosher-td-garden.jpg',
      'http://www.hiexboston.com/resourcefiles/mainimages/location-of-holiday-inn-express-hotel-and-suites-boston-garden-top.jpg',
      'http://blog.chowdaheadz.com/wp-content/uploads/2016/02/D3S2549.jpg',
      'http://grouponeinc.com/assets/seating_overlook-1024x504.jpg',
      'https://celticsdownunder.files.wordpress.com/2013/01/899559_10151328849556994_951520889_o.jpg'
    ]
  }
}
Seeder(stadium);
