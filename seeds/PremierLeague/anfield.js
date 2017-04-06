var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Anfield',
  sport: ['Football'],
  league: ['Premier League'],
  detail: {
    team: ['Liverpool'],
    capacity: 54074,
    opened: new Date('09/28/1884'),
    architect: 'Archibald Leitch',
    location: 'Liverpool, Merseyside',
    images: [
      'http://i4.mirror.co.uk/incoming/article1529574.ece/ALTERNATES/s1200/Anfield',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Panorama_of_Anfield_with_new_main_stand_%2829676137824%29.jpg/1200px-Panorama_of_Anfield_with_new_main_stand_%2829676137824%29.jpg',
      'http://www.thisisanfield.com/wp-content/uploads/P160910-128-Liverpool_Leicester-1200x800.jpg',
      'http://i4.mirror.co.uk/incoming/article7924925.ece/ALTERNATES/s1200/Liverpool-v-Watford.jpg',
      'http://liverpoolunderlined.co.uk/website/wp-content/uploads/2016/02/Anfield_7_December_2013.jpg',
      'http://traveldigg.com/wp-content/uploads/2016/08/Anfield-Stadium-Liverpool-FC.jpeg',
      'http://melaman2.com/premierleague/stadiums/Liverpool__Anfield__aerial-big.jpg',

    ]
  }
}
Seeder(stadium);
