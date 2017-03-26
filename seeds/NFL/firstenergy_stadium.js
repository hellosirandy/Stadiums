var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'FirstEnergy Stadium',
  sport: ['Football'],
  league: ['NFL'],
  detail: {
    team: ['Cleveland Browns'],
    capacity: 67431,
    opened: new Date('09/12/1999'),
    architect: 'Populous',
    location: 'Cleveland, Ohio',
    images: [
      'https://s-media-cache-ak0.pinimg.com/originals/3e/3e/d3/3e3ed34c248a323d0166833d560b78bd.jpg',
      'https://clevelandovereverything.files.wordpress.com/2014/08/cleveland-browns-stadium-sky-photos.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/0/02/FirstEnergy_Stadium.png',
      'https://s3.amazonaws.com/assets.indexc.com/news-image/AFTER.JPG',
      'http://images.performgroup.com/di/library/sporting_news/43/9e/firstenergy-stadium-071615-getty-ftrjpg_18aaeionmf21p15vl8msy5do1e.jpg?t=-1747958842',
      'https://c1.staticflickr.com/9/8508/8386472653_8dab1bf301_b.jpg'
    ]
  }
}
Seeder(stadium);
