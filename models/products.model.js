const { Sequelize, Model, DataTypes } = require('sequelize');
const db = require('../config/db');

const products = db.define(
	'products',
	{
		productName: {
			type: Sequelize.STRING,
		},
		price: {
			type: Sequelize.INTEGER,
		},
		quantity: {
			type: Sequelize.INTEGER,
		},
	},
	{
		timestamps: false,
	}
);

module.exports = products;
