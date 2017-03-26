var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'NRG Stadium',
  sport: ['Football'],
  league: ['NFL'],
  detail: {
    team: ['Houston Texans'],
    capacity: 71795,
    opened: new Date('08/24/2002'),
    architect: 'Populous',
    location: 'Houstan, Texas',
    images: [
      'http://ww3.hdnux.com/photos/36/00/25/7865690/9/rawImage.jpg',
      'https://s-media-cache-ak0.pinimg.com/originals/44/49/5a/44495a8bdc0542de2934b9c31d5edabd.jpg',
      'http://ww4.hdnux.com/photos/35/63/63/7814371/3/rawImage.jpg',
      'http://www.cegengineers.com/images/uploads/33/nrg1__banner.jpg',
      'https://media.ksat.com/photo/2015/09/18/NRG-Stadium-Houston-Texans_1442614577682_164424_ver1.0_1280_720.jpg',
      'http://static.nfl.com/static/content/public/pg-photo/2015/04/21/0ap3000000487079/thursday-oct-8-colts-at-texans-nrg-stadium-houston-texas_pg_600.jpg',
      'http://res.cloudinary.com/simpleview/image/upload/v1448050778/clients/houston/DSC_2360_2772435f-797d-4e71-956d-a4ccf6ab1e4c.jpg'
    ]
  }
}
Seeder(stadium);
