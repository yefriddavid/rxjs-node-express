var express = require('express');
//var users = require('./users');

module.exports = function (app) {
  var route = express.Router();

  // Mount route as "/users"
  app.use('/users', route);

  // Add a route that allows us to get a user by their username
  route.get('/:username', function (req, res) {
      var user = null; //users.getByUsername(req.params.username);

    if (!user) {
      res.status(404).json({
        status: 'not ok',
        data: null
      });
    } else {
      res.json({
        status: 'ok',
        data: user
      });
    }
  });
};

