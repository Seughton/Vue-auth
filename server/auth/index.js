const passport = require('passport');
const express = require('express');
const router = express.Router();

const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: '/auth/google/callback'
},
function(accessToken, refreshToken, profile, cb) {
  console.log('accessToken',accessToken)
  console.log('PROFILE', profile)
  return cb(null, profile);
  
}
));

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});


router.get('/google',
  passport.authenticate('google', { scope: ['profile'] })
);

router.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/' }),
  function(req, res) {
    res.redirect('/');
  });

module.exports = router;