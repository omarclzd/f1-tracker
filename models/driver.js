var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var driverSchema = new Schema({
    familyName: String,
    name: String,
    points: String,
});


module.exports = mongoose.model('Driver', driverSchema);