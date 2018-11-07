var db = require('./db');

module.exports={
	
	getAll: function(callback){
		var sql = "SELECT * FROM food";
		db.getResult(sql, [], function(result){
			callback(result);
		});
	},
	getAllArea: function(searchparams, callback){
		var sql = "select * from restaurant, food, restaurant_by_area, area where restaurant_by_area.AID = area.AID and restaurant_by_area.RID = restaurant.RID and restaurant.RID = food.RID and food.category = '" +searchparams.food+ "' and price <= '"+searchparams.price+"' and area.area_name = '"+searchparams.area+"'";
		db.getResult(sql, function(result){
			callback(result);
		});
	}
};