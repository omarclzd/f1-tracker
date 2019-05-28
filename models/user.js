var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new mongoose.Schema({
  name: String,
  email: String,
  avatar: String,
  googleId: String,
  teams: [{type: Schema.Types.ObjectId, ref: 'Team'}]
}, {
  timestamps: true 
});

// userSchema.post('save', function(doc, next) {
//   doc.populate('teams').execPopulate().then(function() {
//     next();
//   });
// });


module.exports = mongoose.model('User', userSchema );