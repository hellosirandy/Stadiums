var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var storySchema = new Schema({
  author: { type: Schema.Types.ObjectId, ref: 'user' },
  stadium: { type: Schema.Types.ObjectId, ref: 'stadium' },
  title: String,
  content: String,
  create: {type: Date, default: Date.now},
  evaluation: Number
});

storySchema.methods.handleStory = function() {
  var handledStory = this;
  var timeList = this.create.toString().split(' ');
  var month = timeList[1];
  var date = timeList[2];
  var time = timeList[4].split(':').slice(0, 2);
  if (this.evaluation > 0) handledStory.evaluationClass = 'positive'
  else if (this.evaluation < 0) handledStory.evaluationClass = 'negative'
  else handledStory.evaluationClass = 'zero'
  handledStory.processedCreate = time.join(':') + ' ' + month + ' ' + date;
  return handledStory;
}

module.exports = mongoose.model('story', storySchema, 'story');
