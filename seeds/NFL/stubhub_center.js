var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'StubHub Center',
  sport: ['Football'],
  league: ['NFL'],
  detail: {
    team: ['Los Angeles Chargers'],
    capacity: 27000,
    opened: new Date('06/01/2003'),
    architect: 'Rossetti Architects',
    location: 'Carson, California',
    images: [
      'http://cornerofthegalaxy.com/wp-content/uploads/2014/10/SYizVr5-Imgur.jpg',
      'http://assets.internationalchampionscup.com/uploads/photo/file/545/large_111813_StubHubCenter_GA_0044-1461168705.jpg',
      'http://www.trbimg.com/img-58782027/turbine/la-sp-galaxy-chargers-stubhub-center-20170112',
      'http://soccerstadiumdigest.com/wp-content/uploads/2015/06/stubhubcenter.jpg',
      'https://s-media-cache-ak0.pinimg.com/originals/26/cf/b9/26cfb908765851c453c5e5abe987c9da.jpg',
      
    ]
  }
}
Seeder(stadium);
