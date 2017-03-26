var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Lambeau Field',
  sport: ['Football'],
  league: ['NFL'],
  detail: {
    team: ['Green Bay Pakers'],
    capacity: 81435,
    opened: new Date('09/29/1957'),
    architect: 'Somerville Associates',
    location: 'Green Bay, Wisconsin',
    images: [
      'http://www.stadiumsofprofootball.com/wp-content/uploads/2016/07/lamb16_bottom-1024x680.jpg',
      'http://i1.wp.com/peopledotcom.files.wordpress.com/2016/07/gettyimages-51524903.jpg?crop=24px%2C0px%2C3049px%2C2032.1585px&resize=2000%2C1333&ssl=1',
      'https://upload.wikimedia.org/wikipedia/commons/4/4b/LambeauFieldAtriumInside.jpg',
      'https://i.ytimg.com/vi/ZbDUJRit-4M/maxresdefault.jpg',
      'http://wac.b63f.edgecastcdn.net/80B63F/wisconsin/common/controls/image_handler.aspx?thumb_prefix=passthru_imagecredit&image_path=/images/2016/2/11/Lambeau_Field_Aerial_61.jpg',
      'http://wac.b63f.edgecastcdn.net/80B63F/images/sidearm.sites/uwbadgers.com/images/2016/2/11/Lambeau_Field_Aerial_Headline.jpg',
      'http://1.bp.blogspot.com/-l9YvCMkLM6g/UC8QcZ6W7rI/AAAAAAAAMHM/F3Z3uy3Qv2Q/s1600/CLE_4295.JPG',
      
    ]
  }
}
Seeder(stadium);
