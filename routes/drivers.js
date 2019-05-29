const express = require('express');
const router = express.Router();
const driversCtrl = require('../controllers/drivers');

router.get('/teams/newDriver', driversCtrl.newDriver);
router.post('/teams/:id/drivers', driversCtrl.create);
// router.post('/teams/:id/drivers', driversCtrl.addToTeam);

module.exports = router;