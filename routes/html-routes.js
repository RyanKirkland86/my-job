// Requiring path to so we can use relative routes to our HTML files
var path = require("path");
var db = require("../models")

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");
const user = require("../models/user");

module.exports = function(app) {

  // Render login page or redirect to Dashboard.
  app.get("/", (req, res) => {
    if (req.user) {
      // console.log(req.user)
      // res.redirect("/dashboard/:id");
      res.redirect("/dashboard/" + req.user.id)
    }
    res.render("landing", {
      title: "My Job | Welcome!"
    })
  })
  
  // Render user dashboard page.
  app.get("/dashboard/:id", isAuthenticated, async (req, res) => {
    try {
      const findUser = db.User.findOne({
        where: { id: req.params.id }
      })
      const findApps = db.Application.findAll({
        where: { UserId: req.params.id }
      })
      const [user, apps] = await Promise.all([findUser, findApps])
      res.render("dashboard", 
      { title: 'My Job | Dashboard',
        user: user,
        apps: apps
      });
    } catch (error) {
      console.error(error)
    }
  });

  // Render Application info page.
  app.get("/dashboard/:id/:appid", isAuthenticated, async (req, res) => {
    try {
      const findApp = db.Application.findOne({
        where: { id: req.params.appid }
      })
      const findNotes = db.Note.findAll({
        where: { ApplicationId: req.params.appid }
      })
      const [app, notes] = await Promise.all([findApp, findNotes])
      res.render("application", {
        title: "My Job | Application",
        app: app,
        notes: notes,
      });
    } catch (error) {
      console.error(error)
    }
  });
};