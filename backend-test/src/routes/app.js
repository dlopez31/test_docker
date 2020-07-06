const express = require('express');
const Product = require('../models/product');
const { query } = require('../middlewares/query');
const app = express();

app.get('/', (req, res) => {
  let pagina = Number(req.query.pagina) || 1;
  let skip = pagina - 1;
  skip = skip * 10;
  Product.find({}, { _id: 0 })
    .sort({ id: -1 })
    .skip(skip)
    .limit(100)
    .exec()
    .then(async (products) => {
      if (products.length > 0) {
        res.status(200).send({
          ok: true,
          pagina,
          products,
          palindomo: false,
        });
      } else {
        res.status(204).send();
      }
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.get('/:valor', query, async (req, res) => {
  let pagina = Number(req.query.pagina) || 1;
  let skip = pagina - 1;
  skip = skip * 10;
  const query = req.busqueda;

  Product.find(query, { _id: 0 })
    .sort({ id: -1 })
    .skip(skip)
    .limit(100)
    .exec()
    .then((products) => {
      if (products.length > 0) {
        if (req.palindromo) {
          products.map((data) => (data.price = data.price / 2));
        }
        res.status(200).send({
          ok: true,
          pagina,
          products,
          palindomo: req.palindromo,
        });
      } else {
        res.status(204).send();
      }
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

module.exports = app;
