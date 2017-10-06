const Tenant = require('../../app/models/tenant');
const Employee = require('../../app/models/employee');
const User = require('../../app/models/user');

const jwt = require('jwt-simple');
const config = require('../../config');


function tokenForUser(user) {
	var timestamp = new Date().getTime();
	return jwt.encode({
		sub: user.id,
		iat: timestamp
	}, config.secret);
}

// exports.employee_signup = function(req, res, next) {
//   // console.log(req.body);
//   var email = req.body.email;
//   var password = req.body.password;
//   var first_name = req.body.first_name;
//   var last_name = req.body.last_name;

//   if (!email || !password || !first_name || !last_name) {
//     return res.status(422).json({error: "You must provide an email, password, first name, and last name!"});
//   }

//   // Check if user already exists, send error if they do
//   Employee.findOne({email: email}, function(err, existingUser) {
//     if (err) { return next(err) }
//     if (existingUser) {return res.status(422).json({error: "Email taken"})}
//     var employee = new Employee({
//     	level: 2,
//     	first_name: first_name,
//     	last_name: last_name,
//     	email: email,
//     	password: password
//     });
//     employee.save(function(err) {
//       if (err) { return next(err) }
//       res.json({user_id: employee._id, token: tokenForUser(employee)});
//     });
//   });
// }

// exports.tenant_signup = function(req, res, next) {
//   // console.log(req.body);
//   var email = req.body.email;
//   var password = req.body.password;
//   var first_name = req.body.first_name;
//   var last_name = req.body.last_name;

//   if (!email || !password || !first_name || !last_name) {
//     return res.status(422).json({error: "You must provide an email, password, first name, and last name!"});
//   }

//   // Check if user already exists, send error if they do
//   Tenant.findOne({email: email}, function(err, existingUser) {
//     if (err) { return next(err) }
//     if (existingUser) {return res.status(422).json({error: "Email taken"})}
//     var tenant = new Tenant({
//     	level: 1,
//     	first_name: first_name,
//     	last_name: last_name,
//     	email: email,
//     	password: password
//     });
//     tenant.save(function(err) {
//       if (err) { return next(err) }
//       res.json({user_id: tenant._id, token: tokenForUser(tenant)});
//     });
//   });
// }

exports.user_signup = function(req, res, next) {
  var email = req.body.email;
  var password = req.body.password;
  var first_name = req.body.first_name;
  var last_name = req.body.last_name;

  if (!email || !password || !first_name || !last_name) {
    return res.status(422).json({error: "You must provide an email, password, first name, and last name!"});
  }

  // Check if user already exists, send error if they do
  User.findOne({email: email}, function(err, existingUser) {
    if (err) { return next(err) }
    if (existingUser) {return res.status(422).json({error: "Email taken"})}
    // create a new user variable
    var user = new User({
      level: 0,
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password
    });

    // create a new tenant variable
    var tenant = new Tenant({
      level:1,
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password
    });

    //create a new employee variable
    var employee = new Employee({
      level: 2,
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password
    })
    var user_id = "";
    var token = "";
    var tenant_id = "";
    user.save(function(err) {
      if (err) { return next(err) }
      user_id = user._id;
      token = tokenForUser(user);
      res.json({user_id: user._id, token: tokenForUser(user)});
    });
    //for now, save the tenant version of the user
    // later, check if the user was registering as a tenant or as a employee, and save the proper version
    // tenant.save(function (err) {
    //   if (err) { return next(err) }
    //   tenant_id = tenant._id;
    //   // res.json({tenant_id: tenant._id, token: tokenForUser(tenant)});
    //   res.json({user_id: user_id, token: token, tenant_id: tenant_id});
    // })
  });
}

exports.signin = function(req, res, next) {
	var user = req.user;
	res.send({token: tokenForUser(user), user_id: user._id});
}