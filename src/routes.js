const express = require('express');
const routes = express.Router();

const controllers = require('./controllers/CovidController');

routes.get('/brazil/casesNew', controllers.showCasesNew);
routes.get('/brazil/casesAcc', controllers.showCasesAcc);
routes.get('/brazil/deathsNew', controllers.showDeathsNew);
routes.get('/brazil/deathsAcc', controllers.showDeathsAcc);
routes.get('/brazil/date', controllers.showDay);

module.exports = routes;