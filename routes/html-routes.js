// Requiring path to so we can use relative routes to our HTML files
var path = require("path");
var db = require("../models")

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

  app.get("/", function(req, res) {
    // If the user already has an account send them to the dashboard page
    if (req.user) {
      res.redirect("/dashboard/:id");
    }
    res.sendFile(path.join(__dirname, "../public/html/landing.html"));
  });

  app.get("/dashboard/:id", async (req, res) => {
    const user = await db.User.findOne({
      where: { id: req.params.id }
    });
    const apps = await db.Application.findAll({
      where: { UserID: req.params.id }
    })
    const data = {
      id: user.id,
      firstname: user.firstName,
      applications: apps
    }
    res.render("dashboard", data);
  });

  app.get("/dashboard/:id/:appid", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/application.html"));
  });

};