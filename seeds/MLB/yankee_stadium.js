var Seeder = require('../../helpers/seeder');
var YankeesStadium = {
  name: 'Yankee Stadium',
  sport: ['Baseball'],
  league: ['MLB'],
  detail: {
    team: ['New York Yankees'],
    capacity: 49469,
    opened: new Date('04/02/2009'),
    architect: 'Populous',
    location: 'Bronx, New York',
    images: [
      'http://dannywild.com/wp-content/uploads/2012/10/Yankee-Stadium-iphone-2.jpg',
      'http://populous.com/wp-content/uploads/2012/02/YankeeStadium-NewYork-ExteriorGate4Entrance.jpg',
      'https://brobrubel.files.wordpress.com/2013/07/il_fullxfull-361638732.jpg',
      'http://adventuresofagoodman.com/wp-content/themes/goodman/function/imageuploads5/4587/New-Yankee-Stadium-FIsheye-Between-Home-and-Third_DP.jpg',
      'http://i636.photobucket.com/albums/uu87/johnql/NYS%205-21-09/IMG_7100.jpg',
      'http://yankees.io-media.com/web/images/VV_fbshareicon_Retina.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/9/9a/The_view_from_the_Grandstand_Level_at_New_Yankee_Stadium.jpg',
      'http://www.adventuresofagoodman.com/wp-content/uploads/2011/08/New-Yankee-Stadium-Wide-Angle-Behind-Home-Plate-Derek-Jeter_DP-.jpg',
      
    ]
  }
};
Seeder(YankeesStadium);
