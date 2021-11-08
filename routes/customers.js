const express = require('express');
const customers = require('../models/customers.models');
const db = require('../config/db');
const router = express.Router();

router.get('/', (req, res) => {
  customers
    .findAll()
    .then((customers) => {
      console.log(customers);
      res.sendStatus(200);
    })
    .catch((err) => console.log('Error name', err));
});

module.exports = router;
