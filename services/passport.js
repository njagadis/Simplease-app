const passport = require('passport');
const ExtractJwt = require('passport-jwt').ExtractJwt;
const JwtStrategy = require('passport-jwt').Strategy;
const LocalStrategy = require('passport-local');

const Tenant = require('../app/models/tenant');
const Employee = require('../app/models/employee');
const config = require('../config');

var localOptions = {
	usernameField: 'email',
};

var localStrategy = new LocalStrategy(localOptions, function(email, password, done) {
  // Verify this username and password
  Tenant.findOne({email: email.toLowerCase()}, function(err, tenant) {
    if (err) { 
    	return done(err);
    }
    if (!tenant) { 
    	Employee.findOne({email: email.toLowerCase()}, function(err, employee) {
    		if (err) { return done(err) }
    		if (!employee) { return done(null, false) }
    	});
    	// return done(null, false);
    }
    tenant.comparePassword(password, function(err, isMatch) {
      if (err) { return done(err) }
      if (!isMatch) { return done(null, false) }
      return done(null, tenant);
    })
  });
});


var jwtOptions = {
  secretOrKey: config.secret,
  jwtFromRequest: ExtractJwt.fromHeader('authorization')
}; 

var jwtStrategy = new JwtStrategy(jwtOptions, function(payload, done) {
	Tenant.findById(payload.sub, function(err, tenant) {
		if (err) { return done(err, false) }
		if (tenant) {
			done(null, tenant);
		} else {
			done(null, false);
		}
	})
})


// register the strategies with passport
passport.use(jwtStrategy);
passport.use(localStrategy);