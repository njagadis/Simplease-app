const mongoose = require("mongoose");

const CompanySchema = new mongoose.Schema({
	Name: String;
	employee:[ //employee array
		{
		type:mongoose.Schema.Types.ObjectID,
		ref: "Employee"
		}
	]
	building:[
		{
		type:mongoose.Schema.Types.ObjectID,
		ref: "Building"
		}
	]
});

const Company = mongoose.model("Company", CompanySchema);
module.exports = Company;
