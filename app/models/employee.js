var mongoose = require("mongoose");
const bcrypt = require('bcrypt-nodejs');
mongoose.Promise = global.Promise;

var EmployeeSchema = new mongoose.Schema({
	company:[
		{
		type:mongoose.Schema.Types.ObjectId,
		ref: "Company"
		}
	]
});

EmployeeSchema.pre('save', function (next) {
	var employee = this; // current tenant object
	if (employee.isNew || employee.isModified('password')) {
		bcrypt.genSalt(10, function(err, salt) { // encrypt the password once we receive it
 		if (err) {
			return next(err);
		}
		bcrypt.hash(employee.password, salt, null, function(err, hash) {
			if (err) { return next(err) }
			employee.password = hash;
			next();
		});
	});
	} else {
		next();
	}

})

module.exports = mongoose.model("employee", EmployeeSchema);
