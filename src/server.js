require('dotenv/config');
const express = require('express');
const cors = require('cors');

var whitelist = ['http://covid-dashboard-ce.herokuapp.com/', 'https://covid-dashboard-ce.herokuapp.com/']
var corsOptions = {
  origin: 'http://covid-dashboard-ce.herokuapp.com/'
}

const app = express();
const routes = require('./routes');
app.use(cors(corsOptions));
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333, () => {
    console.log('Servidor online');
});
