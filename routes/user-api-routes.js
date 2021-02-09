var db = require("../models");
var passport = require("../config/passport");

// Routes
// =============================================================
module.exports = function(app) {

  //passport.authenticate middleare with local strategy
  //checks fi user has valid login credentials
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    console.log(req.user.dataValues.id);
    // res.setHeader("Content-Type", "text/html");
    // res.redirect("/dashboard/" + req.user.dataValues.id);
    res.json({
      message: "Redirect",
      url: "/dashboard/" + req.user.dataValues.id
    })
    // res.send("/dashboard/" + req.user.dataValues.id);
  });
  
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

  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  // Find user corresponding to username and password -> We can use this as the route that is taken after submitting on login, can also call on this route after creating a new user.
  // app.get("/api/login/:username/:password", function (req, res) {

  //   db.User.findOne({
  //       where: {
  //           userName: req.params.username,
  //           password: req.params.password
  //       }
  //   }).then(function (result) {
  //       res.json([result]);
  //   });
  // });

  app.post("/api/newuser", function(req, res) {
    // Create a User with the data available to us in req.body
    db.User.create(req.body).then(function(result) {
      res.json(result);
    });
  });

/*
  app.post("/api/newUser", function(req, res) {
    db.User.create({
      userName: req.body.userName,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: req.body.password,
      email: req.body.email
    })
    .then(function() {
      res.redirect(307, "/api/login");
    })
    .catch(function(err) {
      res.status(401).json(err);
    });
  });
  */

  /* Adding tested post method. need to check if db.User.create is correct method using sequelize
  This may already be taken care of with bcrypt being called in the User model,
  if so the above function should work for creating and hashing password login info.
  app.post("/api/newuser", async (req, res) => {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const newUser = { userName: req.body.userName, password: hashedPassword };
      db.User.create(newUser);
      res.status(201).send()
    } catch {
      res.status(500).send()
    }
  });
  */

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



