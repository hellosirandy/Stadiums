var Seeder = require('../../helpers/seeder');
var PNCPark = {
  name: 'PNC Park',
  sport: ['Baseball'],
  league: ['MLB'],
  detail: {
    team: ['Pittsburgh Pirates'],
    capacity: 38362,
    opened: new Date('03/31/2001'),
    architect: 'Populous',
    location: 'Pittsburgh, Pennsylvania',
    images: [
      'https://www.mmvta.com/wp-content/uploads/2013/08/PNC-PARK.jpg',
      'https://www.theclio.com/web/ul/23093.49117.jpg',
      'https://sabrtoothedtigers.files.wordpress.com/2013/06/pnc-park-1280.jpg',
      'https://cdn.shopify.com/s/files/1/0424/2833/files/pic_pit_pnc_park.jpg?11145292109436209105',
      'http://cdn-image.travelandleisure.com/sites/default/files/styles/tnl_redesign_article_landing_page/public/baseball1015-pnc-park.jpg?itok=fCv8GFmV',
      'http://cdn.c.photoshelter.com/img-get/I0000g7q2.W7qoVo/s/900/900/Pittsburgh-Sports-Venues-6665-PNC-Park.jpg',
      'https://yardsofsummer.files.wordpress.com/2010/05/pittsburgh_033_pnc_park.jpg',
      'https://c1.staticflickr.com/4/3923/14483753644_39a3e53d2f_k.jpg',
      'https://mlblogssnaggingbaseballs.files.wordpress.com/2011/08/2_pnc_park_standing_room_left_field.jpg',
      
    ]
  }
};
Seeder(PNCPark);
