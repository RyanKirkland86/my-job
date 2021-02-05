var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the users
  app.get("/api/users/", function(req, res) {
    db.User.findAll({})
      .then(function(result) {
        res.json(result);
      });
  });

  // GET route for getting single user
  app.get("/api/users/:id", function(req, res) {
    db.User.findAll({where: {id: req.params.id}})
      .then(function(result) {
        res.json(result);
      });
  });

  app.post("/api/users", function(req, res) {
    // Create a User with the data available to us in req.body
    db.User.create(req.body).then(function(result) {
      res.json(result);
    });
  });

  app.delete("/api/users/:id", function(req, res) {
    // Delete the Author with the id available to us in req.params.id
    db.User.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(result) {
      res.json(result);
    });
  });

};



