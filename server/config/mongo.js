var mongoose=require("mongoose");

mongoose.connect('mongodb://db:27017/myblog',function(err,db) {
	if(err){
		console.log("Errrrr");
		console.log(err);
	}
	if(db){
		console.log("Db is up!");
	}
});
var db = mongoose.connection;

module.exports=db;