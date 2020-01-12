var express = require('express');
var config = require('./server/config/config');
var app = express();

// Express settings
require('./server/config/express')(app, config);

// Bootstrap routes
require('./server/config/routes')(app, config);

// Start the app by listening on <port>
var port = config.port || 3000;
app.listen(port);
console.log('\x1b[36m%s\x1b[0m', 'Random Tracker server started on port: ' + port);

// expose app
exports = module.exports = app;
