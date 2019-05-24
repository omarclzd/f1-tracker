const User  = require('../models/user');
const request = require('request');
const standingURL = 'http://ergast.com/api/f1/2019/driverStandings.json';

module.exports = {
  index
  // getDrivers
};



function index(req, res, next) {
  request(standingURL, function(err, response, body) {
    const standings = JSON.parse(body);
    res.render('drivers/index', {
      standings,
      user: req.user,
      // name: req.query.name,
    });
  });
}