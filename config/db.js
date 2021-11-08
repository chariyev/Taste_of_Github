const Sequelize = require('sequelize');

const db = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: 'localhost',
    dialect: 'mssql',
  }
);
db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch((err) => console.log('Error', err));

module.exports = db;
