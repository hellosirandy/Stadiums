var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Busch Stadium',
  sport: ['Baseball'],
  league: ['MLB'],
  detail: {
    team: ['St. Louis Cardinals'],
    capacity: 43975,
    opened: new Date('04/04/2006'),
    architect: 'Populous',
    location: 'St. Louis, Missouri',
    images: [
      'https://cbsstlouis.files.wordpress.com/2014/09/183007773.jpg?w=1500',
      'http://sammy-riggs.com/wp-content/uploads/2014/06/50491398.jpg',
      'http://jeremypollack.net/wp-content/uploads/2013/04/wpid3004-20130418-_JP_5814.jpg',
      'https://c2.staticflickr.com/6/5513/14144286047_ec2a7e4948_b.jpg',
      'http://frontrow.espn.go.com/wp-content/uploads/2011/10/131498-lpr.jpg',
      'http://www.adventuresofagoodman.com/wp-content/uploads/2011/10/Busch-Stadium-Left-Field-Fisheye-Gateway-Arch.jpg',
      'http://3.bp.blogspot.com/_XiyGBzZ5UOk/TKK8dCoO-DI/AAAAAAAADjc/acWhlERJXSQ/s1600/Busch4.jpg',
      'https://c1.staticflickr.com/7/6062/6072448149_59e5395a12_b.jpg',
    ]
  }
}
Seeder(stadium);
