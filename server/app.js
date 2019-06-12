const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('dotenv').config();
const passport = require('passport')
const auth = require('./auth')
const client = require('./models/database')

const app = express();

const { notFound, errorHandler } = require('./middlewares');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());
app.use('/auth',auth)

app.get('/', async(req, res) => {
  let all = await client.query('SELECT * FROM users')
  console.log(all)
  res.send(all.rows)
});

app.get('/getUser', async(req,res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
  let id = req.query.id
  let user = await client.query("SELECT * FROM users WHERE id = $1", [id])
  res.send(user.rows[0])
} )

app.use(notFound);
app.use(errorHandler);

module.exports = app;
