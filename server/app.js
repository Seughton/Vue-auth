const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('dotenv').config();
const passport = require('passport')
const auth = require('./auth')

const app = express();

const { notFound, errorHandler } = require('./middlewares');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());
app.use('/auth',auth)

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Vue Auth App! 🌈 💚'
  });
});

app.use(notFound);
app.use(errorHandler);

module.exports = app;
