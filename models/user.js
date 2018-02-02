var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator')



var schema = new Schema({
	firstName: {type:String, required: true},
	lastName: {type:String, required: true},
	password: {type:String, required: true},
//In order for unique to actually be validated, install the following package:
// npm install --save mongoose-unique-validator
	email: {type:String, required: true, unique: true},
	messages: [{type: Schema.Types.ObjectId, ref: 'Message'}]
	
})

//puttting mongoose-unique-validator into play so it validates unique email
schema.plugin(mongoose-unique-validator)


module.exports = mongoose.model('User', schema)