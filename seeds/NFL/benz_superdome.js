var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Mercedes-Benz Superdome',
  sport: ['Football'],
  league: ['NFL'],
  detail: {
    team: ['New Orleans Saints'],
    capacity: 73208,
    opened: new Date('08/03/1975'),
    architect: 'Curtis and Davis Associated',
    location: 'New Orleans, Louisiana',
    images: [
      'http://i2.cdn.turner.com/dr/hln/www/release/sites/default/files/static/images/160332592.jpg',
      'http://sportsnola.com/wp-content/uploads/2013/04/DSC_2681.jpg',
      'http://media.nola.com/saints_impact/photo/superdome-goldjpg-77de7045ca229278.jpg',
      'https://thefordhamram.files.wordpress.com/2013/02/superdome-color-gene-sweeney-jr-mct.jpg',
      'http://footballstadiumdigest.com/wp-content/uploads/2017/01/Mercedes-Benz-Superdome.jpg',
      'http://www.frischhertz.com/gallery/images/uploads/Dome%20-%20AJC_8019.jpg',
      
    ]
  }
}
Seeder(stadium);
