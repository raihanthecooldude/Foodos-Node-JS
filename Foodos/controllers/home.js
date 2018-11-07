var express = require('express');
var areaModel = require.main.require('./models/area-model');
var foodModel = require.main.require('./models/food-model');
var router = express.Router();


router.get('*', function(request, response, next){
	
	if(request.session.un != ""){
		next();
	}else{
		response.redirect('/login');
	}
});

router.get('/', function(request, response){
	
	response.redirect('/login');
});

router.get('/search', function(request, response){
	
	areaModel.getAll(function (arealist)
	{
		foodModel.getAll(function (foodlist)
		{
			response.render('search/index', {area : arealist, food : foodlist})
		})
	});
});

router.post('/search', function(request, response){
	var searchparams = {
		area : request.body.area,
		food : request.body.food,
		price : request.body.price
	};
	response.render('search/index');
});

router.get('/productList', function(request, response){
	
	productModel.getAll(function(result){
		response.render('home/productList', {productList: result});
	});
});

router.get('/pedit/:id', function(request, response){
	
		var productId = request.params.id;

		productModel.get(productId, function(result){
			response.render('home/pedit', {product: result});
		});

});

router.post('/pedit/:id', function(request, response){
	
		var product={
			pid: request.params.id,
			pname: request.body.pname,
			quantity: request.body.quantity,
			price: request.body.price
		};

		productModel.update(product, function(status){

			if(status){
				
				response.redirect(request.body.pid);
			}else{
				response.send('Error');
			}
		});
});

router.get('/pdelete/:id', function(request, response){
	
		var productId = request.params.id;

		productModel.delete(productId, function(result){
			productModel.getAll(function(result){
				response.render('home/productList', {productList: result});
			});
		});
});

router.post('/padd', function(request, response){
	
	var product={
		pname: request.body.pname,
		quantity: request.body.quantity,
		price: request.body.price
	};

	productModel.insert(product, function(status){
		
		if(status == true){
			response.redirect('/home/productList');
		}else{
			response.send('Error in adding product');
		}
		
	});
});



module.exports = router;