var router = require('express').Router();
var driversCtrl = require('../controllers/drivers');

router.get('/drivers', driversCtrl.index);
// router.get('/drivers', driversCtrl.getDrivers);

// router.post('/team', isLoggedIn, driversCtrl.addTeam);



function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}

module.exports = router;