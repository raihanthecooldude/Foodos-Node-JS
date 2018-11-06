//DECLARATION
var express 		= require('express');
var bodyParser 		= require('body-parser');
var expressSession 	= require('express-session');
var cookieParser 	= require('cookie-parser');
var home 			= require('./controllers/home');
var login 			= require('./controllers/login');
var logout 			= require('./controllers/logout');
var registration 			= require('./controllers/registration');
var app 			= express();

//CONFIGURATION
app.set('view engine', 'ejs');

//MIDDLEWARE
app.use(bodyParser.urlencoded({extended: false}));
app.use(expressSession({secret: 'hhdhdhdhd', saveUninitialized: true, resave: false}));
app.use(cookieParser());


//ROUTING
app.use('/login', login);
app.use('/logout', logout);
app.use('/home', home);
app.use('/registration', registration);

app.get('/', function(request, response){
	response.render('index');
});


//SERVER STARTUP
app.listen(3000, function(){
	console.log("Server startead at 3000...");
});
