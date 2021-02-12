# My Job

## Project Summary

This is a full stack web application that empowers a user to better ogranize their job search. The user can create a unique profile, add job applications, track their status, update with notes, and compare data.

[DeployedSite](https://fathomless-atoll-85765.herokuapp.com/)

![IMAGE](https://github.com/profjjk/my-job/blob/main/public/img/Landing%20Page.jpg)
<br>

## Table of Contents

* [Technologies Used](#technologies-used)
* [Process](#process)
* [Authors](#authors)
* [License](#license)
* [Acknowledgements](#acknowledgements)

## Technologies Used

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [Bootstrap](https://getbootstrap.com/)
- [JavaScript](https://www.javascript.com/)
- [jQuery](https://jquery.com/)
- [JSON](https://www.json.org/json-en.html)
- [MySQL](https://www.mysql.com/)
- [Sequelize](https://sequelize.org/)
- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/)
- [bcryptjs](https://www.npmjs.com/package/bcryptjs)
- [Chart.js]()
- [Day.js](https://day.js.org/)
- [express-session](https://www.npmjs.com/package/express-session)
- [express-handlebars](https://www.npmjs.com/package/express-handlebars)
- [mysql2](https://www.npmjs.com/package/mysql2)
- [Passport.js](passport.js)
- [passport-local](http://www.passportjs.org/packages/passport-local/)
- [Visual Studio Code](https://code.visualstudio.com/)


## Process

This project was a great learning experience in client/server interraction using session based authentication. In the following code snippet when the user clicks the login button on the client side, the getUser function is executed which sends an ajax call to the server.:

```javascript
function getUser(username, password) {
    $.ajax(`api/login`, {
        type: "POST",
        data: {
            userName: username,
            password: password
        },
    }).then(function(result) {
        if(result.message == "Redirect") {
            window.location.replace(result.url);
        }
    });
}
```

The server responds with a post request to our database, which uses Passport.js to check if the user is authenticated and then responds with the redirect to the user’s dashboard page:

```javascript
app.post("/api/login", passport.authenticate("local"), function(req, res) {
    console.log(req.user.dataValues.id);
    
    res.json({
        message: "Redirect",
        url: "/dashboard/" + req.user.dataValues.id
    })
});
```
=======
Here we create a custom Handlebars helper to extract a small section from a long date string.
```javascript
var hbs = exphbs.create({
  defaultLayout: "main", 
  helpers: {
    formatDate: function(datetime) {
      var date = datetime.toString();
      return date.substr(4, 11);
    }
  }
});
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
```


## Authors

- Jordan Kelly
    - [GitHub](https://github.com/profjjk)
    - [LinkedIn](https://www.linkedin.com/in/the-real-jordan-kelly/)
- Shaun Limbeek
    - [GitHub](https://github.com/slimbeek6)
    - [LinkedIn]()
- Ryan Kirkland
    - [GitHub](https://github.com/RyanKirkland86)
    - [LinkedIn](https://www.linkedin.com/in/ryan-kirkland-619942200/)

## License

This Project is licensed under the MIT License.<br>
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## Acknowledgements
A special thanks to our instructors Jerome, Mahi, Manuel, and Kerwin for all of your help and support. You guys are the best!
- [UC Berkeley](https://bootcamp.berkeley.edu/coding/)
