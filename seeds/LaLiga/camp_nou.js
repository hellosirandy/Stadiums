var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Camp Nou',
  sport: ['Football'],
  league: ['La Liga'],
  detail: {
    team: ['FC Barcelona'],
    capacity: 99354,
    opened: new Date('09/24/1957'),
    architect: 'Francesc Mitjans and Josep Soteras',
    location: 'Barcelona, Spain',
    images: [
      'https://s-media-cache-ak0.pinimg.com/originals/21/8a/49/218a498dfa44b0054880681cd78caa98.jpg',
      'http://www.globo-rojo.com/wp-content/uploads/Camp-nou-match.jpg',
      'http://www.hotelmadanis.com/wp-content/uploads/2016/12/Camp-Nou-Madanis.jpg',
      'https://s-media-cache-ak0.pinimg.com/originals/aa/f6/40/aaf64003a88ccca0b444d03f4cc4fec5.jpg',
      'http://17oc0y3xa53a3f93q149z5ht.wpengine.netdna-cdn.com/wp-content/uploads/2015/06/Camp-Nou-Stadium-in-Barcelona-Spain-%C2%A9-Michal-Bednarek-Dreamstime-21455871-e1433279620217.jpg',
      'http://www.barcelonaconnect.com/wp-content/uploads/2014/10/camp-nou-barcelona-1680x1050.jpg',
      'http://www.welcome-to-barcelona.com/wp-content/uploads/2012/01/Camp-Nou-Barcelona.jpg',
      'https://www.familyadventureproject.org/wp-content/uploads/iStock_000027719350_Large.jpg',

    ]
  }
}
Seeder(stadium);
