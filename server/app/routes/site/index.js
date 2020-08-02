const express = require('express')

const app = express.Router()

app.get('/trovo', async (req, res, next) => {
  res.render('trovo');
});

app.get('/streamlabs', async (req, res, next) => {
  res.render('streamlabs');
});

app.get('/streamelements', async (req, res, next) => {
  res.render('streamelements');
});

app.get('/developers', async (req, res, next) => {
  res.render('developers');
});

app.get('/', async (req, res, next) => {
  res.render('index');
});

module.exports = app
