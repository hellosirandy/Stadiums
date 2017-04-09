var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Stadion Dresden',
  sport: ['Football'],
  league: ['Bundesliga'],
  detail: {
    team: ['Dynamo Dresden'],
    capacity: 32085,
    opened: new Date('05/16/1923'),
    architect: 'Hermann Ilgen',
    location: 'Dresden, Germany',
    images: [
      'http://www.ddv-stadion.de/wp-content/uploads/2015/09/stadion-dresden-fisheye-1-1024x652.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/1/12/Rudolf_Harbig_Stadion_Trib%C3%BCne_VIP_Stand_November_2009.jpg',
      'http://i1364.photobucket.com/albums/r737/MartyChonks/Dynamo-Stadion-Dresden-a18650642_zps1b47fb80.jpg',
      'https://s-media-cache-ak0.pinimg.com/originals/80/3c/7a/803c7ab513c5b04ad10e0ce4e4cc85df.jpg',
      'http://shop.11freunde.de/media/catalog/product/cache/1/small_image/1200x698/17f82f742ffe127f42dca9de82fb58b1/d/r/dresden_2009_coddou_2_neu__1200px.jpg',
      'http://www.ddv-stadion.de/wp-content/uploads/2015/04/stadion-dresden-2-1024x652.jpg',

    ]
  }
}
Seeder(stadium);
