var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'CenturyLink Field',
  sport: ['Football'],
  league: ['NFL'],
  detail: {
    team: ['Seattle Seahawks'],
    capacity: 69000,
    opened: new Date('01/28/2002'),
    architect: 'Ellerbe Becke',
    location: 'Seattle, Washington',
    images: [
      'http://www.centurylinkfield.com/wp-content/uploads/2015/12/20110820_SEAHAWKS_MINN_08121.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/5/53/Qwest_Field_North.jpg',
      'http://seahawknationblog.com/files/2015/12/o-CENTURYLINK-FIELD-facebook-min-compressed_34e84ce9342eb231d077c16236897002-min.jpg',
      'https://i.ytimg.com/vi/tvTW-WxIeGM/maxresdefault.jpg',
      'http://www.seahawks.com/sites/seahawks.com/files/styles/borealis_article_image_respondlarge/public/field/image/_rm72819.jpg?itok=yBucuGH0&timestamp=1469491830',
      'http://usatsbi.files.wordpress.com/2011/06/6a00e54ef2975b883301538f5567fe970b-pi.jpg',
      'http://www.seahawks.com/sites/seahawks.com/files/styles/borealis_article_image_respondlarge/public/_article_thumbnails/20110820_seahawks_minn_0848.jpg?itok=Xz-2wIqE&timestamp=1459369532',
      
    ]
  }
}
Seeder(stadium);
