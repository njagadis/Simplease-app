const mongoose = require("mongoose");
const bcrypt = require('bcrypt-nodejs');
mongoose.Promise = global.Promise;


var validateEmail = (email) => {
  return (/\S+@\S+\.\S+/).test(email);
}

var TenantSchema = new mongoose.Schema({
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
    starred_unit_ids: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Unit"
        }
    ]
});

TenantSchema.pre('save', function (next) {
	var tenant = this; // current tenant object
	if (tenant.isNew || tenant.isModified('password')) {
		bcrypt.genSalt(10, function(err, salt) { // encrypt the password once we receive it
 		if (err) {
			return next(err);
		}
		bcrypt.hash(tenant.password, salt, null, function(err, hash) {
			if (err) { return next(err) }
			tenant.password = hash;
			next();
		});
	});
	} else {
		next();
	}

});

TenantSchema.methods.comparePassword = function(candidate, callback) {
	bcrypt.compare(candidate, this.password, function (err, isMatch) {
		if (err) { return callback(err) }
		callback(null, isMatch);
	})
}




const TenantModel = mongoose.model('tenant', TenantSchema);

module.exports = TenantModel;
