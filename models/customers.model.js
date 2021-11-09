const { Sequelize, Model, DataTypes } = require('sequelize');
const db = require('../config/db');

const customers = db.define(
	'customers',
	{
		// id: {
		// 	type: DataTypes.INTEGER,
		// 	primaryKey: true,
		// 	autoIncrement: true,
		// 	allowNull: false,
		// },
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
