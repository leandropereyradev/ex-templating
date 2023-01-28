const express = require('express');
const logger = require('morgan');

// Create app server
const app = express();

// Configure hbs as view engine
// Iteration 1: setup hbs as view engine
require('./config/hbs.config');
app.set('view engine', 'hbs')
app.set('views', `${__dirname}/views`)

app.use(logger('dev'));

// Iteration 5: configure body parser

// Iteration 2: configure global template vars (res.locals.*)

// Iteration 1: configure router
const routes = require('./config/routes.config')
app.use(routes)


const port = process.env.PORT || 3000;
app.listen(port, () => console.info(`App listening at port http://localhost:${port}`))
