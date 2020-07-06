const express = require('express');
const MongoClient = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const appRoutes = require('./routes/app');
const { BD_LOCAL, PORT } = require('../config');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors({ origin: true, credentials: true }));

app.use('/products', appRoutes);

MongoClient.connect(
  BD_LOCAL,
  { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
  (err) => {
    if (err) throw err;
    console.log('Base de datos: \x1b[32m%s\x1b[0m', 'online');
  }
);

app.listen(PORT, () => {
  console.log('Express server puerto 3000: \x1b[32m%s\x1b[0m', 'online');
});
