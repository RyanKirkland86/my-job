var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the applications
    app.get("/api/recruiters/", function(req, res) {
        db.Recruiter.findAll({})
        .then(function(result) {
            res.json(result);
        });
    });

    // GET route for getting single application
    app.get("/api/recruiters/:id", function(req, res) {
        db.Recruiter.findAll({where: {id: req.params.id}})
            .then(function(result) {
            res.json(result);
        });
    });

    app.put("api/recruiters/:id", function(req, res) {
        db.Recruiter.update(req.body, {id: req.params.id}).then(function(result) {
            res.json(result);
        });
    });

    app.post("/api/recruiters", function(req, res) {
        // Create a User with the data available to us in req.body
        db.Recruiter.create(req.body).then(function(result) {
          res.json(result);
        });
    });
    
    app.delete("/api/recruiters/:id", function(req, res) {
        // Delete the Author with the id available to us in req.params.id
        db.Recruiter.destroy({
          where: {
            id: req.params.id
          }
        }).then(function(result) {
          res.json(result);
        });
    });
};