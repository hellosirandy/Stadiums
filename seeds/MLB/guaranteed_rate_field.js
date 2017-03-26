var Seeder = require('../../helpers/seeder');
var USCellularField = {
  name: 'Guaranteed Rate Field',
  sport: ['Baseball'],
  league: ['MLB'],
  detail: {
    team: ['Chicago White Sox'],
    capacity: 40615,
    opened: new Date('04/18/1991'),
    architect: 'Populous',
    location: 'Chicago, Illinois',
    images: [
      'http://images.performgroup.com/di/library/sporting_news/3a/d3/us-cellular-field_1ndocsrzmmysw174gz6oena0fp.jpg?t=-54062056',
      'http://images.fineartamerica.com/images-medium-large-5/us-cellular-chicago-sports-07-thomas-woolworth.jpg',
      'http://media.nbcchicago.com/images/1200*675/US+Cellular+Field.png',
      'https://i.ytimg.com/vi/kdx0ql9E8yY/maxresdefault.jpg',
      'http://az616578.vo.msecnd.net/files/2016/08/27/636079139205929499-1420106473_U-S-Cellular-Field2.jpg',
      'https://baseballbrains.files.wordpress.com/2013/07/photo-4.jpg',
      'http://www.chicagobusiness.com/apps/pbcsi.dll/storyimage/CG/20160824/BLOGS04/160829927/AR/0/white-sox-us-cellular-field-guaranteed-rate-naming-rights.jpg',
      
    ]
  }
}
Seeder(USCellularField);
