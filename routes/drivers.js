const express = require('express');
const router = express.Router();
const driversCtrl = require('../controllers/drivers');

router.post('/teams/:id/drivers', driversCtrl.create);

module.exports = router;