const express = require('express');
const path = require('path');

const app = express.Router();

app.use('/api', require(path.join(__dirname, 'api', 'index.js')));

app.use('/', require(path.join(__dirname, 'site', 'index.js')));

module.exports = app;
