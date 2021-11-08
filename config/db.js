const Sequelize = require("sequelize");

const db = new Sequelize("Northwind", "sa", "282208", {
  host: "localhost",
  dialect: "mssql",
});
db.authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log("Error", err));

module.exports = db;
