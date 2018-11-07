var express = require('express');
var userModel = require.main.require('./models/user-model');
var router = express.Router();

router.get('/', function(request, response){
	response.render('login/index');
});

router.post('/', function(request, response){

	var user = {
		username : request.body.username,
		password : request.body.password
	};
	
	userModel.validate(user, function(status){
		if (status)
		{
			if (type == "admin")
			{
				request.session.un = request.body.username;
				response.redirect('/admin');
			}
			else
			{
				response.redirect('/superadmin');
			}
		}
		else
		{
			response.redirect('/login');
		}
	});

});

module.exports = router;