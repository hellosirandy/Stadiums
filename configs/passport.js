var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
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
          if (!user) user = new User();
          user.email = profile._json.email;
          user.profilePic = profile._json.picture.data.url;
          user.fullName = profile._json.name;
          user.save(function(err) {
            if (err) return done(err);
            else return done(null, user);
          });
        }
      })
    });
  }
));
