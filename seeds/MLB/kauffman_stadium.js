var Seeder = require('../../helpers/seeder');
var stadium = {
  name: 'Kauffman Stadium',
  sport: ['Baseball'],
  league: ['MLB'],
  detail: {
    team: ['Kansas Royals'],
    capacity: 37903,
    opened: new Date('04/10/1973'),
    architect: 'Kivett and Myers',
    location: 'Kansas City, Missouri',
    images: [
      'http://media.bizj.us/view/img/7493572/kauffmanstadiumroyals*1200xx2211-1244-181-338.jpg',
      'https://c1.staticflickr.com/7/6007/5875940132_38a8861cb3_b.jpg',
      'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/kauffman-stadium-twilight-shawn-everhart.jpg',
      'http://www.kansascity.com/latest-news/article285640.ece/ALTERNATES/LANDSCAPE_1140/If%20you%20want%20to%20watch%20the%202012%20All-Star%20Game%20in%20Kauffman%20Stadium%20&-x97;%20even%20from%20the%20nosebleed%20seats%20&-x97;%20expect%20to%20pay%20through%20the%20nose.',
      'http://www.sportsonearth.com/assets/images/6/7/8/175232678/cuts/Kauffman_Stadium_1_mzcgufxy_1u83ua44.jpg',
      'https://montrealontheroad.files.wordpress.com/2014/09/royals8.jpg',
      'http://huntconstructiongroup.com/wp-content/uploads/2013/07/kauffman-4.jpg',
      'http://www.baseballstadiumreviews.com/Big%20Pictures/Major%20League%20Parks/Kauffman%20Stadium/kauffman4BIG.JPG',
      
    ]
  }
}
Seeder(stadium);
