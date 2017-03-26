var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Citi Field',
  sport: ['Baseball'],
  league: ['MLB'],
  detail: {
    team: ['New York Mets'],
    capacity: 44466,
    opened: new Date('03/29/2009'),
    architect: 'Populous',
    location: 'Queens, New York',
    images: [
      'http://media.silive.com/advance/photo/2012/04/citi-field-ccac02781de315a8.jpg',
      'https://thenypost.files.wordpress.com/2014/09/citi-field.jpg?quality=90&strip=all&w=1200',
      'http://cdn.newsday.com/polopoly_fs/1.11028308.1446154862!/httpImage/image.JPG_gen/derivatives/display_960/image.JPG',
      'https://theexpressnyc.files.wordpress.com/2014/07/citi-field.jpg',
      'http://cdn.newsday.com/polopoly_fs/1.11984915.1467301108!/httpImage/image.JPG_gen/derivatives/ipad_1536/image.JPG',
      'https://c1.staticflickr.com/7/6020/5906699510_45f7f9ab8d_b.jpg',
      'https://cdn0.vox-cdn.com/uploads/chorus_asset/file/3570776/citifield2.0.jpg'
    ]
  }
}
Seeder(stadium);
