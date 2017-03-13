var express = require('express');
var app = express();

require('./routes.js')(app);

var port = process.env.PORT || 3000;

app.listen(port);
console.log('Listening on port:', port);

//module.exports = app;
