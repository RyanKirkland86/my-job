// Dependencies
// =============================================================
var express = require("express");
var session = require("express-session");
var exphbs = require('express-handlebars');
var _handlebars = require('handlebars');
var { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');
var passport = require("./config/passport");
var moment = require("moment");


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

//Sessions to keep track of user's login status
app.use(session({ secret: "myjobsearch", resave: true, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());


// Configures Handlebars and helpers.
// =============================================================
var hbs = exphbs.create({
  defaultLayout: "main", 
  handlebars: allowInsecurePrototypeAccess(_handlebars),
  helpers: {
    formatDate: function(datetime) {
      var date = datetime.toString();
      return date.substr(4, 11);
    }
  }
});
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// Routes
// =============================================================
require("./routes/user-api-routes.js")(app);
require("./routes/application-api-routes.js")(app);
require("./routes/note-api-routes.js")(app);
require("./routes/html-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
