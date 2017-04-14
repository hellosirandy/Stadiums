var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  fullName: String,
  email: String,
  profilePic: String,

});

module.exports = mongoose.model('user', userSchema, 'user');
