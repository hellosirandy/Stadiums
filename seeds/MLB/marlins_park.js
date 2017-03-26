var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Marlins Park',
  sport: ['Baseball'],
  league: ['MLB'],
  detail: {
    team: ['Miami Marlins'],
    capacity: 36742,
    opened: new Date('03/05/2012'),
    architect: 'Populous',
    location: 'Miami, Florida',
    images: [
      'http://www.trbimg.com/img-56157fe8/turbine/sfl-marlins-move-fences-marlins-park-20151007',
      'http://m.mlb.com/assets/images/5/0/8/109181508/cuts/marlins_park_1280_l62uy382_we299nyq.jpg',
      'http://fishatbat.com/wp-content/images/Marlins-Park-Opening-Day-Aerial-View1.png',
      'https://s-media-cache-ak0.pinimg.com/564x/5c/06/dc/5c06dc84bf6b871bc1c650000479db48.jpg',
      'http://www.trbimg.com/img-54c1738e/turbine/sfl-marlins-seek-2017-allstar-game-20150122',
      'https://cdn0.vox-cdn.com/thumbor/TbGo79SXIoWvxtgRMq7RMLZie_M=/0x446:5760x3686/1600x900/cdn0.vox-cdn.com/uploads/chorus_image/image/46039844/GettyImages-166904143.0.jpg',
      'http://lopressroom.com/system/files_force/photos/viracon/marlins-park-glass-1.jpg?download=1',
      'https://i.ytimg.com/vi/RXz4C-320_M/maxresdefault.jpg',
      
    ]
  }
}
Seeder(stadium);
