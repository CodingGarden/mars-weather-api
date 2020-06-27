const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');

require('dotenv').config();

const middlewares = require('./middlewares');
const api = require('./api');

const app = express();
app.set('trust proxy', 1);

app.use(morgan('dev'));
app.use(helmet());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄'
  });
});

app.use('/api/v1', api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
