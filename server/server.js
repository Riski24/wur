var express = require('express');
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var app = express();

// connect to mongo database named "wur"
mongoose.connect('mongodb://localhost/wur');
mongoose.connection.once('open', function() {
  console.log('wur mongodb connected successfully');
});

////////// middleware //////////
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// serve up static routes from the client folder
app.use(express.static(__dirname + '/../client'));

////////// routes //////////
require('./routes.js')(app);

////////// listen //////////
var port = process.env.PORT || 3000;
app.listen(port);
console.log('Listening on port:', port);

//module.exports = app;
