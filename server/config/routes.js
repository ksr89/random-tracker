module.exports = function (app, config) {
  // Tracker routes
  var tracker = require('../controllers/tracker');
  app.get('/tracker/:userName', tracker.track);
}
