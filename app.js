'use-strict';

require('dotenv').config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var routes = require('./api/routes/index.js')

var app = express();

var mongoose = require('mongoose');
// Import models
var TorontoMeals = require('./api/models/torontoMealModel')

// Mongoose instance url connection
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_URL);


// Express middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Register routes
routes(app)

module.exports = app;
