var Seeder = require('../../helpers/seeder');
var MSG = {
  name: 'Madison Square Garden',
  sport: ['Basketball', 'Hockey'],
  league: ['NBA', 'NHL'],
  detail: {
    team: ['New York Knicks', 'New York Rangers'],
    capacity: 19812,
    opened: new Date('02/11/1968'),
    architect: 'Charles Luckman Associates',
    location: 'New York City, New York',
    images: [
      'http://stadiumparkingguides.com/wp-content/uploads/2014/09/madison-square-garden-parking1.jpg',
      'http://www.nycgo.com/images/venues/98/madisonsquaregarden-courtesymsg__x_large.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Madison_Square_Garden%2C_February_2013.jpg/1200px-Madison_Square_Garden%2C_February_2013.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/f/f4/Madison_Square_Garden_Transformation_Stage_3.jpg',
      'http://www.nycgo.com/images/venues/98/madisonsquaregarden-courtesymsg-b70005-rtw__x_large.jpg',
      'http://static.thousandwonders.net/Madison.Square.Garden.original.2117.jpg',
      'http://cbsnewyork.files.wordpress.com/2013/10/msg_100313_050w.jpg',
      'http://upload.wikimedia.org/wikipedia/commons/c/c6/Madison_Square_Garden_Transformation_Stage_1.jpg',
      
    ]
  }
};
Seeder(MSG);
