const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { router } = require('./router');

const app = express();

// middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

module.exports = { app };
