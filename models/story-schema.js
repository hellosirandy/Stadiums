var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var storySchema = new Schema({
  author: Object,
  stadium: String,
  title: String,
  content: String,
  create: {type: Date, default: Date.now}
});

module.exports = mongoose.model('story', storySchema, 'story');
