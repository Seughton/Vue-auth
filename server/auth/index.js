const passport = require('passport');
const express = require('express');
const router = express.Router();
const {addUser,findByEmail,updateUser} = require('../dbqueries')
const {create} = require('./utils')

const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: '/auth/google/callback'
}, async(accessToken, refreshToken, profile, cb) => {

  const email = profile.emails[0].value;
  let account = {}
  try {
    let user = await findByEmail(email)
    if (user.rows.length) {
      user = await updateUser(profile,profile.id)
    } else {
      await addUser(profile)
    }    
  account.user = user
  account.id = profile.id

    return cb(null, account);
  } catch (error) {
    return cb(error);
  }

}
));

passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});

router.get('/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get('/google/callback', (req, res, next) => {
  passport.authenticate('google', async (err, user) => {
    if (err) { return next(err); }
    try {
      console.log('creating token with', user.id); 
      let id = user.id
      res.redirect(`${process.env.CLIENT_REDIRECT}#${id}`);
    } catch (error) {
      res.redirect(`${process.env.CLIENT_ERROR_REDIRECT}${error.message}`);
    }
  })(req, res, next);
});

module.exports = router;