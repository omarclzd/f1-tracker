const User = require("../models/user");
const request = require("request");

const driversURL = "http://ergast.com/api/f1/2019/last/results.json";

module.exports = {
  create,
  new: newDriver,
  show,
  delDriver
};

function show(req, res) {
  User.findById(req.params.id, req.body, function(err, team) {
    let red = req.params.id;
    console.log(red);
    console.log(req.body);
    res.render("teams/show", {
      title: "Edit Team",
      user: req.user,
      red
    });
  });
}

function create(req, res) {
  User.findById(req.session.passport.user, function(err, user) {
    user.drivers.push(req.body);
    user.save(function(err) {
      res.redirect("/teams");
    });
  });
}

function newDriver(req, res) {
  request(driversURL, function(err, response, body) {
    const driverData = JSON.parse(body);
    // console.log(teamData.MRData.ConstructorTable.Constructors);
    res.render("drivers/new", {
      user: req.user,
      driverData: driverData.MRData.RaceTable.Races[0]
    });
  });
}

function delDriver(req, res) {
  User.findOne({ "drivers._id": req.params.id }, function(err, user) {
    user.drivers.id(req.params.id).remove();
    user.save(function(err) {
      res.redirect("/teams");
    });
  });
}
