const { Sequelize, Model, DataTypes } = require('sequelize');
const db = require('../config/db');

const customers = db.define(
	'customers',
	{
		firstName: {
			type: Sequelize.STRING,
		},
		lastName: {
			type: Sequelize.STRING,
		},
		age: {
			type: Sequelize.INTEGER,
		},
	},
	{
		timestamps: false,
	}
);

module.exports = customers;
