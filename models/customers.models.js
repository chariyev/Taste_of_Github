const { Sequelize, Model, DataTypes } = require('sequelize');
const db = require('../config/db');

const customers = db.define('customers', {
  firstname: {
    type: Sequelize.STRING,
  },
  lastname: {
    type: Sequelize.STRING,
  },
  age: {
    type: Sequelize.STRING,
  },
});

module.exports = customers;
