const User  = require('../models/user');
const standingURL = 'http://ergast.com/api/f1/2019/driverStandings.json';

module.exports = {
  index,
  getDrivers
};

function getDrivers(req, res) {
  request(standingURL, function(err, response, body) {
    const standings = JSON.parse(body);
    res.render('drivers/index', {standings})
  });
}

function index(req, res, next) {
  console.log(req.query)
  // Make the query object to use with Student.find based up
  // the user has submitted the search form or now
  let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
  // Default to sorting by name
  let sortKey = req.query.sort || 'name';
  User.find(modelQuery)
  .sort(sortKey).exec(function(err, users) {
    if (err) return next(err);
    // Passing search values, name & sortKey, for use in the EJS
    res.render('drivers/index', {
      users,
      user: req.user,
      name: req.query.name,
      sortKey
    });
  });
}