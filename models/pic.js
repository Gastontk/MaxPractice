var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var schema = new Schema({
	url: {type: String, required: true},
	name: {type:String, required: true},
	children: [{type: Schema.Types.ObjectId, ref: 'Pic'}],
	parents: [{type: Schema.Types.ObjectId, ref: 'Pic'}]

})

module.exports = mongoose.model('Pic', schema)