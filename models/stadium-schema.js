var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var stadiumSchema = new Schema({
  name: String,
  sport: [String],
  league: [String],
  detail: {
    team: [String],
    capacity: Number,
    opened: Date,
    architect: String,
    location: String,
    images: [String]
  }
});

module.exports = mongoose.model('stadium', stadiumSchema, 'stadium');
