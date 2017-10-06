const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create a schema and a model

const UnitSchema = new Schema({
	unit_size: String,
	num_beds: Number,
	num_baths: Number,
	lease_start: String, // should be a date, built in function?
	max_residents: Number,
	is_furnished: Boolean,
	type: Number,
	residents: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Tenant"
		}
	],
	is_vacant: Boolean
});

const Unit = mongoose.model('unit', UnitSchema);

module.exports = Unit;
