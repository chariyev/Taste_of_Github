const { Sequelize, Model, DataTypes } = require('sequelize');
const db = require('../config/db');

const customer = db.define('customer', {});
