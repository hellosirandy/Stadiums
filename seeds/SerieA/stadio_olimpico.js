var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Stadio Olimpico',
  sport: ['Football'],
  league: ['Serie A'],
  detail: {
    team: ['A.S. Roma', 'S.S. Lazio'],
    capacity: 70634,
    opened: new Date('1937'),
    architect: 'Annibale Vitellozzi',
    location: 'Rome, Italy',
    images: [
      'https://traveldigg.com/wp-content/uploads/2016/08/Stadio-Olimpico-Roma.jpg',
      'http://res.cloudinary.com/as-roma-turbine-production/image/upload/c_fill,f_auto,g_center,q_auto,w_1199/v1/asroma-uat/swwtublvf7aj7ik1tfl9',
      'http://www.visitlazio.com/documents/563196/597349/stadio-olimpico_sfondo.jpg/9c692192-cdb8-4f55-975c-2f1610ab64c9?t=1398709562572?t=1398702362572&imageThumbnail=3',
      'http://www.romacalcio.net/wp-content/uploads/2015/02/Roma-Juventus-biglietti-prezzi-come-comprare-Stadio-Olimpico-Serie-A.jpg',
      'https://traveldigg.com/wp-content/uploads/2016/08/Stadio-Olimpico-During-The-Game.jpg',
      'http://www.tecnovision.it/wp-content/uploads/2015/05/Olimpico-Roma-Cover-12.jpg',
      
    ]
  }
}
Seeder(stadium);
