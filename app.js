// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv/config");

// ℹ️ Connects to the database
require("./starter-code/db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

// Handles the handlebars
// https://www.npmjs.com/package/hbs
const hbs = require("hbs");

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./starter-code/config")(app);

// default value for title local
const projectName = "movies-lab";
const capitalized = (string) => string[0].toUpperCase() + string.slice(1).toLowerCase();

app.locals.title = `${capitalized(projectName)} created with IronLauncher`;

// 👇 Start handling routes here
const index = require("./starter-code/routes/index");
const celebrities = require("./starter-code/routes/celebrities");
const movies = require("./starter-code/routes/movies");

app.use("/", index);
app.use('/', celebrities);
app.use('/', movies);

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./starter-code/error-handling")(app);

module.exports = app;
