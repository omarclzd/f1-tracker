const User  = require('../models/user');
const Team = require('../models/team');
const request = require('request');
// const standingURL = 'http://ergast.com/api/f1/2019/driverStandings.json';

module.exports = {
  index,
  new: newTeam,
  create,
  show,
  addToUser
};

function addToUser(req, res, next) {
  req.user.teams.push(req.body);
  req.user.save(function(err) {
    // var team = new Team(req.body);
    team.save(function(err) {
      if (err) return res.redirect('teams/new');
      res.redirect('/teams');
    });
  });
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
  Team.findById(req.params.id, function(err, team) {
    res.render('teams/show', {
      title: 'Edit Team', team, user: req.user
    });
  });
}

function create(req, res) {
  // var team = new Team(req.body);
  // team.save(function(err) {
  //   if (err) return res.redirect('teams/new');
  //   console.log(team);
  //   console.log(req.body);
  //   res.redirect('/teams');
  // });
}

function newTeam(req, res) {
  res.render('teams/new', {
    user: req.user
  });
}


function index(req, res, next) {
  Team.find({}, function(err, teams) {

    res.render('teams/index', {
      user: req.user,
      teams
  
    });
  });
}


// function index(req, res, next) {
//   request(standingURL, function(err, response, body) {
//     const standings = JSON.parse(body);
//     console.log(standings);
//     res.render('drivers/index', {
//       standings,
//       user: req.user,
//       // name: req.query.name,
//     });
//   });
// }