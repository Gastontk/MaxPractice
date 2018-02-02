var mongoose = require('monggose');
var Schema = mongoose.Schema;



var schema = new Schema({
	content: {type: String, required: true},
	user: {type: Schema.Types.ObjectId, ref: 'User'}
	
})

module.exports = mongoose.model('Message', schema)