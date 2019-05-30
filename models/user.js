var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var driverSchema = new Schema({
  familyName: String,
  givenName: String,
  points: String,


});

var teamSchema = new Schema({
name: String,
nationality: String,
constructorId: String,


});


var userSchema = new mongoose.Schema({
  name: String,
  email: String,
  avatar: String,
  googleId: String,
  drivers: [driverSchema],
  teams: [teamSchema]
}, {
  timestamps: true 
});

// userSchema.post('save', function(doc, next) {
//   doc.populate('teams').execPopulate().then(function() {
//     next();
//   });
// });



module.exports = mongoose.model('User', userSchema)


 