// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

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

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/dashboard/:id", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/dashboard.html"));
  });

  app.get("/dashboard/:id/:appid", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/application.html"));
  });

};