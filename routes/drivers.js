const express = require('express');
const router = express.Router();
const driversCtrl = require('../controllers/drivers');

router.get('/drivers/new', driversCtrl.new);
router.post('/teams/:id/drivers', driversCtrl.create);
// router.post('/teams/:id/drivers', driversCtrl.addToTeam);

module.exports = router;