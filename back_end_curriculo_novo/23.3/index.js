const express = require('express');
const bodyParser = require('body-parser');
const joi = require('joi');

const middlewares = require('./controllers/middlewares');
const peopleController = require('./controllers/peopleController');

const app = express();

app.use(bodyParser.json());

app.use('/people', peopleController);

app.use(middlewares.joiError);
app.use(middlewares.domainError);
app.use(middlewares.error);

app.listen(3000, () => {
  console.log('Listening on port 3000');
});