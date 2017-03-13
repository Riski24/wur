var express = require('express');
var app = express();

//////// middleware ////////
// serve up static routes from the client folder
app.use(express.static(__dirname + '/../client'));

//////// routes ////////
require('./routes.js')(app);

var port = process.env.PORT || 3000;

app.listen(port);
console.log('Listening on port:', port);

//module.exports = app;
