var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');

// config file
var db = require('./config/db');

//port
var port = process.env.PORT || 8080;

// connect to our mongoDB database 
// (uncomment after you enter in your own credentials in config/db.js)
// mongoose.connect(db.url);

app.use(bodyParser.json()); 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(methodOverride('X-HTTP-Method-Override')); 
app.use(express.static(__dirname + '/public')); 

// routes

require('./app/routes')(app); // configure our routes

//start app

app.listen(port);               

console.log('there is no magic in the world ' + port);

//expose app

exports = module.exports = app;                         
