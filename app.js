/*
 * Developers:
 * - First Name: Elad
 * - Last Name: Ron
 * - ID: 318432937
 *
 * - First Name: Ami
 * - Last Name: Berebi
 * - ID: 208890293
 */

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');

// Importing route modules
const indexRouter = require('./routes/indexRouter');
const aboutRouter = require('./routes/aboutRouter');
const addCaloriesRouter = require('./routes/CaloriesRouter'); // Renamed for consistency
const usersRouter = require('./routes/usersRouter');
const reportRouter = require('./routes/reportRouter');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views')); // Setting views directory for rendering views
app.set('view engine', 'pug'); // Using Pug as the view engine

app.use(morgan('dev')); // Logging HTTP requests in development mode
app.use(express.json()); // Parsing incoming JSON requests
app.use(express.urlencoded({ extended: false })); // Parsing URL-encoded form data
app.use(cookieParser()); // Parsing cookies
app.use(express.static(path.join(__dirname, 'public'))); // Serving static files from the 'public' directory

// Routing middleware setup
app.use('/', indexRouter); // Mounting indexRouter at '/'
app.use('/about', aboutRouter); // Mounting aboutRouter at '/about'
app.use('/users', usersRouter); // Mounting usersRouter at '/users'
app.use('/addcalories', addCaloriesRouter); // Mounting addCaloriesRouter at '/addcalories'
app.use('/report', reportRouter); // Mounting reportRouter at '/report'

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404)); // Forwarding to error handler if route not found
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message; // Exposing error message to views
  res.locals.error = req.app.get('env') === 'development' ? err : {}; // Exposing error details in development mode

  // render the error page
  res.status(err.status || 500); // Setting response status
  res.render('error'); // Rendering error page using the 'error' view
});

module.exports = app; // Exporting the Express application instance

