var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Vicente Calderón Stadium',
  sport: ['Football'],
  league: ['La Liga'],
  detail: {
    team: ['Atlético Madrid'],
    capacity: 54907,
    opened: new Date('10/02/1967'),
    architect: 'Javier Barroso',
    location: 'Madrid, Spain',
    images: [
      'http://4.bp.blogspot.com/-x6SE97wE-Qo/VGys5BzUZnI/AAAAAAAANiU/wDPJjcOVg_4/s1600/125_1878.JPG',
      'http://whattodoinmadrid.com/blog/wp-content/uploads/2014/03/Atletico-de-Madrid-schedule-March-2014.jpg',
      'https://footblawl.files.wordpress.com/2012/11/dscf0464.jpg',
      'http://c1038.r38.cf3.rackcdn.com/group2/building10690/media/0g6fczw.jpg',
      'https://essma.eu/member/images/members_gallery/atletico3.jpg',
      'http://www.centrocampista.com/wp-content/uploads/2012/10/vicente-calderon_184733.jpg',
      'http://redmago.com/wp-content/uploads/2015/12/calderon-1.jpg',
      
    ]
  }
}
Seeder(stadium);
