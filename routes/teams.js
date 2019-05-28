var router = require('express').Router();
var teamsCtrl = require('../controllers/teams');

router.get('/teams', teamsCtrl.index);
// router.get('/teams', teamsCtrl.getDrivers);
// router.get('/drivers', driversCtrl.getDrivers);

router.get('/teams/new', isLoggedIn, teamsCtrl.new);
router.get('/teams/:id', teamsCtrl.show);
router.post('/teams', teamsCtrl.create);
router.post('/teams', teamsCtrl.addToUser);



function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}

module.exports = router;