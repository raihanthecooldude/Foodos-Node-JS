var express = require('express');
var productModel = require.main.require('./models/food-model');
var anonymousModel	= require.main.require('./models/anonymous-model');  
var router = express.Router();


router.get('/', function(request, response){
	var searchparams = {
		area : request.body.area,
		food : request.body.food,
		price : request.body.price
	};
	console.log(searchparams);
	anonymousModel.getAllArea(searchparams, function(result)
	{
		console.log(result);
		response.render('search/result', {foodlist : result});
	})
});

module.exports = router;