const express = require('express');
const products = require('../models/products.model');
const db = require('../config/db');
const router = express.Router();

//GET ALL PRODUCTS
router.get('/', async (req, res) => {
	let prod = await products.findAll();

	try {
		return res.status(200).send(prod);
	} catch (err) {
		return res.status(400).json({
			message: `Error occure: ${err}`,
		});
	}
});

//CREATE A PRODUCT
router.post('/create', async (req, res) => {
	let { productName, price, quantity } = req.body;

	let createProd = await products.create({
		productName,
		price,
		quantity,
	});
	try {
		return res.status(201).send(createProd);
	} catch (err) {
		return res.status(400).send({
			message: `Error occured: ${err}`,
		});
	}
});

//GET A PRODUCT
router.get('/:id', async (req, res) => {
	let { id } = req.params;

	// if (!id) {
	// 	return res.send({
	// 		message: `Please, provide the id`,
	// 	});
	// }
	let cprod = await products.findOne({
		where: {
			id,
		},
	});

	if (!cprod) {
		return res.status(400).send({
			message: `product provide ID ${id} was not found`,
		});
	}

	try {
		return res.status(400).send(cprod);
	} catch (err) {
		return res.status(400).send({
			message: `Error occured: ${err}`,
		});
	}
});

//UPDATE A PRODUCT
router.post('/update/:id', async (req, res) => {
	let { productName, price, quantity } = req.body;
	let { id } = req.params;

	// if (!id) {
	// 	return res.status(400).send({
	// 		message: `Please kindly provide the ID that you want to update`,
	// 	});
	// }

	let prod = await products.findOne({
		where: {
			id,
		},
	});

	if (!prod) {
		return res.status(400).send({
			message: `No products with ID ${id}`,
		});
	}

	try {
		if (productName) {
			prod.productName = productName;
		}
		if (price) {
			prod.price = price;
		}
		if (quantity) {
			prod.quantity = quantity;
		}
		prod.save();
		return res.status(200).send({
			message: `Product has been succefully updated`,
		});
	} catch (err) {
		return res.status(400).send({
			message: `Error occured: ${err}`,
		});
	}
});

//DELETE A PRODUCT
router.post('/delete/:id', async (req, res) => {
	let { id } = req.params; // let {id} = req.body  // ---- need provide id number that wanted
	let prod = await products.findOne({
		where: {
			id,
		},
	});

	if (!prod) {
		return res.status(400).send({
			message: `No product exist with id ${id}`,
		});
	}

	try {
		await prod.destroy();
		return res.status(200).send({
			message: `Selected product ${id} has been succefully deleted `,
		});
	} catch (err) {}
});

module.exports = router;
