var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var driverSchema = new Schema({
  name: String,
  team: {
    type: String,
    required: true
  },
  position: Number,
  points: Number
});

var teamSchema = new Schema({
  name: String,
  drivers: [driverSchema]
});

module.exports = mongoose.model('Team', teamSchema);