const User  = require('../models/user');
const Team = require('../models/team');
const request = require('request');
const driversURL = 'http://ergast.com/api/f1/2019/last/results.json';

module.exports = {
  index,
  // getDrivers,
  new: newTeam,
  create,
  show,
  addToUser,
  delTeam
};

function addToUser(req, res, next) {
  // return User.findById(req.session.passport.user)
  // .populate('teams').exec((err, teams) => {
  //   console.log(user);
  // });
} 

// function addToUser(req, res) {
//   User.findById(req.params.id, function(err, user) {
//     user.teams.push(req.body.teamId);
    
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
   
  const getUser = function() { 
    return User.findById(req.session.passport.user)
    .then(user => user).catch(error => console.log(error))
  }  
   const team = new Team(req.body)
   getUser().then(user => {
     user.teams.push(team)
     team.save()
     console.log(user)
     user.save()
     return user
    })
    .then(user => {
      
     res.redirect('/teams')
   })
   .catch(error => {
     console.log(error)
     res.send(error)
   }) 

  
}

function newTeam(req, res) {
  res.render('teams/new', {
    user: req.user
  });
}


function index(req, res, next) {
  request(driversURL, function(err, response, body) {
    const driverData = JSON.parse(body);
   
    User.findById(req.params.id)
      .populate('teams').exec(function(err, user) {

        res.render('teams/index', {
          user: req.user,
          driverData: driverData.MRData.RaceTable.Races[0],
          
      
        });
       });
     }); 
}


function delTeam(req, res, next) {
 
 User.findOne({'teams._id': req._id}, function(err, user) {
  user.teams.id(req.params.id).remove();
  user.save(function(err) {
    console.log(user.teams);
    res.redirect('/teams');
  });
  
  });
}

