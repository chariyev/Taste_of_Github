const Sequelize = require('sequelize');

const db = new Sequelize(
  'Northwind',
  'sa',
  '282208',
  // process.env.DB_NAME,
  // process.env.DB_USERNAME,
  // process.env.DB_PASSWORD,
  {
    host: 'localhost',
    dialect: 'mssql',
  }
);

module.exports = db;
