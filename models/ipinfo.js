var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var schema = new Schema({
	info: String,
	location: [{}]
	
	
})

module.exports = mongoose.model('Ipinfo', schema)