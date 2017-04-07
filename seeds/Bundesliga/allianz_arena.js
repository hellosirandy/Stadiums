var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Allianz Arena',
  sport: ['Football'],
  league: ['Bundesliga'],
  detail: {
    team: ['FC Bayern Munich'],
    capacity: 75000,
    opened: new Date('05/30/2005'),
    architect: 'Herzog & de Meuron',
    location: 'Munich, Germany',
    images: [
      'https://s-media-cache-ak0.pinimg.com/originals/6d/4b/a5/6d4ba56f67c89534c98ecee1e4aad34a.jpg',
      'https://fcbayern.com/binaries/content/gallery/allianz-arena/arena-aussenbilder/zufahrt_rot1-2.jpg/zufahrt_rot1-2.jpg/fcbhippo%3Alargesixteentonine',
      'https://allianz-arena.com/binaries/content/gallery/allianz-arena/spieltagsbilder/champions-league/fcb_real_choreo.jpg/fcb_real_choreo.jpg/fcbhippo%3Alargesixteentonine',
      'https://allianz-arena.com/binaries/content/gallery/allianz-arena/media/images/allianz-arena/bj_6975.jpg/bj_6975.jpg/fcbhippo%3Alargesixteentonine',
      'https://upload.wikimedia.org/wikipedia/commons/a/a8/Allianz-Arena-M%C3%BCnchen.jpg',
      'https://allianz-arena.com/binaries/content/gallery/allianz-arena/media/images/allianz-arena/bi_9520.jpg/bi_9520.jpg/fcbhippo%3Alargesixteentonine',
      'http://static.thousandwonders.net/Allianz.Arena.original.20842.jpg',
      'https://www.heliflieger.com/wp-content/uploads/2015/12/Hubschrauber-Rundflug-M%C3%BCnchen-Hubschrauberflug-04.jpg',
      'http://traveldigg.com/wp-content/uploads/2016/08/Allianz-Arena-Bayern-Munich-Stadium-During-The-Game.jpg',

    ]
  }
}
Seeder(stadium);
