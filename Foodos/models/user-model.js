var db = require('./db');

module.exports={
	
	get: function(userId, callback){
		var sql = "select * from user where id=?";
		db.getResult(sql, [userId], function(result){
			//console.log(result);sdgnsdfnsrdfgb
			callback(result[0]);
		});
	},
	getAll: function(callback){
		var sql = "SELECT * FROM user";
		db.getResult(sql, [], function(result){
			callback(result);
		});
	},
	insert: function(user, callback){
		var sql = "INSERT INTO user values(null, ?, ?,?)";
		db.execute(sql, [user.username, user.password, user.type], function(success){
			callback(success);
		});
	},
	validate: function(user, callback){
		var sql = "select * from emp where uname=? and pass=?";
		db.getResult(sql, [user.username, user.password], function(result){
			
			if(result.length > 0){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	update: function(user, callback){
		var sql = "UPDATE user set username=?, password=?, type=? where id=?";
	
		db.execute(sql, [user.username, user.password, user.type, user.id], function(status){
			callback(status);
		});
	},
}