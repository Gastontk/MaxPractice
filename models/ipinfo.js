var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var schema = new Schema({
	info: {type: String}
	
	
})

module.exports = mongoose.model('Ipinfo', schema)