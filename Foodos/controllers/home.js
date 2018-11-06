var express = require('express');
var userModel = require.main.require('./models/user-model');
var productModel = require.main.require('./models/product-model');
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

router.get('/padd', function(request, response){
	
	response.render('home/padd')
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