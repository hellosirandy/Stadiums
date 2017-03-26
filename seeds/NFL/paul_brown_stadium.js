var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Paul Brown Stadium',
  sport: ['Football'],
  league: ['NFL'],
  detail: {
    team: ['Cincinnati Bengals'],
    capacity: 65515,
    opened: new Date('08/19/2000'),
    architect: 'NBBJ',
    location: 'Cincinnati, Ohio',
    images: [
      'http://visitclermontohio.com/wp-content/uploads/100415-NFL-Cincinnati-Bengals-Paul-Brown-Stadium-pi-ssm.vresize.1200.675.high_.1.jpg',
      'http://www.stadiumsofprofootball.com/wp-content/uploads/2016/07/paul16_top.jpg',
      'http://static.wixstatic.com/media/f364e5_6f39a54b91ed4b6c81abc29412264ff7.jpg',
      'http://vignette2.wikia.nocookie.net/armchair-new/images/c/c1/Paul_Brown_Stadium.jpg/revision/latest?cb=20100906170843',
      'http://groteenterprises.com/wp-content/uploads/2015/09/PBS-Aerial-01.jpg',
      'http://assets.sbnation.com/assets/1078076/ArLr_GxCAAERzcB.jpg',

    ]
  }
}
Seeder(stadium);
