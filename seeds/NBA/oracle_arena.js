var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Oracle Arena',
  sport: ['Basketball'],
  league: ['NBA'],
  detail: {
    team: ['Golden State Warriors'],
    capacity: 19596,
    opened: new Date('11/09/1966'),
    architect: 'Skidmore, Owings and Merrill',
    location: 'Oakland, California',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/e/ea/GSW_Vs_Utah.jpg',
      'http://oraclearena.s3.amazonaws.com/img/NBA-Finals-Warriors-vs.-Cavaliers.jpg',
      'http://images.performgroup.com/di/library/omnisport/1f/6a/oracle-arena-06162016-us-news-getty-ftr_10oveyv5g3lp71n28sj1gckl88.jpg?t=-34228187',
      'https://upload.wikimedia.org/wikipedia/commons/3/3e/OraclearenaWarriorsgameoct07.jpg',
      'https://c1.staticflickr.com/9/8244/8553226311_8074141568_b.jpg',
      'https://c1.staticflickr.com/8/7730/17151296280_5af7b1f075_b.jpg',
      
    ]
  }
}
Seeder(stadium);
