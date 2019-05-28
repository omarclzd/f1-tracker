const User  = require('../models/user');
const Team = require('../models/team');
const request = require('request');
let driversURL = 'http://ergast.com/api/f1/2019/last/results.json';

module.exports = {
  index,
  // getDrivers,
  new: newTeam,
  create,
  show,
  addToUser
};

function addToUser(req, res, next) {
  // req.user.teams.push(req.body);
  // req.user.save(function(err) {
  //   // var team = new Team(req.body);
  //   team.save(function(err) {
  //     if (err) return res.redirect('teams/new');
  //     res.redirect('/teams');
  //   });
  // });
} 

// function addToUser(req, res) {
//   User.findById(req.params.id, function(err, user) {
//     user.teams.push(req.body.teamId);
//     user.save(function(err) {
//       res.redirect('/teams');
//     });
//   });
// }

function show(req, res) {
  request(driversURL, function(err, response, body) {
    const driverData = JSON.parse(body);
    Team.findById(req.params.id, function(err, team) {
      res.render('teams/show', {
        title: 'Edit Team',
        team, 
        user: req.user,
        driverData: driverData.MRData.RaceTable.Races[0],
      });
    });
  });
}

function create(req, res) {
  // User.findById(req.user.id, function(err, user) {
  //   user.teams.push(req.user.body);
  //   user.save(function(err) {
  //     res.redirect('/teams');
  //   });
  // });
  var team = new Team(req.body);
  team.save(function(err) {
    if (err) return res.redirect('teams/new');
    console.log(team);
    console.log(req.body);
    res.redirect('/teams');
  });
}

function newTeam(req, res) {
  res.render('teams/new', {
    user: req.user
  });
}


function index(req, res, next) {
  request(driversURL, function(err, response, body) {
    const driverData = JSON.parse(body);
    // console.log(driverData.MRData.RaceTable.Races[0]);
    
      Team.find({}, function(err, teams) {
        res.render('teams/index', {
          user: req.user,
          driverData: driverData.MRData.RaceTable.Races[0],
          teams
  
      });
    });
  });
}


