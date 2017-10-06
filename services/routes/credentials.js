const passport = require('passport');

const AuthenticationController = require('../controllers/authentication_controller');
const passportService = require('./passport');

var requireAuth = passport.authenticate('jwt', {session: false});
var requireLogin = passport.authenticate('local', {session: false});
var router = require('express').Router();

function protected(req, res, next) {
	res.send("Here's the secret");
}

router.route("/protected").get(requireAuth, protected);

// router.route("/tenantsignup").post(AuthenticationController.tenant_signup);

// router.route("/employeesignup").post(AuthenticationController.employee_signup);

router.route("/signup").post(AuthenticationController.user_signup);

router.route("/signin").post(requireLogin, AuthenticationController.signin);


module.exports = router;
