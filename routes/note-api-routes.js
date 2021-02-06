var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the users
  app.get("/api/notes/", function(req, res) {
    db.Note.findAll({})
      .then(function(result) {
        res.json(result);
      });
  });

  // GET route for getting single user
  app.get("/api/notes/:id", function(req, res) {
    db.Note.findAll({where: {id: req.params.id}})
      .then(function(result) {
        res.json(result);
      });
  });

  app.post("/api/notes", function(req, res) {
    // Create a User with the data available to us in req.body
    db.Note.create(req.body).then(function(result) {
      res.json(result);
    });
  });

  app.delete("/api/notes/:id", function(req, res) {
    // Delete the Author with the id available to us in req.params.id
    db.Note.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(result) {
      res.json(result);
    });
  });

};



