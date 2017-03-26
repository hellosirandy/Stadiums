var Seeder = require('../../helpers/seeder');
var TropicanaField = {
  name: 'Tropicana Field',
  sport: ['Baseball'],
  league: ['MLB'],
  detail: {
    team: ['Tampa Bay Rays'],
    capacity: 42735,
    opened: new Date('03/03/1990'),
    architect: 'Populous',
    location: 'St. Petersburg, Florida',
    images: [
      'https://static01.nyt.com/images/2010/10/06/sports/CATWALK/CATWALK-jumbo.jpg',
      'https://mlblogscookandsonbats.files.wordpress.com/2011/09/5-tropicana-field-panorama-above-rays-tank.jpg',
      'https://static1.squarespace.com/static/511992e4e4b084d1d0b0e149/51ba3e8be4b00f232734af08/51ba3f09e4b0306d8e87d042/1433783149784/View+from+the+stingray+tank.JPG',
      'http://www.seeall30.com/wp-content/uploads/2009/04/trop4.jpg',
      'https://www.rateyourseats.com/shared/Tropicana-Field-Section-131-Row-DD-on-4-15-2016k.jpg',
      'http://www.macdillhappenings.com/wp-content/uploads/2010/01/0245.jpg'
    ]
  }
}
Seeder(TropicanaField);
