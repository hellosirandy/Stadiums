var Seeder = require('../../helpers/seeder');
var TargetField = {
  name: 'Target Field',
  sport: ['Baseball'],
  league: ['MLB'],
  detail: {
    team: ['Minnesota Twins'],
    capacity: 38885,
    opened: new Date('01/04/2010'),
    architect: 'Populous',
    location: 'Minneapolis, Minnesota',
    images: [
      'http://c3e49cadbd10823cc420-5e7eb857c550b19d629bea45a08272c8.r72.cf1.rackcdn.com/lps/assets/u/target-field-lyle-huisken.jpg',
      'http://www.benckphotography.com/photos/Target%20Field%20Daytime%201920x1080%20(16%20x%209).jpg',
      'http://populous.com/wp-content/uploads/2012/02/TargetField-Minneapolis-FieldLevelView.jpg',
      'https://c1.staticflickr.com/9/8113/8658391121_cf1ad727b2_k.jpg',
      'http://www.ballparksofbaseball.com/wp-content/uploads/2016/03/target_topv2.jpg',
      'http://minnesota.twins.mlb.com/min/ballpark/events/images/events/slideshows/tf_events_concerts4.jpg',
      'https://kcrgballparksofthemwl.files.wordpress.com/2010/04/img_3451.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/b/b5/First_Pitch_at_Target_Field.jpg',
      'http://www.mnartists.org/sites/default/files/article/images/d90efef0acbd9858111de6e764ad3813.jpg',
    ]
  }
}
Seeder(TargetField);
