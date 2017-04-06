var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Nagoya Dome',
  sport: ['Baseball'],
  league: ['NPB'],
  detail: {
    team: ['Chunichi Dragons'],
    capacity: 40500,
    opened: new Date('03/15/1997'),
    architect: 'Takenaka Corporation',
    location: 'Nagoya, Japan',
    images: [
      'http://1.bp.blogspot.com/-_9MGrEryaa4/UuT6QSUmhII/AAAAAAAAcho/3hNGjskqWRw/s1600/Nagoya+077.JPG',
      'http://i.imgur.com/dTEQU.jpg',
      'http://4.bp.blogspot.com/-szRokbOYxlQ/UuT6TCt34MI/AAAAAAAAciI/SegVZai_z0o/s1600/Nagoya+082.JPG',
      'http://i9.photobucket.com/albums/a61/TekisasuJin/Nagoya%20May%203-4%202007/2007_0506Image0091.jpg',
      'https://mtraves.files.wordpress.com/2011/05/apr16-2-of-7.jpg',
      'https://c1.staticflickr.com/7/6236/6210732582_d1ce3052a4_b.jpg',

    ]
  }
}
Seeder(stadium);
