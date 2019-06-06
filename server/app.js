var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

const { notFound, errorHandler } = require('./middlewares');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Vue Auth App! 🌈 💚'
  });
});


app.use(notFound);
app.use(errorHandler);

module.exports = app;
