var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var userSchema = new Schema({
  fullName: {type: String, required: true},
  email: {type: String, required: true},
  profilePic: {type: String, default: '/images/default_profile_pic.png'},
  password: String,
  strategy: {type: String, required: true},
});

userSchema.methods.encryptPassword = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(5), null);
};

userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('user', userSchema, 'user');
