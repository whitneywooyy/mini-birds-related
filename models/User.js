var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	email: { type: String, unique: true },
	username: { type: String, unique: true },
	level: { type: Number },
	location: { type: String },
	member: { type: Boolean, default: false },
	updated: { type: Date, default: Date.now }
});	// End userSchema

module.exports = mongoose.model('User', userSchema);