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


  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  // app.get("/dashboard/:id", function(req, res) {
  //  res.sendFile(path.join(__dirname, "../public/html/dashboard.html"));

  app.get("/dashboard/:id", async (req, res) => {
    const user = await db.User.findOne({
      where: { id: req.params.id }
    }).catch(err => console.log(err));
    const apps = await db.Application.findAll({
      where: { UserId: req.params.id }
    }).catch(err => console.log(err));
    const data = {
      firstname: user.firstName,
      applications: apps
    }
    res.render("dashboard", data);

  });

  app.get("/dashboard/:id/:appid", async (req, res) => {
    const app = await db.Application.findOne({
      where: { id: req.params.id }
    }).catch(err => console.log(err));
    const note = await db.Note.findAll({
      where: { ApplicationId: req.params.id }
    }).catch(err => console.log(err));
    console.log(app);
    const data = {
      date: app.createdAt,
      company: app.company,
      role: app.role,
      noteDate: note.createdAt,
      noteBody: note.body
    }
    res.render("application", data);
  });

  app.get("/dashboard/:id/:appid", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/application.html"));
  });

};