const User = require("../models/user");
// const Driver = require('../models/driver');
const request = require("request");
const driversURL = "http://ergast.com/api/f1/2019/last/results.json";
const teamsURL = "http://ergast.com/api/f1/2019/constructorStandings.json";

module.exports = {
  index,
  new: newTeam,
  create,
  show,
  delTeam,
  edit,
  updateTeam
};

function show(req, res) {
  request(teamsURL, function(err, response, body) {
    const teamData = JSON.parse(body);
    // console.log(teamData.MRData.StandingsTable.StandingsLists[0].ConstructorStandings);
    User.findById(req.params.id, req.body, function(err, team) {
      let red = req.params.id;
      console.log(red);
      console.log(req.body);
      res.render("teams/show", {
        title: "Edit Team",
        user: req.user,
        red,
        teamData:
          teamData.MRData.StandingsTable.StandingsLists[0].ConstructorStandings
      });
    });
  });
}

function create(req, res) {
  User.findById(req.session.passport.user, function(err, user) {
    user.teams.push(req.body);
    user.save(function(err) {
      res.redirect("/teams");
    });
  });
}

function newTeam(req, res) {
  request(teamsURL, function(err, response, body) {
    const teamData = JSON.parse(body);
    // console.log(teamData.MRData.ConstructorStandings);
    res.render("teams/new", {
      user: req.user
    });
  });
}

function index(req, res, next) {
  request(driversURL, function(err, response, body) {
    const driverData = JSON.parse(body);
    User.findById(req.params.id, function(err, team) {
      res.render("teams/index", {
        user: req.user,
        driverData: driverData.MRData.RaceTable.Races[0]
      });
    });
  });
}

function delTeam(req, res, next) {
  User.findOne({ "teams._id": req.params.id }, function(err, user) {
    user.teams.id(req.params.id).remove();
    user.save(function(err) {
      res.redirect("/teams");
    });
  });
}

function edit(req, res) {
  User.findById(req.params.id, function(err, user) {
    // let red = req.params.id;
    res.render("teams/edit", { user: req.user });
  });
}

function updateTeam(req, res, next) {
  User.findByIdAndUpdate(req.params.id, req.body, function(err, user) {
    user.save(function(err) {
      res.redirect("/teams");
    });
  });
}
