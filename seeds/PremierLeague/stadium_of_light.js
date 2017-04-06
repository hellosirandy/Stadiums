var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Stadium Of Light',
  sport: ['Football'],
  league: ['Premier League'],
  detail: {
    team: ['Sunderland A.F.C.'],
    capacity: 48707,
    opened: new Date('1997'),
    architect: 'PNF Architects',
    location: 'Sunderland, Tyne and Wear',
    images: [
      'https://d2vytzi9340kna.cloudfront.net/-/media/images/stadium/stadium-aerial-2.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/2/2d/Stadium_of_light_Haway_the_lads.jpg',
      'https://d2vytzi9340kna.cloudfront.net/-/media/images/stadium/stadiumpanoramicsec.jpg',
      'https://d2vytzi9340kna.cloudfront.net/-/media/images/stadium/stadium-side-pre-match.jpg',
      'http://c1038.r38.cf3.rackcdn.com/group2/building11283/media/029n0z0.jpg',
      'http://ablemagazine.co.uk/wp-content/uploads/2015/02/Stadium-of-Light-rooftop.jpg',
      'http://cdn.playbuzz.com/cdn/aa9783f8-72f0-4c6f-9dfb-77c5ccd57624/4f61f7b3-4ad3-4671-8fb8-6be582b4c411.jpg'
    ]
  }
}
Seeder(stadium);
