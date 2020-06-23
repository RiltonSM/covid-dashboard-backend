const express = require('express');
const routes = express.Router();

const controllers = require('./controllers/CovidController');

routes.get('/brazil', controllers.index);
routes.get('/brazil/uf/:state', controllers.show);
routes.get('/brazil/casesNew', controllers.showCasesNew);
routes.get('/brazil/casesAcc', controllers.showCasesAcc);
routes.get('/brazil/deathsNew', controllers.showDeathsNew);
routes.get('/brazil/deathsAcc', controllers.showDeathsAcc);
routes.get('/brazil/date', controllers.showDay);

routes.post('/addData');

module.exports = routes;