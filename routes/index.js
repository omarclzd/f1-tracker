var router = require('express').Router();
var passport = require('passport');

// The root route renders our only view
router.get('/', function(req, res) {
  res.redirect('/drivers');
});

// Google OAuth login route
router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/drivers',
    failureRedirect : '/drivers'
  }
));

// OAuth logout route
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/drivers');
});

module.exports = router;