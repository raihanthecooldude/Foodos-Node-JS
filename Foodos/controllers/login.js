var express = require('express');
var mysql = require('mysql');
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
		if(status){
			request.session.un = request.body.username;
			
			userModel.get(function(result){
				if (result.type == 'admin')
				{
					response.render('home/admin-home');
				}
				else
				{
					response.render('home/emp-home');
				}
		});
			response.redirect('/home');
		}else{
			response.redirect('/login');
		}
	});

});

module.exports = router;