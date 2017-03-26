var Seeder = require('../../helpers/seeder');
var ProgressiveField = {
  name: 'Progressive Field',
  sport: ['Baseball'],
  league: ['MLB'],
  detail: {
    team: ['Cleveland Indians'],
    capacity: 35225,
    opened: new Date('04/02/1994'),
    architect: 'Populous',
    location: 'Cleveland, Ohio',
    images: [
      'http://thesportsfanjournal.com/wp-content/uploads/2016/05/ProgressiveField1280_h30nv0bk_q5b1ut1a.jpg',
      'http://www.westincleveland.com/assets/u/ProgressiveField-1.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/b/b6/Progressive_Field_view_from_above_visitor_dugout.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/0/0d/Progressive_Field_fisheye.jpg',
      'https://kcrgballparksofthemwl.files.wordpress.com/2010/07/img_4618.jpg',
      'http://www.gilbaneco.com/assets/Cleveland-Indians_ConcourseConcessions_6829_Gallery2.jpg',
      'https://mlblogscookandsonbats.files.wordpress.com/2009/08/520-20rf20concourse.jpg',
      'https://mlblogssnaggingbaseballs.files.wordpress.com/2015/09/8_new_bullpen_setup_at_progressive_field.jpg',
      
    ]
  }
}
Seeder(ProgressiveField);
