const User = require('../models/user');
const request = require('request');

const driversURL = 'http://ergast.com/api/f1/2019/last/results.json';

module.exports = {
  create,
new: newDriver
};

function create(req, res) {
  User.findById(req.session.passport.user, function(err, user) {
    user.drivers.push(req.body);
    user.save(function(err) {
      res.redirect('/teams');
    });
    
  });
};


function newDriver(req, res) {
  request(driversURL, function(err, response, body) {
    const driverData = JSON.parse(body);
    // console.log(teamData.MRData.ConstructorTable.Constructors);
  res.render('drivers/new', {
    user: req.user,
    driverData: driverData.MRData.RaceTable.Races[0],
    
  });
  });
}

// function create(req, res) {
//   Driver.create(req.body, function(err, drivers) {
//     res.redirect('teams/show');
//   });
// }

// function addToTeam(req, res) {
//   User.findById(req.session.passport.user, function(err, user) {
//     user.teams.push(req.body.driversId);
//     user.save(function(err) {
//       res.redirect(`/teams/${teams._id}`);
//     });
    
//   });
// }