const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

before(function (done) {
	//Connect to mongodb
	mongoose.connect('mongodb://localhost/simplease');

	mongoose.connection.once('open', function(){
	   console.log('Connection has been made, commence Simplease');
	   done();
	}).on('error', function(error) {
	    console.log('Connection error: ', error);
	    done();
	});
})
