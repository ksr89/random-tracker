var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var express = require("express");

module.exports = function (app, config) {
  var allowCrossDomain = function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,x-access-token");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");

    // intercept OPTIONS method
    if ("OPTIONS" == req.method) {
      res.status(200).end();
    } else {
      next();
    }
  }

  app.use(cookieParser());

  app.use(bodyParser.json({
    limit: "50mb"
  }));

  app.use(bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000
  }));

  app.use(express.static(config.CLIENT_PATH));

  app.use(allowCrossDomain);
}
