var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Angel Stadium',
  sport: ['Baseball'],
  league: ['MLB'],
  detail: {
    team: ['Los Angelas Angels'],
    capacity: 45493,
    opened: new Date('04/19/1966'),
    architect: 'Noble W. Herzberg and Associates ',
    location: 'Anaheim, California',
    images: [
      'https://i.gse.io/gse_media/114/6/1406569210-venue-AngelsStadium_Intr_Day.jpg?p=1',
      'https://tworoadsdivergedblog.files.wordpress.com/2014/09/dsc_0065.jpg',
      'https://cdn0.vox-cdn.com/thumbor/B34r4fa1K4a85Oc5MCYO3AbK6Cs=/0x42:1536x906/1600x900/cdn0.vox-cdn.com/uploads/chorus_image/image/46038386/AngelStadium.0.0.JPG',
      'https://i0.wp.com/mopupduty.com/wp-content/uploads/2010/08/Angel-Stadium.jpg?fit=750%2C500&ssl=1',
      'http://4.bp.blogspot.com/-JIPQa3Yn_BY/UXNHK6UtbsI/AAAAAAAAN7M/-SuMknM46n0/s1600/P4110129.JPG',

    ]
  }
}
Seeder(stadium);
