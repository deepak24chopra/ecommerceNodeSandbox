var express = require('express');
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var User = require('./models/user');

var app = express();


mongoose.connect('mongodb://localhost:27017/ecommerce',{useNewUrlParser: true}, function(err) {
	if(err) {
		console.log(err);
	} else {
		console.log("Connected to database.");
	}
})


//middleware
app.use(morgan('dev'));


app.post('/create-user', function(req,res) {
	var user = new User();

	user.profile.name = 

})



app.listen(3000, function(err) {
	if (err) throw err;
	console.log("Server is running on port 3000.");
});