var mongoose = require('mongoose');

var ResidentSchema = new mongoose.Schema({
	hse: Number,
	name: String,
	security: {type:Boolean, default: false},
	water: {type:Boolean, default: false}
	

});

module.exports = mongoose.model('Residents', ResidentSchema);