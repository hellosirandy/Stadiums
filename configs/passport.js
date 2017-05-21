var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var LocalStrategy = require('passport-local').Strategy;
var configAuth = require('./auth');
var User = require('../models/user-schema');

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

passport.use(new FacebookStrategy({
    clientID: configAuth.facebookAuth.clientID,
    clientSecret: configAuth.facebookAuth.clientSecret,
    callbackURL: configAuth.facebookAuth.callbackURL,
    profileFields: ['displayName', 'email', 'picture.type(large)']
  },
  function(accessToken, refreshToken, profile, done) {
    process.nextTick(function() {
      User.findOne({email: profile._json.email}, function(err, user) {
        if (err) return done(err);
        else {
          if (!user)  user = new User();
          user.email = profile._json.email;
          user.profilePic = profile._json.picture.data.url;
          user.fullName = profile._json.name;
          user.strategy = 'facebook';
          user.save(function(err) {
            if (err) return done(err);
            else return done(null, user);
          });
        }
      });
    });
  }
));

passport.use('local.signup', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}, function(req, email, password, done) {
  req.checkBody({
    'email': {
      notEmpty: true,
      isEmail: {
        errorMessage: 'Invalid Email.'
      }
    },
    'password': {
      notEmpty: true,
      isLength: {
        options: [{ min: 8}],
        errorMessage: 'Password must be at least 8 chars long.'
      }
    },
    'fullName': {
      notEmpty: true,
      errorMessage: 'Full name cannot be empty.'
    }
  });
  req.checkBody('confirmPassword','Passwords do not match.').equals(req.body.password);
  var errors = req.validationErrors();
  if (errors) {
    var messages = [];
    errors.forEach(function(error) {
      messages.push(error.msg);
    });
    return done(null, false, req.flash('error', messages));
  }
  User.findOne({'email': email}, function(err, user) {
    if (err) return done(err);
    if (user) return done(null, false, {message: 'Email is alread in use'});
    var newUser = new User();
    newUser.email = email;
    newUser.password = newUser.encryptPassword(password);
    newUser.fullName = req.body.fullName;
    newUser.strategy = 'local';
    newUser.save(function(err, result) {
      if (err) return done(err);
      return done(null, newUser);
    });
  });
}));

passport.use('local.signin', new LocalStrategy ({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}, function(req, email, password, done) {
  req.checkBody({
    'email': {
      notEmpty: true,
      isEmail: {
        errorMessage: 'Invalid Email'
      }
    },
    'password': {
      notEmpty: true
    }
  });
  var errors = req.validationErrors();
  if (errors) {
    var messages = [];
    errors.forEach(function(error) {
      messages.push(error.msg);
    });
    return done(null, false, req.flash('error', messages));
  }
  User.findOne({'email': email}, function(err, user) {
    if (err) return done(err);
    if (!user) return done(null, false, {message: 'No user found.'});
    if (user.strategy != 'local') return done(null, false, {message: `This email has been signed up with ${user.strategy}`});
    if (!user.validPassword(password)) return done(null, false, {message: 'Wrong password.'});
    return done(null, user);
  });
}));
