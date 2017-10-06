const mongoose = require("mongoose");
const bcrypt = require('bcrypt-nodejs');
mongoose.Promise = global.Promise;


var validateEmail = (email) => {
  return (/\S+@\S+\.\S+/).test(email);
}

var UserSchema = new mongoose.Schema({
	level: Number,
	first_name: String,
	last_name: String,
    email: {
	    type: String,
	    unique: true,
	    lowercase: true,
	    required: 'Email address is required',
	    validate: [validateEmail, 'Please enter a valid email']
	},
  	password: {
  		type: String
  	},
});

UserSchema.pre('save', function (next) {
	var user = this; // current tenant object
	if (user.isNew || user.isModified('password')) {
		bcrypt.genSalt(10, function(err, salt) { // encrypt the password once we receive it
 		if (err) {
			return next(err);
		}
		bcrypt.hash(user.password, salt, null, function(err, hash) {
			if (err) { return next(err) }
			user.password = hash;
			next();
		});
	});
	} else {
		next();
	}

});

UserSchema.methods.comparePassword = function(candidate, callback) {
	bcrypt.compare(candidate, this.password, function (err, isMatch) {
		if (err) { return callback(err) }
		callback(null, isMatch);
	})
}




const UserModel = mongoose.model('user', UserSchema);

module.exports = UserModel;
