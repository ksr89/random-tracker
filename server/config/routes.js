module.exports = function (app, config) {
  // Tracker routes
  var tracker = require('../controllers/tracker');
  app.get('/tracker', tracker.track);
}
