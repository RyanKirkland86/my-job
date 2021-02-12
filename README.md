# My Job

## Project Summary:

This is a full stack web application that empowers a user to better ogranize their job search. The user can create a unique profile, add job applications, track their status, update with notes, and compare data.

[DeployedSite](https://fathomless-atoll-85765.herokuapp.com/)

![IMAGE](https://github.com/profjjk/my-job/blob/main/public/img/Landing%20Page.jpg)
<br>

## Table of Contents:

* [Technologies Used](#Technologies-used:)
* [Installation](#Installation:)
* [Process](#Process:)
* [Authors](#Authors:)
* [License](#License:)
* [Acknowledgements](#Acknowledgements:)

## Technologies Used:

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
- [Moment.js](https://momentjs.com/)
- [mysql2](https://www.npmjs.com/package/mysql2)
- [Passport.js](passport.js)
- [passport-local](http://www.passportjs.org/packages/passport-local/)
- [Visual Studio Code](https://code.visualstudio.com/)

## Installation:



## Process:
Here we create a custom Handlebars helper to extract a small section from a long date string.
```
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


## Authors:

- Jordan Kelly
    - [GitHub](https://github.com/profjjk)
    - [LinkedIn](https://www.linkedin.com/in/the-real-jordan-kelly/)
- Shaun Limbeek
    - [GitHub](https://github.com/slimbeek6)
    - [LinkedIn]()
- Ryan Kirkland
    - [GitHub](https://github.com/RyanKirkland86)
    - [LinkedIn](https://www.linkedin.com/in/ryan-kirkland-619942200/)
- [Contributors](https://bootcamp.berkeley.edu/coding/)

## License:

This Project is licensed under the MIT License.


## Acknowledgements:
A special thanks to our instructors Jerome, Mahi, Manuel, and Kerwin for all of your help and support. You guys are the best!

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)