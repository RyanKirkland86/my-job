var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the applications
  app.get("/api/applications/", function(req, res) {
    db.Application.findAll({})
      .then(function(result) {
        res.json(result);
      });
  });


};