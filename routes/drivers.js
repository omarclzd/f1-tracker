const express = require('express');
const router = express.Router();
const driversCtrl = require('../controllers/drivers');

router.get('/drivers/new', driversCtrl.new);
router.post('/teams/drivers', driversCtrl.create);
router.get('/teams/:id/drivers', driversCtrl.show);
router.delete('/teams/:id/drivers', driversCtrl.delDriver);
// router.post('/teams/:id/drivers', driversCtrl.addToTeam);

module.exports = router;